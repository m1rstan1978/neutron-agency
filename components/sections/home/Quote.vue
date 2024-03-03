<template>
  <section>
    <div class="quote-section">
      <b-container>
        <div class="quote" data-aos="fade-down">
          <b-row>
            <b-col class="text-center" cols="12" lg="3">
              <div class="d-flex persons justify-content-center">
                <div class="person mx-2 text-center">
                  <img alt="" src="@/assets/images/ilya_avatar.png">
                  <div class="name">Илья Сушин</div>
                </div>
                <div class="person mx-2 text-center">
                  <img alt="" src="@/assets/images/daniil_avatar.png">
                  <div class="name">Даниил Огай</div>
                </div>
              </div>
              <span class="founders">Основатели Neutron</span>
            </b-col>
            <b-col class="d-flex align-items-center" cols="12" lg="9">
            <span class="mt-2 mt-md-0 quote-text">
              В нашей работе мы преследуем всего две цели. Первая из них - помочь бизнесу, поэтому мы используем проверенные временем технологии и методики. Вторая - стать лучшей командой, с которой Вы когда-либо работали
            </span>
            </b-col>
          </b-row>
        </div>

        <div class="text-center mt-4 mt-md-5">
          <ne-btn variant="light" @click="$bvModal.show('modal-contacts')">Хочу сотрудничать с вами!</ne-btn>
        </div>
      </b-container>
    </div>
    <img class="wave w-100" src="@/assets/images/wave-quote.svg"/>
  </section>
</template>

<script>
export default {
  name: "Quote"
}
</script>

<style lang="scss" scoped>
.quote-section {
  background: var(--dark-blue-accent);
  color: white;
  padding-bottom: 30px;
}

.quote {
  background: #0E111D;
  border: 1px solid #30375E;
  border-radius: 25px;
  padding: 50px 32px;
  font-size: 26px;

  @media screen and (max-width: 992px) {
    font-size: 20px;
    text-align: center;
  }
}

.wave {
  margin-top: -10px;
}

.persons {
  .person {
    .name {
      margin-top: 20px;
      font-size: 20px;
    }
  }
}

@media screen and (max-width: 1200px) {
  .person {
    img {
      width: 80px;
    }
  }
}

@media screen and (max-width: 768px) {
  .quote-text {
    font-size: 16px;
  }
}

.founders {
  font-size: 16px;
  opacity: .6;
}
</style>
