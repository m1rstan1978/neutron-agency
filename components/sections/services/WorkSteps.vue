<template>
  <section>
    <img class="w-100 wave-steps" src="@/assets/images/wave-steps.svg" alt="wave" >
    <div id="steps" class="work-steps">
      <b-container>
        <ne-headline variant="dark">Этапы работы</ne-headline>

        <div class="steps">
          <b-row>
            <b-col cols="12" lg="4" md="6" v-for="step in workSteps" :key="step.header">
              <work-step class="step" data-aos="fade-down">
                <template #icon>{{step.icon}}</template>
                <template #header><span v-html="step.title"/></template>
                <template>{{step.description}}</template>
              </work-step>
            </b-col>
          </b-row>
        </div>

        <div class="d-flex justify-content-center mt-5">
          <ne-btn data-aos="fade-down" variant="light" @click="$bvModal.show('modal-contacts')">Связаться с нами</ne-btn>
        </div>
      </b-container>
    </div>
  </section>

</template>

<script>
import WorkStep from "@/components/sections/services/components/WorkStep";

export default {
  name: "WorkSteps",
  components: {WorkStep},
  data() {
    return {
      workSteps: [
        {
          title: "01. Обсуждение проекта",
          description: "Знакомимся с Вами, обсуждаем основные детали проекта и считаем основную смету",
          icon: "question_answer"
        },
        {
          title: "02. Заполнение брифа",
          description: "Задаем Вам самые важные вопросы о проекте, чтобы все получилось именно так, как Вам хочется",
          icon: "description"
        },
        {
          title: "03. Подписание договора",
          description: "Формируем договор и подписываем его с обеих сторон",
          icon: "note_alt"
        },
        {
          title: "04. Проек&shy;тирование",
          description: "Делаем макеты и наброски для согласования с Вами",
          icon: "engineering"
        },
        {
          title: "05. Разработка",
          description: "Разрабатываем сайт и делаем все сопутствующие материалы",
          icon: "code"
        },
        {
          title: "06. Результат",
          description: "Вы получаете готовый результат и все необходимые материалы",
          icon: "outlined_flag"
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.work-steps {
  padding-top: 120px;
  padding-bottom: 50px;
  background: var(--dark-gradient-top-to-bottom);
  color: white;

  .steps {
    margin-top: 80px;

    @media screen and (max-width: 992px) {
      margin-top: 60px;
    }

    @media screen and (max-width: 768px) {
      margin-top: 40px;
    }

    .step {
      margin-top: 80px;

      @media screen and (max-width: 992px) {
        margin-top: 40px;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .wave-steps{
    margin-top: -20px;
  }
}
</style>
