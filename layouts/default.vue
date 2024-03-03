<template>
  <div>
    <b-modal
      hide-footer
      id="modal-contacts"
      hide-header
      size="lg"
      centered
      content-class="ne-modal"
      modal-class="ne-modal__wrapper"
    >
      <div class="close-btn d-flex" @click="$bvModal.hide('modal-contacts')">
        <i class="material-icons-round m-auto">close</i>
      </div>

      <ne-headline class="mb-5">Давайте знакомиться!</ne-headline>
      <b-row>
        <b-col offset-md="1" offset-lg="2" cols="12" md="10" lg="8">
          <h4 class="leave-contacts text-center mb-4 font-weight-bold">
            Оставьте контакты!
          </h4>
          <ne-feedback-form
            @submit="
              ({ name, phone, email }) => {
                $router.push(
                  '/client?name=' + name + '&phone=' + phone + '&email=' + email
                );
                $bvModal.hide('modal-contacts');
              }
            "
          />
        </b-col>
      </b-row>
    </b-modal>

    <b-modal
      hide-footer
      id="modal-privers"
      hide-header
      size="xl"
      centered
      content-class="ne-modal"
      modal-class="ne-modal__wrapper"
    >
      <div class="close" @click="$bvModal.hide('modal-privers')">
        <i class="material-icons-round m-auto">close</i>
      </div>
      <div>
        <h5>
          Согласие на обработку персональных данных клиентов-физических лиц
        </h5>
        <hr />
        <p>
          1.Данное Соглашение даётся на обработку персональных данных, как без
          использования средств автоматизации, так и с их использованием.
        </p>
        <p>
          2.Согласие даётся на обработку следующих моих персональных данных:
          Персональные данные, не являющиеся специальными или биометрическими:
          номера контактных телефонов; адреса электронной почты; место работы и
          занимаемая должность; пользовательские данные (сведения о
          местоположении; тип и версия ОС; тип и версия Браузера; тип устройства
          и разрешение его экрана; источник откуда пришёл на сайт пользователь;
          с какого сайта или по какой рекламе; язык ОС и Браузера; какие
          страницы открывает и на какие кнопки нажимает пользователь; ip-адрес.)
        </p>
        <p>3.Персональные данные являются общедоступными.</p>
        <p>
          4.Цель обработки персональных данных: обработка входящих запросов
          физических лиц с целью оказания консультирования; аналитики действий
          физического лица на веб-сайте и функционирования веб-сайта; проведение
          рекламных и новостных рассылок;
        </p>
        <p>
          5.Основанием для обработки персональных данных является: ст. 24
          Конституции Российской Федерации; ст. 6 Федерального закона №152-ФЗ "О
          персональных данных"; настоящее согласие на обработку персональных
          данных.
        </p>
        <p>
          6.В ходе обработки с персональными данными будут совершены следующие
          действия: сбор; запись; систематизация; накопление; хранение;
          уточнение (обновление, изменение); извлечение; использование; передача
          (распространение, предоставление, доступ); блокирование; удаление;
          уничтожение.
        </p>
        <p>
          7.Персональные данные обрабатываются до отписки физического лица от
          рекламных и новостных рассылок. Также обработка персональных данных
          может быть прекращена по запросу субъекта персональных данных.
          Хранение персональных данных, зафиксированных на бумажных носителях
          осуществляется согласно Федеральному закону №125-ФЗ "Об архивном деле
          в Российской Федерации" и иным нормативно правовым актам в области
          архивного дела и архивного хранения.
        </p>
        <p>
          8.Согласие может быть отозвано субъектом персональных данных или его
          представителем путём направления письменного заявления администрации
          сайта или его представителю по адресу электронной почты
          info@neutron-agency.com.
        </p>
        <p>
          9.В случае отзыва субъектом персональных данных или его представителем
          согласия на обработку персональных данных администрации сайта вправе
          продолжить обработку персональных данных без согласия субъекта
          персональных данных при наличии оснований, указанных в пунктах 2-11
          части 1 статьи 6, части 2 статьи 10 и части 2 статьи 11 Федерального
          закона №152-ФЗ "О персональных данных" от 27.07.2006 г.
        </p>
        <p>
          10.Настоящее согласие действует всё время до момента прекращения
          обработки персональных данных, указанных в п. 7 и п. 8 данного
          Согласия.
        </p>
      </div>
    </b-modal>

    <ne-header />

    <div class="content-view">
      <Nuxt />
    </div>

    <ne-footer />
  </div>
</template>

<script>
export default {
  name: "default",
  data() {
    return {
      showLoader: false,
    };
  },
  mounted() {},
};
</script>

<!-- <style scoped lang="scss">
@import "/assets/style/text";

.close {
  cursor: pointer;
}
.page-loader {
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--background-color);

  span {
    color: var(--blue-accent);
    position: relative;
    top: 50%;
    left: calc(50% - 20px);
    animation-duration: 1s;
  }
}

.leave-contacts {
  font-size: 28px;
}

.close-btn {
  width: 42px;
  height: 42px;
  position: absolute;
  background: white;
  right: -60px;
  top: -30px;
  opacity: .5;
  border-radius: 100px;
  transition: opacity .1s ease-in-out;
  cursor: pointer;

  @media screen and(max-width: 768px) {
    right: 10px;
    top: 10px;
  }

  i {
    font-size: 28px;
  }

  &:hover {
    opacity: 1;
  }
}
</style>

<style lang="scss">
.ne-modal {
  border-radius: 25px;

  .modal-body {
    padding: 60px;
    position: relative;

    @media screen and (max-width: 768px) {
      padding: 32px;
    }
  }
}
</style> -->
