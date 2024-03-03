<template>
  <section id="list" class="services-list position-relative">
    <b-container>
      <div class="box">
        <ne-headline>Наши услуги</ne-headline>

        <div class="mt-auto menuButton">
          <cat-pill
            :selected="selectedCategory === 'Все'"
            class="mx-1"
            @click="selectedCategory = 'Все'"
          >
            Все
          </cat-pill>

          <cat-pill
            v-for="cat in servicesCategories"
            :key="cat"
            :selected="selectedCategory === cat"
            class="mx-1"
            @click="selectedCategory = cat"
          >
            {{ cat }}
          </cat-pill>
        </div>
      </div>

      <div class="services">
        <transition-group appear class="assistant child-view projects-list row" name="projects-list" tag="div">
          <b-col
            v-for="(card, index) in servicesItems"
            :key="card.name + card.description"
            class="mt-1 mb-3 project-card service-card__wrapper"
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
        </transition-group>
      </div>
    </b-container>
  </section>
</template>

<script>
import CatPill from "@/components/sections/components/CatPill";
import services from "@/assets/data/services.json";
import ServicesCard from "@/components/sections/components/ServicesCard";

export default {
  name: "ServicesList",
  components: {ServicesCard, CatPill},
  data() {
    return {
      services,
      selectedCategory: "Все"
    }
  },
  computed: {
    servicesCategories() {
      const cats = new Set()

      this.services.forEach(s => {
        cats.add(s.category)
      })

      return Array.from(cats)
    },
    servicesItems() {
      if (this.selectedCategory === "Все") return this.services
      return this.services.filter(s => s.category === this.selectedCategory)
    }
  }
}
</script>

<style scoped>
.services-list {
  padding-top: 100px;
}

.box {
  display: flex;
  justify-content: space-between;
}

.menuButton {
  display: flex;
  justify-content: flex-end;
}

.assistant {
  margin-top: 80px;
}

@media (max-width: 991px) {
  .box {
    display: inline-block;
  }

  .menuButton {
    padding-top: 40px;
  }

  .assistant {
    margin-top: 50px;
  }
}

@media (max-width: 479px) {
  .menuButton {
    justify-content: center;
    flex-wrap: wrap;
  }

  .menuButton {
    padding-top: 20px;
  }

  .cat-pill {
    margin-top: 10px;
  }

  .assistant {
    margin-top: 30px;
  }
}
</style>
