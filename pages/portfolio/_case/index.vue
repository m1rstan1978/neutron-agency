<template>
  <div v-if="currentCase">
    <b-container class="case-page">
      <breadcrumbs second>
        <ne-link to="/portfolio">
          Портфолио
        </ne-link>
        <template #second>
          {{ currentCase.name }}
        </template>
      </breadcrumbs>


      <b-row>
        <b-col cols="12" md="6">
          <h2 class="headline">
            «{{ currentCase.name }}»
          </h2>
          <div class="d-flex">
            <span class="mr-2 category" v-for="(category, index) in currentCase.categories" :key="index">
              {{ category }}
            </span>
          </div>
          <p class="task-headline mt-4">Задача</p>
          <p class="task">{{ currentCase.project_task }}</p>
          <div class="center">
            <ne-btn class="mt-5" to="/"  @click="$bvModal.show('modal-contacts')">+ Хочу похожий проект</ne-btn>
          </div>
        </b-col>
        <b-col cols="12" md="6" class="text-center">
          <div class="picture-box">
            <img class="picture" :src="currentCase.main_picture" alt="task-example">
          </div>
<!--          <ne-link class="d-inline-block" to="/">Перейти в галерею</ne-link>-->
        </b-col>
      </b-row>


      <b-row class="mt-5">
        <b-col cols="12" md="6" class="overflow-hidden carousel-sticky__wrapper">
          <div class="carousel-sticky" ref="carousel">
            <carousel
              :per-page="1"
              :pagination-enabled="true"
              :navigation-enabled="false"
              autoplay
              class="text-center project-carousel carousel-sticky"
            >
              <slide v-for="img in currentCase.project_gallery.slice(0, 3)" :key="img">
                <img class="radius" :src="img" alt="slide"/>
              </slide>
            </carousel>

          </div>
          <div class="carousel-sticky-tint">
          </div>
        </b-col>
        <b-col cols="12" md="6" class="mt-3 mt-md-0">
          <h4 class="mb-3">Проделанная работа</h4>
          <p class="prj-description" v-html="currentCase.project_description"></p>
          <p class="prj-description mt-4" v-if="currentCase.project_continuous" v-html="currentCase.project_continuous"></p>
        </b-col>
      </b-row>


      <ne-headline class="mt-5 mb-2">Результаты проекта</ne-headline>
      <div class="d-flex justify-content-between align-items-center flex-column flex-md-row mb-4">
        <p class="result-prj mr-3" v-html="currentCase.project_results"></p>
        <a :href="currentCase.project_link" target="_blank" v-if="currentCase.project_link">
         <ne-btn @click.prevent> Посетить сайт ➡ </ne-btn>
        </a>
      </div>



      <b-modal hide-footer id="modal-catalog" hide-header size="xl" centered content-class="catalog-modal" modal-class="ne-modal__wrapper">
        <div class="close-btn d-flex" @click="$bvModal.hide('modal-catalog')">
          <i class="material-icons-round m-auto">close</i>
        </div>

        <div class="d-flex align-items-center justify-content-around">

          <div class="slide-control modal-viewer-control prev-slide">
              <div class="control__inner pointer" @click="prevCatalogSlide(selectedImage.index, currentCase.project_gallery)">
                <i class="material-icons-round">chevron_left</i>
              </div>
          </div>

          <img :src="selectedImage.item" class="radius catalog-images">

          <div class="slide-control modal-viewer-control next-slide">
              <div class=" control__inner pointer">
                <i class="material-icons-round" @click="nexCatalogSlide(selectedImage.index, currentCase.project_gallery)">chevron_right</i>
            </div>
          </div>

        </div>
      </b-modal>

      <div class="gallery d-flex flex-wrap mb-5">
        <b-col cols="12" md="6" lg="3" class="gallery-item mt-2 mb-3" v-for="(item, index) in currentCase.project_gallery" :key="index">
          <img class="radius pointer" :src="item" @click="$bvModal.show('modal-catalog'); sendImage(item, index)">
        </b-col>
      </div>

      <div class="gallery-mobile text-center">
        <carousel
          :per-page="1"
          :pagination-enabled="true"
          :navigation-enabled="false"
        >
          <slide v-for="(image, index) in currentCase.project_gallery" :key="index">
            <img class="radius" :src="image" alt="slide"/>
          </slide>
        </carousel>
      </div>

      <h4 class="mt-3 mt-md-4 mb-3 cases-caption">Похожие кейсы</h4>
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
          :mouse-drag="false"
          class="w-100"
        >
          <slide v-for="(caseItem, index) in sameCases" :key="index">
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
    <WhyWe/>
  </div>
</template>

<script>
import cases from "@/assets/data/cases.json"
import WhyWe from "@/components/sections/WhyWe";
import Breadcrumbs from "@/components/sections/components/Breadcrumbs";

export default {
  name: "index",
  components: {Breadcrumbs, WhyWe},
  head() {
    return {
      title: "Портфолио | Neutron Agency"
    }
  },
  data() {
    return {
      currentCase: null,
      activeSlide: 0,
      slidesPerPage: 1,
      cases,
      selectedImage: {
        item: '',
        index: ''
      }
    }
  },
  computed: {
    sameCases() {
      if (this.currentCase) {
        return this.cases.filter(c => this.currentCase.same_projects.includes(c.id))
      }
    }
  },
  mounted() {
    this.currentCase = cases.find(c => c.slug === this.$route.params.case)
    if (!this.currentCase) this.$nuxt.error({status: 404, message: "Не найдено"})
    document.title = this.currentCase.name + " | Neutron Agency"

    const windowWidth = window.innerWidth
    if (windowWidth > 1200) {
      this.slidesPerPage = 3
    } else if (windowWidth > 998) {
      this.slidesPerPage = 2
    } else {
      this.slidesPerPage = 1
    }

    window.addEventListener("scroll",  this.moveCarouselOnScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.moveCarouselOnScroll)
  },
  methods: {
    prevSlide() {
      if (this.activeSlide > 0) {
        this.activeSlide -= 1
      }
    },
    moveCarouselOnScroll() {
      if (this.$refs.carousel.getBoundingClientRect().y < 100 && !this.observeScroll && window.innerWidth > 768) {
        this.initScrollPositionCarousel = window.pageYOffset
        this.observeScroll = true
      } else {
        if (window.pageYOffset < this.initScrollPositionCarousel && window.innerWidth > 768) {
          this.$refs.carousel.style.top = `0`
          this.observeScroll = false
        } else {
          this.$refs.carousel.style.top = `${window.pageYOffset - this.initScrollPositionCarousel + 120}px`
        }
      }
    },
    nextSlide() {
      if (this.activeSlide < this.currentService?.cases?.items?.length - 3) {
        this.activeSlide += 1
      }
    },


    sendImage(item, index){
      this.selectedImage.item = item;
      this.selectedImage.index = index;
    },
    prevCatalogSlide(index, pictures){
      if(this.selectedImage.index <= 0){
        this.selectedImage.index = pictures.length -1 ;
      }
      else{
        this.selectedImage.index = (index - 1) % pictures.length;
      }
      this.selectedImage.item = pictures[this.selectedImage.index];
    },
    nexCatalogSlide(index, pictures){
      this.selectedImage.index = (index + 1) % pictures.length;
      this.selectedImage.item = pictures[this.selectedImage.index];
    }
  }
}
</script>

<style lang="scss" scoped>

.headline {
  font-weight: 800;
  font-size: 40px;
  line-height: 50px;

  @media screen and (max-width: 1200px) {
    font-size: 33px;
  }

  @media screen and (max-width: 998px) {
    line-height: 41px;
    font-size: 24px;
  }

  @media screen and (max-width: 767px) {
    text-align: center;
    font-size: 33px;
  }
}

.category {
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  opacity: 0.7;

  @media screen and (max-width: 1200px) {
    font-size: 16px;
    line-height: 15px;
  }

  @media screen and (max-width: 998px) {
    font-size: 14px;
    margin-top: 10px;
  }
}

img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
}

.radius{
  border-radius: 27px;
}

.task-headline {
  margin-bottom: 0;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: var(--text-color);

  @media screen and (max-width: 767px) {
    font-size: 26px;
  }
}

.task {
  font-weight: 400;
  line-height: 27px;
  color: var(--text-color);
}

.center{
  @media screen and (max-width: 767px) {
    text-align: center;
  }
}

h4{
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  color: var(--text-color);

  @media screen and (max-width: 998px) {
    font-size: 25px;
  }
}

p{
  @media screen and (max-width: 998px) {
    font-size: 15px;
  }
}

.case-page {
  padding-bottom: 100px;
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

.cases-caption {
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #919191;
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

.gallery-mobile{
  display: none;
}

@media screen and (max-width: 768px) {
  .next-case, .prev-case, .gallery {
    display: none !important;
  }

  .gallery-mobile{
    display: block!important;
  }
}

.close-btn {
  width: 42px;
  height: 42px;
  position: absolute;
  background: white;
  right: -60px;
  top: -30px;
  opacity: .5;
  border-radius: 100px;
  transition: opacity .1s ease-in-out;
  cursor: pointer;

  i {
    font-size: 28px;
  }

  &:hover {
    opacity: 1;
  }
}


.modal-viewer-control {

  .control__inner {
    background: var(--background-color);
    border-radius: 100px;
    aspect-ratio: 1;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    align-content: center;

    i {
      margin: auto;
    }
  }
}

.slide-control {
  position: absolute;
  user-select: none;

  &.next-slide {
    right: 0;

    @media screen and (max-width: 1200px){
      right: 5px;
    }

    .control__inner {
      z-index: 10;
      margin-right: 60px;
      margin-left: auto;
      color: var(--blue-accent);

      @media screen and (max-width: 1200px){
        margin-right: 0;
      }
    }
  }

  &.prev-slide {
    left: 0;

    @media screen and (max-width: 1200px){
      left: 5px;
    }

    .control__inner {
      z-index: 10;
      margin-left: 60px;
      margin-right: auto;
      color: var(--blue-accent);


      @media screen and (max-width: 1200px){
        margin-left: 0;
      }
    }
  }
}

.catalog-images{
  width: calc(65% - 150px);

  @media screen and (max-width: 1200px){
    width: 100%;
  }
}

</style>

<style lang="scss">
.radius {
  border-radius: 25px;
}

.project-carousel {
  max-height: 450px;

  .VueCarousel-inner {
    max-height: 100% !important;
  }
}

.carousel-sticky {
  position: relative;
  transition: all .3s ease;
}

.carousel-sticky__wrapper {
  position: relative;

  .carousel-sticky-tint {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 150px;
    background: linear-gradient(0deg, #f0f8ff, transparent);
    z-index: 3;
  }
}
</style>


<style lang="scss">

.catalog-modal{
  border-radius: 25px;
  background: transparent;

  .modal-body{
    padding: 20px 0;


    @media screen and (max-width: 1200px){
      padding: 50px;
    }
  }

  img {
    min-width: 90%;
    object-fit: contain;
    max-height: 82vh;
  }
}
</style>
