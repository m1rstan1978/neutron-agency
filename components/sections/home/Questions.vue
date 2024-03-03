<template>
  <section class="home-questions">
    <b-container>
      <ne-headline>Остались вопросы?</ne-headline>
      <b-row class="flex-column-reverse flex-lg-row mt-5">
        <b-col cols="12" lg="7" class="mt-4 mt-lg-0">
          <b-row>
            <b-col cols="12" lg="10">
              <div class="ne-card text-center" data-aos="fade-right">
                <ne-contacts/>
              </div>
              <div class="ne-card text-center mt-4 d-flex flex-column" data-aos="fade-right">
                <h4 class="call-header mb-3">Оставьте контакты!</h4>
                <ne-feedback-form
                  @submit="({name, phone, email}) => {$router.push('/client?name=' + name + '&phone=' + phone + '&email=' + email); $bvModal.hide('modal-contacts')}"
                  class="feedback mx-auto"
                />
              </div>
            </b-col>
            <b-col class="d-flex justify-content-center">
              <div class="bordered"></div>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" lg="5">
          <h4 class="mb-4">Возможно ответ уже есть!</h4>

          <ne-collapse v-for="(faq, index) in faqList" :divider="index !== faqList.length - 1" class="mt-2 mt-lg-3"
                       :key="index"
                       data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-offset="-200">
            <template #question>
              {{ faq.question }}
            </template>

            {{ faq.answer }}
          </ne-collapse>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import Contacts from "~/pages/contacts";

export default {
  name: "Questions",
  components: {Contacts},
  data() {
    return {
      faqList: [
        {
          question: "Сколько стоят ваши услуги?",
          answer: "Всё очень индивидульно, и каждый проект мы обсуждаем отдельно с заказчиком.    "
        },
        {
          question: "Какие сроки исполнения заказов?",
          answer: "Срок работы - это также индивидуальный показатель.\n" +
            "Однако, мы всегда стремимся выполнить проект как можно более оперативно, благодаря грамотному распределению и оптимизации задач."

        },
        {
          question: "Предоставляете ли вы обслуживание сайтов?",
          answer: "Мы предоставляем бесплатное обслуживание сайтов 1 месяц по большинству выполненных проектов.\n" +
            "На странице “Услуги” Вы можете посмотреть для каких типов сайтов доступно бесплатное обслуживание."
        },
        {
          question: "Какие гарантии вашей работы?",
          answer: "Крайне важно понимать, что созданный сайт или мобильное приложение - это, в первую очередь, маркетинговый инструмент. Мы гарантируем Вам полную функциональность и работоспособность тех продуктов, которые Вы заказали, т.к. мы рассчитываем на долгосрочное сотрудничество с нашими клиентами."
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.home-questions {
  padding-top: 50px;
  padding-bottom: 40px;

  h4 {
    font-weight: 600;
    font-size: 28px;

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }

    @media screen and (max-width: 1200px) {
      font-size: 24px;
    }
  }
}

.feedback {
  width: 80%;
}

.bordered {
  border-right: 1px dashed rgba(0, 0, 0, 0.2);
}
</style>
