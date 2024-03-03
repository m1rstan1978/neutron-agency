<template>
  <section class="blue_star">
    <b-container>
      <div class="our_works_title">
        <ne-headline variant="dark">Вот, что мы умеем</ne-headline>
      </div>
    </b-container>
    <div class="block-cases">
      <b-row>
        <b-col v-for="(caseItem, index) in caseItems" :key="index" class="p-0" cols="12" lg="4" md="6" data-aos="fade-up" v-if="caseItem.id">
          <ne-coupon
            :background="caseItem.background_image"
            :categories="caseItem.categories"
            :description="caseItem.description"
            :name="caseItem.name"
            :to="'/portfolio/' + caseItem.slug"
            :other_description="caseItem.other_description"
            :other_img="caseItem.other_img"
          />
        </b-col>
        <b-col class="p-0" cols="12" lg="4" md="6" data-aos="fade-up">
          <ne-coupon
            background="/assets/images/coupon/project.webp"
            description="Ознакомьтесь со всеми нашими кейсами - уверены,Вы найдёте что-то для себя!"
            name="Ещё 28 проектов Neutron"
            to="/portfolio"
            other_description="Смотреть все кейсы"
            other_img="/assets/images/coupon/Arrow.svg"
          />
        </b-col>
      </b-row>
    </div>
  </section>
</template>
<script>
import cases from "@/assets/data/cases.json";
export default {
  name: "Partition",
  data() {
    return {
      cases,
    }
  },
  computed: {
    caseItems() {
      return this.cases.slice(0, 5)
    }
  }
}

</script>

<style scoped>
.blue_star {
  background: var(--dark-blue-accent);
}

.our_works_title {
  padding: 60px 0 80px 0;
}

@media screen and (max-width: 768px) {
  .our_works_title {
    padding: 40px 0 40px 0;
  }
}

</style>
