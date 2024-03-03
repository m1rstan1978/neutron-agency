<template>
  <section class="team">
    <b-container>
      <ne-headline>Наша команда</ne-headline>
      <h2 class="mt-5" data-aos="fade-down">5 лет</h2>
      <h4 class="team-subheader" data-aos="fade-down">Именно на протяжении этого времени команда нейтрона создаёт
        нестандартные решения,
        помогающие малому и среднему бизнесу</h4>
      <b-row>
        <b-col
          cols="12"
          data-aos="fade-right"
          md="6"
        >
          <span class="mb-1">Команда Нейтрона — настоящая семья единомышленников.</span><br>
          <span class="mb-1">Мы формировали команду на протяжении 5 лет, собирая специалистов не только на основании их профессиональных навыков, но и разделяющих наше мировоззрение.</span><br>
          <span>Мы по-настоящему гордимся нашей командой.</span>
        </b-col>

        <b-col
          class="team-numbers mt-3 mt-md-0 position-relative d-flex flex-wrap justify-content-center justify-content-md-start align-items-center"
          cols="12"
          data-aos="fade-left"
          md="6"
        >
          <div class="slide-control prev-slide">
            <div class="control__inner" @click="teamSlideIndex >= 1 && teamSlideIndex--">
              <span class="material-icons-round">
                chevron_left
              </span>
            </div>
          </div>
          <client-only>
            <carousel
              :mouse-drag="false"
              :navigate-to="teamSlideIndex"
              :pagination-enabled="false"
              :per-page="slidesPerPage"
              class="w-100"
            >
              <slide v-for="(worker, index) in workerTeam" :key="worker.title + worker.body">
                <div
                  class="d-flex justify-content-start"
                >
                  <div class="d-flex mx-auto justify-content-center flex-column">
                    <h3 class="text-center">{{ worker.title }}</h3>
                    <div class="text-center team-units-caption small m-0">{{ worker.body }}</div>
                  </div>
                  <img v-if="index !== workerTeam.length - 1" alt=""
                       class="arrow mx-auto" src="@/assets/images/cases/blueArrow.svg">
                </div>
              </slide>
              <slide>
                <div></div>
              </slide>
            </carousel>
          </client-only>
          <div class="slide-control next-slide">
            <div class="control__inner" @click="teamSlideIndex <= 1 && teamSlideIndex++">
              <span class="material-icons-round">
                chevron_right
              </span>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row class="d-flex align-items-center">
        <b-col data-aos="fade-up">
          <img alt="" class="diagram" src="@/assets/images/diagram.png">
        </b-col>
        <b-col
          cols="12"
          data-aos="fade-up"

          md="6"
        >
          <span class="mb-1">
            Несмотря на то, что каждый наш сотрудник - член семьи, как и в любой большой команде, в Нейтроне есть иерархия с подчинёнными и руководителями.
          </span><br>
          <span>
            В нашем распоряжении было достаточно много времени, поэтому иерархия выстроилась естественным образом,
            проходя все этапы эволюции - рядовые сотрудники обучались, набирались опыта и становились руководителями, понимая бизнес-процессы “изнутри”.
          </span>
          <ne-btn class="btn mt-5" @click="$bvModal.show('modal-contacts')">Начать сотрудничество</ne-btn>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "team",
  data() {
    return {
      workerTeam: [
        {
          title: '36',
          body: 'сотрудников'
        },
        {
          title: '5',
          body: 'команд'
        },
        {
          title: '14',
          body: 'разработчиков'
        },
        {
          title: '6',
          body: 'дизайнеров'
        },
        {
          title: '4',
          body: 'специалиста отдела продаж'
        },
        {
          title: '6',
          body: 'специалистов маркетингового отдела'
        },
        {
          title: '2',
          body: 'SEO-специалиста'
        },
        {
          title: '4',
          body: 'руководителя'
        }
      ],
      slidesPerPage: 1,
      teamSlideIndex: 0
    }
  },
  mounted() {
    const windowWidth = window.innerWidth
    if (windowWidth > 1200) {
      this.slidesPerPage = 4
    } else if (windowWidth > 998) {
      this.slidesPerPage = 2
    } else {
      this.slidesPerPage = 4
    }
  }
}
</script>

<style lang="scss" scoped>
.team {
  padding-bottom: 150px;

}

h2 {
  font-weight: 800;
  font-size: 96px;
  line-height: 130px;
  background: var(--blue-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.team-subheader {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 12px;
    font-size: 20px;
  }
}

h3 {
  display: flex;
  justify-content: center;
  align-items: center;


  font-weight: 800;
  font-size: 72px;
  line-height: 98px;

  background: var(--blue-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.diagram {
  width: 100%;
  border-radius: 25px;
}

.slide-control {
  position: absolute;
  display: flex;
  height: 100%;
  width: 10%;
  z-index: 1;

  .control__inner {
    margin: auto 0;
    cursor: pointer;
  }

  &.next-slide {
    margin-right: 10px;
    right: 0;
    .control__inner {
      z-index: 10;
      margin-right: 20px;
      margin-left: auto;
      color: var(--blue-accent);
    }
    background: linear-gradient(-90deg, rgb(248, 249, 250), rgba(248, 249, 250, 0));
  }

  &.prev-slide {
    margin-left: 10px;
    left: 0;
    .control__inner {
      z-index: 10;
      margin-left: 20px;
      margin-right: auto;
      color: var(--blue-accent);
    }
    background: linear-gradient(90deg, rgb(248, 249, 250), rgba(248, 249, 250, 0));
  }
}

p {
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 60px;
}

span {
  display: block;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  //margin-bottom: 60px;
}

.small {
  font-size: 20px;
  line-height: 27px;
}

.arrow {
  margin-left: 40px;
}

@media screen and (max-width: 998px) {
  h2 {
    font-weight: 700;
    font-size: 48px;
    line-height: 50px;
  }

  h3 {
    font-weight: 600;
    font-size: 36px;
    line-height: 30px;
  }

  p {
    font-size: 30px;
    line-height: 35px;
    margin-bottom: 30px;
  }

  span {
    font-size: 18px;
    //margin-bottom: 30px;
  }


  .small {
    font-size: 10px;
  }
  .team-units-caption {
    line-height: 1;
  }
  .arrow {
    width: 25px;
    margin: 0 15px;
  }

  .btn {
    width: 100%;
  }


}
</style>
