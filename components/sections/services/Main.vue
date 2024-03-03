<template>
  <main>
    <b-container>
      <breadcrumbs>
        <ne-link to="/services">Услуги</ne-link>
      </breadcrumbs>

      <b-row>
        <b-col class="d-flex align-items-center text-center text-md-left" cols="12" lg="7">
          <div>
            <h2 class="headline my-auto" data-aos="fade-right">
              Весь <span class="background-text">спектр услуг</span>, которые мы можем предоставить для Вас
            </h2>
            <div data-aos="fade-right">
              <ne-btn class="mt-4" @click="$bvModal.show('modal-contacts')">
                Оставить заявку
              </ne-btn>
            </div>
          </div>
        </b-col>
        <b-col class="d-none d-lg-block" lg="5">
          <client-only>
            <three-js-component class="cubes" data-aos="fade-left" geometry="cubes"/>
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

<style scoped>
.cubes {
  min-height: 500px;
}

.headline {
  font-size: 64px;
  line-height: 1.2;
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
</style>
