<template>
  <div :class="{blackout: open}">
    <b-container>
    <div class="navigation d-flex">
      <breadcrumbs second>
        <ne-link to="/portfolio">
          Услуги
        </ne-link>
        <template #second>
          <ne-link to="/client">Стать клиентом</ne-link>
        </template>
      </breadcrumbs>

    </div>
    <b-row class="d-flex align-items-center" data-aos="fade-down">
      <b-col
        cols="12"
        md="6"
      >
        <h2>
          Давайте сотрудничать!
          <br>
          <span class="headline background-text">
            Оставьте заявку или<br>заполните бриф!
          </span>
        </h2>
      </b-col>
      <b-col
        class="ne-card text-center"
        cols="12"
        md="6">
        <ne-contacts/>
      </b-col>
    </b-row>

    <div class="d-flex justify-content-center flex-wrap mt-5">
      <cat-pill v-for="b_mode in briefModes" class="mx-1 mb-1" :selected="selectedBriefMode === b_mode.name" @click="selectedBriefMode = b_mode.name" :key="b_mode.name">
        {{b_mode.name}}
      </cat-pill>
    </div>

    <b-row class="text-center mt-4">
      <b-col cols="12" data-aos="fade-up" md="5">
        <p class="brief-invite">Напишите письмо
          в свободной форме
        </p>
        <div class="position-relative">
            <span class="topPlaceholder">
              Письмо в свободной форме
            </span>
          <textarea class="textarea-form w-100" placeholder="Наша компания..."/>
        </div>
      </b-col>
      <b-col cols="12" md="2">
        <span class="or">
          -или-
        </span>
      </b-col>
      <b-col cols='12' data-aos="fade-up" md='5'>
        <p class="brief-invite">ответьте на несколько
          вопросов брифа</p>
        <div v-for="(question, index) in selectedBrief.questions" :key="question.placeholder">
          <ne-input v-model="brief.questions[index + '']" :placeholder="question.placeholder" :top-placeholder="question.label" background-color="var(--background-color)" class="mt-4"/>
        </div>
        <div class="d-block text-left mt-3">
          <label class="custom-file-upload">
            <div class="d-flex align-items-center justify-content-center">
              <i class="material-icons-round file">attach_file</i>
              <input type="file"/>
              <span>Прикрепить файл</span>
            </div>
          </label>
        </div>
        <p class="file-description">
          Приложите ТЗ или референсы (это необязательно)
        </p>
      </b-col>
    </b-row>
    <transition name="fade" mode="out-in">
      <div class="sign-up" v-if="!submitted">
        <b-row class="text-center justify-content-center" data-aos="fade-up">
          <b-col cols="12" lg="3" md="4">
            <ne-input v-model="submit.firstName" background-color="var(--background-color)" class="sign-up-input"
                      :max="30"
                      placeholder="Введите имя" top-placeholder="Ваше имя*"/>
          </b-col>
          <b-col cols="12" lg="3" md="4">
            <ne-input v-model="submit.email" background-color="var(--background-color)" class="sign-up-input"
                      placeholder="Введите e-mail"
                      :max="50"
                      top-placeholder="E-mail"/>
          </b-col>
          <b-col cols="12" lg="3" md="4">
            <ne-input v-model="submit.phone" background-color="var(--background-color)" class="sign-up-input"
                      placeholder="+7"
                      type="tel"
                      top-placeholder="Номер телефона"/>
          </b-col>
        </b-row>
        <b-row class="submit justify-content-lg-center flex-column-reverse flex-md-row" data-aos="fade-up">
          <b-col cols="12" lg="3" md="5">
            <ne-btn @click="onSubmit" :disabled="!(submit.firstName && submit.checked &&(submit.phone || (submit.email && submit.email.includes('@'))))">Отправить заявку
            </ne-btn>
            <div class="mt-1 text-danger submit-error text-center" v-if="submitError">
              Произошла ошибка при отправке формы!
              Попробуйте ещё раз
            </div>
          </b-col>
          <b-col class="d-flex privacy" cols="12" lg="4" md="7">
            <b-checkbox v-model="submit.checked" class="ml-3"/>
            <p class="privacy-text">
              Я согласен на <a class="privacy-link" @click="$bvModal.show('modal-privers')">обработку моих персональных данных</a>
              и ознакомился с политикой обработки персональных данных
            </p>
          </b-col>
        </b-row>
      </div>
      <div class="text-center mt-4 mb-4" v-else-if="submitted">
        <h1 class="mb-1 thanks gradient-text">Спасибо!</h1>
        <span>Мы уже получили ваши ответы и скоро с Вами свяжемся!</span>
      </div>
    </transition>
    </b-container>
  </div>
</template>

<script>
import breadcrumbs from "@/components/sections/components/Breadcrumbs";
import CatPill from "@/components/sections/components/CatPill";
import briefModes from "@/assets/data/brief.json";
import {BACKEND_API} from "@/backend.config";

export default {
  name: "client",
  components: {CatPill, breadcrumbs},
  head() {
    return {
      title: "Стать клиентом | Neutron Agency"
    }
  },
  data() {
    return {
      open: false,
      briefModes,
      submit: {
        firstName: "",
        email: "",
        phone: "",
        checked: false,
      },
      brief: {
        letter: "",
        questions: {}
      },
      selectedBriefMode: "Веб-разработка",
      submitted: false,
      submitError: null
    }
  },
  mounted() {
    [this.submit.firstName, this.submit.phone, this.submit.email] = Object.values(this.$route.query)
  },
  computed: {
    selectedBrief() {
      return this.briefModes.find(b => b.name === this.selectedBriefMode)
    }
  },
  methods : {
    open1 () {
      this.open = !this.open
    },
    onSubmit() {
      this.$axios.$post(BACKEND_API + "/requests/create", {
        name: this.submit.firstName,
        phone: this.submit.phone,
        email: this.submit.email,
        briefMode: this.selectedBriefMode,
        briefLetter: this.brief.letter,
        briefAnswers: this.selectedBrief.questions.map(((q, i) => {
          if (this.brief.questions[i.toString()]) {
            return q.label + " - " + (this.brief.questions[i.toString()] || "")
          }
        }))
      })
        .then(() => {
        this.submitted = true
      })
        .catch((e) => {
          this.submitError = e
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.blackout {
  background-color: rgba(0,0,0, 0.181);
  z-index: 1000;
}

h2 {
  font-weight: 800;
  font-size: 60px;
  line-height: 82px;

  @media screen and (max-width: 998px) {
    margin-bottom: 20px;
    font-size: 30px;
    line-height: 41px;
  }
}

.headline{
  line-height: 1.45;
}

p {
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  color: #000000;
  margin-bottom: 30px;


  @media screen and (max-width: 998px) {
    font-size: 20px;
  }
}

.or {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  color: #7092E0;

  font-size: 28px;
  line-height: 38px;

  @media screen and (max-width: 998px) {
    margin: 20px 0;
  }


  &:after {
    display: block;
    content: '';
    height: 100%;
    width: 1px;
    margin-top: 30px;
    border-left: 1px dashed #313131;


    @media screen and (max-width: 768px) {
      display: none;
    }
  }
}

.topPlaceholder {
  position: absolute;
  background: #F8F9FA;
  transition: all .15s ease-in-out;
  font-size: 14px;
  top: -10px;
  left: 12px;
  line-height: 20px;
}

.textarea-form {
  min-height: 400px;
  padding: 15px;
  font-size: 18px;

  transition: all .15s ease-in-out;

  outline: none;
  resize: none;

  background: transparent;
  border: 1px solid var(--text-color);
  border-radius: 10px;

  &:focus {
    border-color: var(--blue-accent);
  }

  &::placeholder {
    font-size: 16px;
    line-height: 25px;
    color: var(--text-color);
    opacity: 0.32;
  }

  @media screen and (max-width: 767px) {
    min-height: auto;
  }
}

.brief-invite {
  line-height: 1.1;
}

.custom-file-upload {
  font-size: 20px;
  color: #7092E0;

  cursor: pointer;
  border: 2px solid #7092E0;
  padding: 12px 30px;
  border-radius: 100px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.07);
  transition: all .3s ease;

  &:not(:disabled):hover {
    box-shadow: 0 0 10px 4px rgba(112, 146, 224, 0.45);
  }

  @media screen and (max-width: 998px) {
    text-align: center;
    display: block;
  }
}

input[type="file"] {
  display: none;
}

.file-description {
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  color: #7A7A7A;
}

.sign-up {
  margin-top: 50px;
  transition: all .3s ease;

  @media screen and (max-width: 768px) {
    margin-top: 0;
  }

  &-input {
    @media screen and (max-width: 998px) {
      margin-top: 30px;
    }
  }

  &.hide {
    height: 0;
    overflow: hidden;
  }
}

.thanks {
  font-weight: 800;
}

.submit {
  display: flex;
  justify-content: center;
  margin-bottom: 130px;
  margin-top: 50px;

  @media screen and (max-width: 988px) {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .submit-error {
    font-size: 12px;
  }
}

.privacy {

  &-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
    text-align: left;
  }

  &-link{
    text-decoration: underline;
    transition: color .2s ease-in;

    &:hover{
      color: var(--blue-accent);
    }
  }

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
}

</style>

<style>
.privacy .custom-control-input:checked ~ .custom-control-label::before {
  border-color: var(--blue-accent);
  background-color: var(--blue-accent);
}
</style>
