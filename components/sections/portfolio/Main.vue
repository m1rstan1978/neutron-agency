<template>
  <main>
    <b-container>
      <breadcrumbs>
        <ne-link to="/services">Портфолио</ne-link>
      </breadcrumbs>

      <b-row>
        <b-col cols="12" lg="7" class="d-flex align-items-center text-center text-md-left">
          <div>
            <h2 class="headline my-auto" data-aos="fade-right">
              Наше портфолио -<br>
              <span class="background-text">наша гордость</span>
            </h2>
            <p class="portfolio-description" data-aos="fade-right">
              Создаём нестандартные решения  вместе с нашими клиентами на протыжении более 5 лет. Посмотрите, что мы успели сделать за это время!
            </p>
            <div data-aos="fade-right">
              <ne-btn class="mt-4" @click="$bvModal.show('modal-contacts')">
                Оставить заявку
              </ne-btn>
            </div>
          </div>
        </b-col>
        <b-col lg="5" class="d-none d-lg-block">
          <client-only>
            <three-js-component data-aos="fade-left" geometry="dodecahedron" class="dodecahedron"/>
          </client-only>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
import Breadcrumbs from "@/components/sections/components/Breadcrumbs";
import ThreeJsComponent from "@/components/sections/components/ThreeJsComponent";
export default {
  name: "Main",
  components: {ThreeJsComponent, Breadcrumbs}
}
</script>

<style scoped>
.dodecahedron {
  min-height: 500px;
}

.headline {
  font-size: 64px;
  line-height: 1.2;
  user-select: none;
  font-weight: 800;
}

.portfolio-description {
  font-size: 24px;
  margin-top: 24px;
}

@media screen and (max-width: 1200px) {
  .headline {
    font-size: 48px;
  }

  .portfolio-description {
    font-size: 20px;
    margin-top: 24px;
  }
}

@media screen and (max-width: 768px) {
  .headline {
    font-size: 32px;
  }
  .portfolio-description {
    font-size: 18px;
    margin-top: 24px;
  }
}
</style>
