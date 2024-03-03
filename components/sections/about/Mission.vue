<template>
  <section class="mission">
    <div class="scrolled-header user-select-none">
      <img ref="mission_scroller" class="position-relative" src="@/assets/images/mission.svg"
           style="left: -100px; top: 0">
    </div>

    <b-container>
      <div class="text-center mx-auto mission-text pt-4">
        <h2 class="mission-header">Наша&nbsp;миссия&nbsp;- дать&nbsp;бизнесу возможность закрепиться и развиваться в интернете
        </h2>

        <p class="mb-2 mb-md-3">
          Многие предприниматели не до конца осознают, что им может принести деятельность в интернете.
          Мы готовы делиться своей экспертизой и многолетним опытом, чтобы вместе с вами пройти путь к новым успехам!
        </p>

        <p>
          Наши сотрудники готовы воплощать в жизнь самые различные и амбициозные проекты,
          для этого у нас есть всё необходимое -
          огромный багаж знаний и технические специалисты во всех областях
        </p>
      </div>

      <div class="neutron-in-numbers text-center">
        <ne-headline centered variant-line>О нас в цифрах</ne-headline>
        <div class="box">
          <p>Нейтрон постоянно развивается, но уже сейчас мы можем похвастаться впечатляющими результатами!</p>
        </div>
        <div class="pyramid d-none d-lg-block">
          <b-row v-for="(number, i) in numbers" data-aos="fade-down" class="pyramid-row" :class="i % 2 === 0 && 'light'" :key="number.header">
            <b-col class="text-left" cols="3">
              <div class="description" v-show="i % 2 === 0">
                <h4>{{number.header}}</h4>
                {{number.description}}
              </div>
            </b-col>
            <b-col class="text-center d-flex flex-column pyramid-cluster align-items-center" cols="6">
              <img :src="`/assets/images/numbers-pyramid/${i + 1}.png`"/>
              <div class="my-auto">
                <p class="number m-0">
                  {{ number.number }}
                </p>
                <span class="unit">
                  {{ number.unit }}
                </span>
              </div>
            </b-col>
            <b-col class="text-right" cols="3">
              <div class="description" v-show="i % 2 !== 0">
                <h4>{{number.header}}</h4>
                {{number.description}}
              </div>
            </b-col>
          </b-row>
        </div>

        <div class="mobile-numbers d-block d-lg-none mt-4">
          <mobile-number-card v-for="card in numbers" :unit="card.unit" :key="card.number">
            <template #number>{{ card.number }}</template>
            <template #header>{{ card.header }}</template>
            <template #description>{{ card.description }}</template>
          </mobile-number-card>
        </div>

      </div>
    </b-container>
  </section>
</template>

<script>
import MobileNumberCard from "@/components/sections/home/components/MobileNumberCard";
import numbers from "@/assets/data/numbers.json"

export default {
  name: "Mission",
  components: {MobileNumberCard},
  data() {
    return {
      numbers
    }
  },
  methods: {
    onScroll() {
      this.$refs.mission_scroller.style.left = window.pageYOffset / 3 * -1 - 100 + 'px'
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll)
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll)
  }
}
</script>

<style lang="scss" scoped>
.mission {
  padding-top: 70px;
  padding-bottom: 170px;
  background: var(--dark-gradient-top-to-bottom);
  color: white;
}

.mission-header {
  font-weight: 800;
  font-size: 56px;
}

.mission-text {
  max-width: 1194px;
  margin-bottom: 160px;

  h2 {
    margin-top: 20px;
    margin-bottom: 60px;
  }

  p {
    font-size: 24px;
  }
}

.neutron-in-numbers {
  margin-top: 50px;
}

.box {
  max-width: 776px;
  margin: 24px auto 0 auto;
}

.neutron-in-numbers p {
  font-weight: 500;
  font-size: 28px;
}

.pyramid {
  margin-top: 60px;

  .light {
    color: var(--dark-blue-accent)
  }

  .description {
    font-size: 20px;
    line-height: 1.1;
    opacity: 0.5;
    transition: opacity .3s ease;

    h4 {
      font-size: 24px;
      font-weight: 600;
      line-height: 1;
      white-space: nowrap;

    }

    @media screen and (max-width: 1899px) {
      font-size: 16px;
      h4 {
        font-size: 20px;
      }
    }

    @media screen and (max-width: 1200px) {
      font-size: 13px;
      h4 {
        font-size: 17px;
      }
    }

    color: white;
  }

  .pyramid-row:hover {
    .description {
      opacity: 1;
    }
  }
}

.pyramid-cluster {
  position: relative;
  min-height: 130px;
  z-index: 2;

  @media screen and (max-width: 1900px) {
    min-height: 100px;
  }

  @media screen and (max-width: 1200px) {
    min-height: 80px;
  }

  img {
    position: absolute;
    max-width: 100%;
    z-index: -1;
    user-select: none;
  }

  .number {
    font-size: 48px;
    line-height: 1;
    font-weight: 800;

  }

  .unit {
    font-size: 24px;
    line-height: 1;
    font-weight: 700;
  }

  @media screen and (max-width: 1200px) {
    .number {
      font-size: 42px;
    }

    .unit {
      font-size: 20px;
    }
  }

}

@media screen and (max-width: 1200px) {
  .scrolled-header {
    img {
      height: 75px;
    }
  }

  .mission-header {
    font-size: 42px;
    font-weight: 700;
  }

  .mission-text {
    p {
      font-size: 18px;
    }
  }

  .box p {
    font-size: 24px;
  }
}

@media (max-width: 991px) {
  .mission-text {
    margin-bottom: 80px;
  }

  .mission {
    padding-bottom: 80px;
  }

  .box p {
    font-size: 20px;
  }
}

@media screen and (max-width: 768px) {
  .scrolled-header {
    img {
      height: 50px;
    }
  }

  .mission-header {
    font-size: 26px;
  }

  .mission-text {
    h2 {
      margin-bottom: 30px;
    }

    p {
      font-size: 16px;
    }
  }
}
</style>
