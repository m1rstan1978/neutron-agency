<template>
  <section class="services mb-5">
    <b-container class="">
      <ne-headline>Наши услуги</ne-headline>

      <b-row class="mt-3 mt-md-4 mt-lg-5">
        <b-col
          v-for="(card) in serviceCards"
          :key="card.header"
          class="mt-1 mb-3 service-card__wrapper"
          cols="12"
          lg="4"
          md="6"
        >
          <services-card :to="'/services/' + card.slug">
            <template #icon>{{ card.icon }}</template>
            <template #header>{{ card.name }}</template>
            <template #description>{{ card.description }}</template>
            <template #price>{{ card.price }}</template>
            <template #moreInfo>{{ card.moreInfo }}</template>
          </services-card>
        </b-col>
        <b-col
          class="mt-1 mb-3 service-card__wrapper"
          cols="12"
          lg="4"
          md="6"
        >
          <services-card variant="dark">
            <template #icon>apps</template>
            <template #header>Все наши услуги</template>
            <template #description>От маркетинга до запуска высоконагруженных проектов<br>Смотрите, что мы умеем ещё!
            </template>
            <template #moreInfo>Смотреть все услуги</template>
          </services-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import ServicesCard from "@/components/sections/components/ServicesCard";
import services from "assets/data/services.json";

export default {

  name: "Services",
  components: {ServicesCard},
  data() {
    return {
      services
    }
  },
  computed: {
    serviceCards() {
      return this.services.slice(0, 5)
    }
  }
}
</script>

<style lang="scss" scoped>
.service-card__wrapper {
  display: flex;
  flex: 0 1 auto;
  //position: absolute;
}
</style>
