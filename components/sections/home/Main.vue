<template>
  <main class="main-section position-relative">
    <div class="background">
      <client-only>
        <vue-particles
          color="#7092E0"
          :particleOpacity="0.5"
          linesColor="#7092E0"
          :particlesNumber="100"
          shapeType="circle"
          :particleSize="3"
          :linesWidth="1.5"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="100"
          :moveSpeed="2.5"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
          class="particles-background"
        ></vue-particles>
      </client-only>
      <div class="gradient-transition">
      </div>
    </div>

    <div class="position-absolute main-content text-center">
      <b-container>
        <client-only>
          <vue-typed-js :backSpeed="50"
                        :typeSpeed="30"
                        :backDelay="2000"
                        data-aos="fade-down"
                        :strings="typedStrings"
                        shuffle
                        loop
                        content-type="html"
                        :cursorChar="'|'"
          >
            <h2 class="headline text-center w-100">
              Работающие решения<br>
              <span class="background-text typing"></span>
            </h2>
          </vue-typed-js>
        </client-only>

        <client-only>
          <ne-btn data-aos="fade-down" data-aos-delay="200" data-aos-anchor-placement="top-bottom" class="cta-btn" @click="$bvModal.show('modal-contacts')">
            Оставить заявку
          </ne-btn>

          <div class="mt-4 scroll-down" data-aos="fade-down">
            <i class="material-icons-round">expand_more</i>
          </div>
        </client-only>
      </b-container>
    </div>
  </main>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      typedStrings: [
        'для владельцев малого<br>и среднего бизнеса',
        'для извлечения<br>максимальной прибыли',
        'для проблем<br>любой сложности',
        'для поиска новых<br>возможностей',
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.main-section {
  min-height: 100vh;
  z-index: 1;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
  width: 100%;
  height: 100%;
}

.particles-background {
  position: absolute;
  top: 0;
  z-index: -10;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content {
  width: 100%;
  top: 190px;
  text-align: center;

  @media screen and (max-width: 768px) {
    top: 120px;
  }

  h2 {
    height: 280px;
  }

  .cta-btn {
    margin-top: 160px;
    font-weight: 600;
  }

  @media screen and (max-width: 768px) {
    .cta-btn {
      margin-top: 60px;
    }
  }
}

.headline {
  font-size: 64px;
  line-height: 1.45;
  user-select: none;
  font-weight: 800;
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

.gradient-transition {
  height: 100px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: linear-gradient(0deg, #F8F9FA 0%, rgba(248, 249, 250, 0) 100%);
}
</style>

<style lang="scss">
.particles-background {
  canvas {
    z-index: -10;
  }
}

.typed-cursor {
  font-weight: 500 !important;
}

@keyframes move-up-down {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(15px);
  }
}

.scroll-down {
  color: var(--blue-accent);
  animation: move-up-down 5s ease infinite;
  i {
    font-size: 56px;
  }
}
</style>
