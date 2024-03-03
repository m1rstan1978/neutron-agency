<template>
  <section class="why-we">
    <b-container>
      <ne-headline variant="dark" class="mb-4">
        Почему Neutron?
      </ne-headline>

      <b-row class="mt-5 order-cards">
        <b-col cols="12" md="6" lg="4" class="mt-3 mb-3 mb-md-5 bordered"
               v-for="(card, i) in whyWeCards" :key="card.number">
          <order-card data-aos="flip-up">
            <template #number>{{ card.number }}</template>
            <template #header>{{ card.header }}</template>
            <template #description>{{ card.description }}</template>
          </order-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import NumberCard from "~/components/sections/components/OrderCard";
import OrderCard from "~/components/sections/components/OrderCard";

export default {
  name: "WhyWe",
  components: {OrderCard, NumberCard},
  data() {
    return {
      whyWeCards: [
        {
          number: "01",
          header: "Безупречное качество",
          description: "Мы уверены в своей работе и готовы поручиться за нее"
        },
        {
          number: "02",
          header: "Быстро даем результат",
          description: "Оптимизируем нашу работу и внедряем современные технологии"
        },
        {
          number: "03",
          header: "Современные методы",
          description: "Мы в курсе актуальных трендов и используем их в своей работе"
        },
        {
          number: "04",
          header: "Мы меняемся",
          description: "Постоянно обучаемся новому, ведь нет предела совершенству"
        },
        {
          number: "05",
          header: "Остаемся на связи",
          description: "Готовы поддерживать контакт с Вами в любое время"
        },
        {
          number: "06",
          header: "Мы надежны",
          description: "Всегда соблюдаем сроки и четко выполняем ТЗ"
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.why-we {
  background: var(--dark-blue-accent);
  padding-top: 100px;
  padding-bottom: 100px;
  color: white;

  @media screen and (max-width: 998px) {
    padding-top: 35px;
    padding-bottom: 55px;
  }
}

@media screen and (min-width: 998px) {
  .bordered:nth-child(1), .bordered:nth-child(2), .bordered:nth-child(4), .bordered:nth-child(5) {
    border-right: 3px dashed rgba(255, 255, 255, .3);
  }
}

@media screen and (min-width: 768px) {
  .bordered:nth-child(1), .bordered:nth-child(3), .bordered:nth-child(5) {
    border-right: 3px dashed rgba(255, 255, 255, .3);
  }
}
</style>
