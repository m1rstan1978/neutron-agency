<template>
<section class="home-about">
  <b-container class="position-relative">

    <ne-headline variant="dark">О компании</ne-headline>

    <div class="background" ref="background">
<!--      <div class="floating-circle" v-for="(_, i) in Array(10)" :style="getRandomStyle(i)" :key="_"></div>-->
    </div>

    <b-row class="mt-5">
      <b-col cols="12" md="6">
        <h6 class="since" data-aos="fade-down">Нейтрон существует <span class="accent-text"> с 2018 года</span>. За это время мы успели совместно с нашими клиентами воплотить в жизнь больше <span class="accent-text"> 120 проектов</span> различной сложности</h6>
      </b-col>
      <b-col cols="12" md="6" class="description" data-aos="fade-down">
        <p class="mb-1">Одной из главных наших ценностей является уникальный и доступный сервис, который позволяет нашим клиентам внедрять IT-системы на скорости и высоком уровне</p>
        <p class="mb-1">Наша команда - не только высококвалифицированные специалисты, знающие, как решить любую техническую команду. Нейтрон - большая семья, в которой царит порядок и гармония</p>
      </b-col>
    </b-row>

    <b-row class="mt-5 d-none d-md-block" data-aos="fade-up">
      <b-col cols="12" xl="10" offset-xl="1">
        <img class="w-100" src="@/assets/images/numbers-content.svg" style="pointer-events: none;"/>
      </b-col>
    </b-row>

    <div class="mobile-numbers d-block d-md-none mt-4">
      <mobile-number-card v-for="card in numbers" :key="card.number">
        <template #number>{{card.number}}</template>
        <template #units><span v-html="card.unit"></span></template>
        <template #header>{{card.header}}</template>
        <template #description>{{card.description}}</template>
      </mobile-number-card>
    </div>
  </b-container>
</section>
</template>

<script>
import MobileNumberCard from "~/components/sections/home/components/MobileNumberCard";
import numbers from "@/assets/data/numbers.json"


export default {
  name: "About",
  components: {MobileNumberCard},
  data() {
    return {
      numbers
    }
  },
  methods: {
    getRandomStyle(i) {
      let size = Math.floor(Math.random() * (50 - 180) + 180)
      let delay = Math.floor(Math.random() * 20 - 20)
      let duration = Math.floor(Math.random() * 50) + 20

      return `
      width: ${size}px;
      height: ${size}px;
      animation: ${duration}s circle-float-${i} infinite ease-in-out`
    }
  }
}
</script>

<style scoped lang="scss">
@use "sass:math";

.home-about {
  background: linear-gradient(180deg, #313860 0%, #151928 25.06%);
  padding-top: 60px;
  padding-bottom: 90px;
  color: white;

  @media screen and (max-width: 998px) {
    padding-top: 50px;
    padding-bottom: 55px;
  }
}

.since {
  font-size: 24px;
  font-weight: 600;
}

.description {
  line-height: 1.3;
}

@media screen and (max-width: 998px) {
  .since {
    font-size: 20px;
  }

  .description {
    font-size: 18px;
  }
}

.background {
  position: absolute;
  width: 100%;
  height: 70%;
  bottom: 0;
}

.floating-circle {
  background: white;
  opacity: .1;
  border-radius: 1000px;
  position: absolute;
}
</style>

<style lang="scss">
@for $i from 0 through 10 {
  @keyframes circle-float-#{$i} {
    0% {
      opacity: 0;
      left: random(100) * 1%;
      top: random(100) * 1%;
    }

    10% {
      filter: blur(random(5) + px);
      opacity: ((random(8)) / 100);
    }

    100% {
      opacity: 0;
      left: random(100) * 1%;
      top: random(100) * 1%;
      filter: blur(random(13) + px);
    }
  }
}
</style>
