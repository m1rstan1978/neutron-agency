<template>
  <b-container>
    <div class="our_works">
      <div class="our_works_title">
        <ne-headline variant="light">Наши работы</ne-headline>
      </div>
      <div class="cards-grid">
<!--        <a href="/portfolio/zeroshop" class="card_demo project1" data-aos="fade-up">
          <div class="content1">
            <div class="base">
              <h3 class="title_black">
                Zero
              </h3>
              <div class="description_black">
                Интернет-магазин и система управления компанией
                для одного из крупнейших брендов одежды Казахстана
              </div>
            </div>
            <div class="key">
              <button class="key_btn">Мобайл</button>
              <button class="key_btn">Разработка</button>
            </div>
          </div>
        </a>-->
        <a href="/portfolio/starBusiness" class="card_demo project2" data-aos="fade-right">
          <div class="content2">
            <div class="base">
              <h3 class="title_white">
                Star Business
              </h3>
              <p class="description_white">
                Мобильное приложение для бизнес-<br>
                клиентов банка ЦентрКредит
              </p>
            </div>
            <div class="key">
              <button class="key_btn">Мобайл</button>
              <button class="key_btn">Разработка</button>
            </div>
          </div>
        </a>
        <a href="/portfolio/elmarket" class="card_demo project3" data-aos="fade-left">
          <div class="content1">
            <div class="base">
              <h3 class="title_white">
                МебельИнвест
              </h3>
              <p class="description_white">
                Сайт-одностраничник для<br>
                мебельной компании
              </p>
            </div>
            <div class="key">
              <button class="key_btn">Веб</button>
              <button class="key_btn">Разработка</button>
            </div>
          </div>
        </a>

        <nuxt-link to="portfolio" class="card_demo project4" data-aos="fade-left">
          <div class="content1">
            <div class="base">
              <h3 class="title_white">
                Ещё 28 проектов Neutron
              </h3>
              <p class="description_white">
                Ознакомьтесь со всеми нашими<br>
                кейсами - уверены, Вы найдёте<br>
                что-то для себя!
              </p>
            </div>
            <div class="key_more">
              <a href="#" class="more">
                <p class="description_white">Смотреть все кейсы</p>
              </a>
              <a class="more test">
                <img src="@/assets/images/cases/Arrow.svg" alt="more">
              </a>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Cases"
}


</script>

<style scoped>

.cards-grid {
  margin-top: 60px;
  margin-bottom: 130px;
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 345px);
  grid-template-areas:
    /*"module1 module1"*/
    "module2 module3"
    "module2 module4";
}

.project1 {
  grid-area: module1;
  background: url("./assets/images/cases/zero.webp") 0 0/cover;
  background-position: 60%;
}
.project2 {
  grid-area: module2;
  background: url("./assets/images/cases/Star.webp") 0 0/cover no-repeat;
  background-position: 60%;
}
.project3 {
  grid-area: module3;
  background: url("./assets/images/cases/furniture.webp") 0 0/cover no-repeat;
  background-position: 30%;
}
.project4 {
  grid-area: module4;
  background: url("./assets/images/cases/project.webp") 0 0/cover no-repeat;
  background-position: 60%;
}

.card_demo {
  border-radius: 32px;
  filter: grayscale(100%);
  transition: all .25s ease!important;
}

.card_demo:hover {
  filter: grayscale(0%);
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.content1 {
  margin: 32px 40px 32px 40px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}

.content2 {
  margin: 32px 40px;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}

.title_black {
  font-size: 32px;
  font-weight: 600;
}

.title_white {
  color: var(--white);
  font-size: 32px;
  font-weight: 600;
}

.description_black {
  width: 600px;
}

.description_white {
  color: var(--white);
  margin: 0;
}

.key_btn {
  padding: 8px 24px;
  border-radius: 50px;
  background: rgba(250, 249, 249, 0.7);
  transition: all 0.2s ease;
  border: none;
}

.key_btn:hover {
  background: var(--white);
}

.key_btn + .key_btn{
  margin-left: 12px;
}

.key_more {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.more p {
  margin-right: 10px;
}

.more {
  text-decoration: none;
  transition: all 0.3s ease;
}

.more:last-child {
  margin-right: 40px;
}

.more:hover + .test {
  margin-right: 20px;
}

.test:hover {
  margin-right: 20px;
  cursor: pointer;
}
@media(max-width: 1200px) {
  .project1 {
    background-position: 20%;
  }
}

@media (max-width: 992px) {
  .cards-grid {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 345px);
    grid-template-areas:
    /*"module1"*/
    "module2"
    "module2"
    "module3"
    "module4";
  }

  .key_btn {
    font-size: 16px;
  }

  .project1 {
    background-position: 0;
  }
}

@media (max-width: 764px) {
  .cards-grid {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 260px);
    gap: 17px;
    margin-bottom: 65px;
  }

  .title_black {
    font-size: 24px;
  }

  .title_white {
    font-size: 24px;
  }

  .description_black {
    font-size: 16px;
    width: 300px;
  }

  .description_white {
    font-size: 16px;
  }
}

@media (max-width: 430px) {
  .cards-grid {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 180px);
    gap: 17px;
    margin-bottom: 65px;
  }

  .project1 {
    grid-area: module1;
    background-position: 0;
  }

  .card_demo {
    border-radius: 10px;
    filter: grayscale(0%);
  }

  .content1 {
    margin: 12px 0 12px 16px;
    height: 80%;
  }

  .content2 {
    margin: 12px 0 12px 16px;
    height: 90%;
  }

  .title_black {
    font-size: 20px;
    font-weight: 600;
  }

  .title_white {
    font-size: 20px;
  }

  .description_black {
    font-size: 14px;
    width: 200px;
  }

  .description_white {
    font-size: 14px;
  }

  .key_btn {
    display: none;
  }

}
</style>
