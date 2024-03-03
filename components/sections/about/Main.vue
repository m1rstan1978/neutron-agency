<template>
  <main class="about-main">
    <b-container>
      <breadcrumbs>
        <ne-link to="/about">О нас</ne-link>
      </breadcrumbs>
      <b-row>
        <b-col cols="12" lg="7">
          <h2 class="headline" data-aos="fade-right">
            Neutron&nbsp;-&nbsp;<span class="background-text">не&nbsp;просто</span> «очередная компания, которая сделает Вам сайт»
          </h2>

          <b-row class="mt-4">
            <b-col cols="12" xl="10" >
              <p class="description" data-aos="fade-right" data-aos-delay="100">
                Мы — диджитал агенство, созданное не только техническими специалистами, но и опытными предпринимателями,
                поэтому мы <span class="bold">понимаем бизнес и его потребности</span>. Реализуем <span class="bold">полный цикл</span> разработки и внедрения IT-продуктов —  от сайтов до банковских приложений
              </p>
              <p class="description" data-aos="fade-right" data-aos-delay="200">
                В основе нашего подхода — глубокий анализ и
                видение перспектив развития бизнеса, предпринимательский опыт и желание создавать продукты, которые принесут пользу и позитивные изменения людям
              </p>
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="5" class="d-none d-lg-block">
          <client-only>
            <three-js-component data-aos="fade-left" class="hexagon" geometry="hexagon"/>
          </client-only>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
import ThreeJsComponent from "@/components/sections/components/ThreeJsComponent";
import Breadcrumbs from "@/components/sections/components/Breadcrumbs";
export default {
  name: "Main",
  components: {Breadcrumbs, ThreeJsComponent}
}
</script>

<style lang="scss" scoped>
.about-main {
  padding-bottom: 100px;
}

.hexagon {
  min-height: 500px;
}

.headline {
  font-size: 64px;
  line-height: 1.1;
  user-select: none;
  font-weight: 800;
}

.description {
  font-size: 24px;
}

.bold {
  font-weight: 600;
}

@media screen and (max-width: 1200px) {
  .headline {
    font-size: 48px;
  }

  .description {
    font-size: 20px;
  }
}

@media screen and (max-width: 768px) {
  .headline {
    font-size: 32px;
  }

  .description {
    font-size: 18px;
  }
}
</style>
