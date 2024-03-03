<template>
  <div v-if="currentService">
    <main class="main-section position-relative">
      <img alt="" class="wave-line" src="@/assets/images/wave-line.svg">

      <b-container>
        <breadcrumbs second>
          <ne-link to="/services">
            Услуги
          </ne-link>
          <template #second>
            {{ currentService.name }}
          </template>
        </breadcrumbs>

        <b-row>
          <b-col cols="12" lg="7">
            <h2 class="headline" data-aos="fade-right" v-html="currentService.headline">
            </h2>
          </b-col>
          <b-col cols="12" data-aos="fade-left" lg="5" v-html="currentService.service_description">
          </b-col>
        </b-row>

        <h4 class="mt-3 mt-md-4 mb-3 cases-caption">{{ currentService.cases.caption }}</h4>
        <div class="cases-carousel position-relative d-flex" data-aos="fade-down">
          <div :class="activeSlide === 0 && 'opacity-0'" class="prev-case d-flex position-absolute">
            <button @click="prevSlide()">
              <i class="material-icons-round">chevron_left</i>
            </button>
          </div>
          <carousel
            :navigate-to="activeSlide"
            :pagination-enabled="false"
            :per-page="slidesPerPage"
            :scroll-per-page="false"
            autoplay
            autoplay-hover-pause
            :autoplay-timeout="1500"
            class="w-100"
          >
            <slide v-for="(caseItem, index) in serviceCases" :key="index">
              <ne-case-rounded
                :background="caseItem.background_image"
                :categories="caseItem.categories"
                :description="caseItem.description"
                :name="caseItem.name"
                :to="'/portfolio/' + caseItem.slug"
              />
            </slide>
          </carousel>
          <div class="next-case d-flex position-absolute">
            <button @click="nextSlide">
              <i class="material-icons-round">chevron_right</i>
            </button>
          </div>
        </div>
      </b-container>
    </main>

    <section class="reasons">
      <b-container>
        <ne-headline variant="dark">{{currentService.denomination}}</ne-headline>

        <div class="items">
          <b-row>
            <b-col v-for="(reason, index) in currentService.reasons" :key="index" :data-aos-delay="100 * (index + 1)"
                   class="mt-3 mb-3 mb-md-5"
                   cols="12"
                   data-aos="fade-down"
                   lg="4"
                   md="6"
            >
              <order-card>
                <template #number>0{{ index + 1 }}</template>
                <template #header>{{ reason.header }}</template>
                <template #description>{{ reason.caption }}</template>
              </order-card>
            </b-col>
          </b-row>
        </div>

        <div class="d-flex">
          <ne-btn class="mx-auto" variant="light" @click="$bvModal.show('modal-contacts')">Заказать {{ currentService.additionally }}</ne-btn>
        </div>
      </b-container>
    </section>

    <section class="leave-contacts">
      <b-container>
        <ne-headline variant="dark">
          Давайте сотрудничать!
        </ne-headline>

        <b-row class="flex-column-reverse flex-lg-row mt-5">
          <b-col class="mt-4 mt-lg-0" cols="12" lg="7">
            <b-row>
              <b-col cols="12" lg="10">
                <div class="ne-card dark text-center" data-aos="fade-right">
                  <ne-contacts variant="dark"/>
                </div>
                <div class="ne-card dark text-center mt-4 d-flex flex-column" data-aos="fade-right">
                  <h4 class="call-header mb-3">Оставьте контакты!</h4>
                  <ne-feedback-form
                    background-color="#1D2239"
                    class="feedback mx-auto"
                    color="white"
                    variant="light"
                    @submit="({name, phone, email}) => {$router.push('/client?name=' + name + '&phone=' + phone + '&email=' + email); $bvModal.hide('modal-contacts')}"
                  />
                </div>
              </b-col>
              <b-col class="d-flex justify-content-center">
                <div class="bordered"></div>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" lg="5">
            <h4 class="mb-4 service-questions">Отвечаем на вопросы про {{ currentService.additionally }}</h4>

            <ne-collapse v-for="(faq, index) in currentService.faq" :key="index"
                         :divider="index !== currentService.faq.length - 1"
                         class="mt-2 mt-lg-3"
                         data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-offset="-200">
              <template #question>
                {{ faq.question }}
              </template>

              {{ faq.answer }}
            </ne-collapse>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/sections/components/Breadcrumbs";
import services from "@/assets/data/services.json";
import cases from "@/assets/data/cases.json";
import OrderCard from "@/components/sections/components/OrderCard";

export default {
  name: "index",
  components: {OrderCard, Breadcrumbs},
  data() {
    return {
      services,
      cases,
      currentService: null,
      activeSlide: 0,
      slidesPerPage: 1
    }
  },
  computed: {
    serviceCases() {
      return this.cases.filter(c => this.currentService.cases.items.includes(c.id))
    }
  },
  mounted() {
    if (!this.services.map(s => s.slug).includes(this.$route.params.service)) {
      this.$nuxt.error("Не найдено")
    } else {
      this.currentService = this.services.find(s => s.slug === this.$route.params.service)
    }
    document.title = this.currentService.name + " | Neutron Agency"

    const windowWidth = window.innerWidth
    if (windowWidth > 1200) {
      this.slidesPerPage = 3
    } else if (windowWidth > 998) {
      this.slidesPerPage = 2
    } else {
      this.slidesPerPage = 1
    }
  },
  methods: {
    prevSlide() {
      if (this.activeSlide > 0) {
        this.activeSlide -= 1
      }
    },
    nextSlide() {
      if (this.activeSlide < this.currentService?.cases?.items?.length - 3) {
        this.activeSlide += 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main-section {
  padding-bottom: 80px;
  z-index: 5;

  .wave-line {
    position: absolute;
    width: 100%;
    bottom: 100px;
    z-index: -1;
    opacity: .8;

    @media screen and (max-width: 998px) {
      bottom: 200px;
    }
  }
}

.headline {
  font-size: 64px;
  line-height: 1.45;
  user-select: none;
  font-weight: 800;
}

.cases-caption {
  font-size: 18px;
  color: #808080;
}

@media screen and (max-width: 1200px) {
  .headline {
    font-size: 48px;
  }
}

@media screen and (max-width: 768px) {
  .headline {
    font-size: 32px;
  }
}

.prev-case, .next-case {
  height: 100%;
  z-index: 2;
  width: 100px;
  opacity: 1;
  transition: opacity .3s ease;

  button {
    margin-top: auto;
    margin-bottom: auto;
    display: flex;
    background: white;
    padding: 4px;
    border: 1px #dfdfdf solid;
    border-radius: 100px;
    color: var(--blue-accent)
  }
}

.opacity-0 {
  opacity: 0;
}

.prev-case {
  background: linear-gradient(90deg, var(--background-color), rgba(255, 255, 255, 0));
  left: 0;
  justify-content: start;
}

.next-case {
  background: linear-gradient(-90deg, var(--background-color), rgba(255, 255, 255, 0));
  right: 0;
  justify-content: end;
}

@media screen and (max-width: 768px) {
  .next-case, .prev-case {
    display: none !important;
  }
}

.reasons {
  background: var(--dark-gradient-top-to-bottom);
  padding-top: 100px;
  padding-bottom: 50px;
  color: white;

  .items {
    margin-top: 100px;
  }
}

.leave-contacts {
  background: var(--dark-blue-accent);
  padding-top: 40px;
  padding-bottom: 60px;
  color: white;
}

.bordered {
  border-right: 2px dashed rgba(255, 255, 255, .5);
}

.service-questions {
  font-size: 32px;

  @media screen and (max-width: 1200px) {
    font-size: 24px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
    text-align: center;
  }
}
</style>
