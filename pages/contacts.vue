<template>
  <div>
    <b-container>
      <breadcrumbs>
        <ne-link to="/contacts">Контакты</ne-link>
      </breadcrumbs>
      <div class="contacts_header">
        Будем рады ответить<br>
        на любые Ваши вопросы!
      </div>
      <div class="cards-grid">
        <div class="card_demo project1" data-aos="fade-up">
          <div class="ne-card text-center" data-aos="fade-right">
            <ne-contacts/>
          </div>
        </div>
        <div class="card_demo project2" data-aos="fade-up">
          <div class="ne-card text-center mt-4 d-flex flex-column" data-aos="fade-right">
            <h4 class="call-header mb-3">Оставьте контакты!</h4>
            <ne-feedback-form
              class="feedback mx-auto"
              @submit="({name, phone, email}) => {$router.push('/client?name=' + name + '&phone=' + phone + '&email=' + email); $bvModal.hide('modal-contacts')}"
            />
          </div>
        </div>
        <div class="card_demo project3" data-aos="fade-up">
          <div class="content">
            <div class="title text-center">
              <h5>Приходите в гости!</h5>
              <div class="invitation d-flex justify-content-center align-items-center">
                <i class="material-icons-round my-auto gradient-text">location_on</i>
                <p>Алматы, площадь Республики, 13
                </p>
              </div>
            </div>
            <div class="map">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Af9e1e07b8f3b73e1f653adfb6b85a7fe9947770ffeaa2f72468b76b7c908affd&amp;source=constructor"
                frameborder="0"
                height="100%"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/sections/components/Breadcrumbs";

export default {
  name: "contacts",
  components: {Breadcrumbs},
  head() {
    return {
      title: "Контакты | Neutron Agency"
    }
  },
}


</script>

<style scoped>
.contacts_header {
  font-size: 48px;
  font-weight: 800;
  text-align: center;
  line-height: 70px;
}

.cards-grid {
  margin-top: 75px;
  margin-bottom: 114px;
  display: grid;
  grid-column-gap: 85px;
  grid-row-gap: 22px;
  grid-template-columns: repeat(2, minmax(400px, 720px));
  grid-template-rows: 367px 420px;
  grid-template-areas:
    "module1 module3"
    "module2 module3";
}

.project1 {
  grid-area: module1;
}

.project2 {
  grid-area: module2;
}

.project3 {
  grid-area: module3;
}

h5 {
  font-size: 28px;
  font-weight: 800;
}

.invitation {
  margin: 20px 0 28px 0;

}

.invitation i {
  font-size: 32px;
}

.invitation p {
  font-size: 24px;
  margin: 0 0 0 10px;
}

.map iframe {
  overflow: hidden;
  border-radius: 26px;
  height: 725px;
}
.map {
  border-radius: 26px;
  height: 100%;
}

@media (max-width: 996px) {
  .cards-grid {
    grid-template-columns: repeat(1, minmax(200px, 720px));
    grid-template-rows: 380px 380px 520px;
    grid-template-areas:
    "module1"
    "module2"
    "module3";
  }

  .contacts_header {
    font-size: 36px;
    line-height: 50px;
  }

  .map {
    overflow: hidden;
    height: 400px;
  }

  .project3 {
    padding-top: 70px;
  }

  .invitation {
    margin: 20px 0 8px 0;
  }
}

@media (max-width: 768px) {
  .cards-grid {
    margin-top: 35px;
    margin-bottom: 55px;
    grid-template-rows: 270px 400px 560px;
  }
}

@media (max-width: 576px) {
  .invitation p {
    font-size: 16px;
  }

  .invitation img {
    width: 18px;
    height: 25px;
  }

  .contacts_header {
    font-size: 28px;
    line-height: 40px;
  }

  h5 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 0;
  }

  .invitation {
    margin-top: 10px;
  }
}

@media (max-width: 427px) {
  .cards-grid {
    margin-top: 35px;
    margin-bottom: 55px;
    grid-template-rows: 270px 400px 580px;
  }

  .project3 {
    padding-top: 110px;
  }
}

</style>


