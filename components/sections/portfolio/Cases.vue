<template>
  <section id="projects" class="cases">
    <b-container>
      <div class="topic-pills d-flex flex-wrap justify-content-center pb-4" data-aos="fade-down">
        <cat-pill
          :selected="selectedCategory.id === 0"
          class="mx-1 mb-1"
          @click="selectedCategory = {id: 0}"
        >
          Все кейсы
        </cat-pill>
        <cat-pill
          v-for="(cat, index) in cases_categories"
          :key="cat.id"
          :selected="selectedCategory.id === (index + 1)"
          class="mx-1 mb-1"
          @click="selectedCategory = cat"
        >
          {{ cat.name }}
        </cat-pill>
      </div>

    </b-container>
    <transition-group class="child-view projects-list row"
                      name="projects-list" tag="div" appear>
      <b-col v-for="(caseItem, index) in casesItems" :key="caseItem.id" class="project-card p-0" cols="12" lg="4"
             md="6">
        <ne-coupon
          :background="caseItem.background_image"
          :categories="caseItem.categories"
          :description="caseItem.description"
          :name="caseItem.name"
          :other_description="caseItem.other_description"
          :other_img="caseItem.other_img"
          :to="'portfolio/' + caseItem.slug"
        />
      </b-col>
    </transition-group>
  </section>
</template>

<script>
import CatPill from "@/components/sections/components/CatPill";
import cases_categories from "@/assets/data/cases_categories.json"
import cases from "@/assets/data/cases.json"

export default {
  name: "Cases",
  components: {CatPill},
  data() {
    return {
      cases_categories,
      cases,
      selectedCategory: {id: 0}
    }
  },
  computed: {
    casesItems() {
      if (this.selectedCategory.id === 0) return this.cases
      return cases.filter(c => c.categories.includes(this.selectedCategory.name))
    }
  }
}
</script>

<style scoped>
.cases {
  padding-top: 80px;
}
</style>
