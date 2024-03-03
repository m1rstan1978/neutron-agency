<template>
  <footer class="footer-end">
    <b-container>
      <NuxtLink class="pointer neutron-logo" tag="div" to="/">
        <img alt="Neutron logo" class="neutron-logo" src="@/assets/images/neutron_logo_white.svg"/>
      </NuxtLink>
      <b-row class="line" >
        <b-col class=".col-sm-6 col-md-4 col-xl-2">
          <div class="company">
            <div class="title">
              <ne-link :active="$route.path === '/about'" class="main-category other-item" to="/about" variant="dark">О
                компании
              </ne-link>
            </div>
            <div class="description">
              <ul>
                <li>
                  <ne-link :active="$route.path === ''" class="other-item" to="/about#team" variant="light">Структура
                    компании
                  </ne-link>
                </li>
                <li>
                  <ne-link :active="$route.path === ''" class="other-item" to="/about#mission" variant="light">Наша цель
                  </ne-link>
                </li>
              </ul>
            </div>
          </div>
        </b-col>

        <b-col class="col-6 col-sm-6 col-md-4 col-xl-2">
          <div class="company">
            <div class="title">
              <ne-link :active="$route.path === ''" class="main-category other-item" to="/services" variant="dark">
                Услуги
              </ne-link>
            </div>
            <div class="description">
              <ul>
                <li>
                  <ne-link :active="$route.path === ''" class="other-item" to="/services#services" variant="light">Список услуг
                  </ne-link>
                </li>
                <li>
                  <ne-link :active="$route.path === ''" class="other-item" to="/services#steps" variant="light">Этапы работы
                  </ne-link>
                </li>
              </ul>
            </div>
          </div>
        </b-col>

        <b-col class="col-6 col-sm-6 col-md-4 col-xl-2">
          <div class="company">
            <div class="title">
              <ne-link :active="$route.path === '/portfolio'" class="main-category other-item" to="/portfolio"
                       variant="dark">Портфолио
              </ne-link>
            </div>
            <div class="description">
              <ul>
                <li>
                  <ne-link :active="$route.path === ''" class="other-item" to="/portfolio" variant="light">Категории
                  </ne-link>
                </li>
                <li>
                  <ne-link :active="$route.path === ''" class="other-item" to="/portfolio#projects" variant="light">Наши
                    проекты
                  </ne-link>
                </li>
              </ul>
            </div>
          </div>
        </b-col>

        <b-col class="col-6 col-sm-6 col-md-4 col-xl-2">
          <div class="company">
            <div class="title">
              <ne-link :active="$route.path === '/contacts'" class="main-category other-item" to="/contacts"
                       variant="dark">Контакты
              </ne-link>
            </div>
            <div class="description">
              <ul>
                <li>
                  <ne-link :nuxt="false" class="other-item" href="tel: +7 708 501 0002">
                    +7 708 501 0002
                  </ne-link>
                </li>
                <li>
                  <div class="d-flex my-1 social-icons">
                    <a class="mx-1 social-icon" href="https://wa.me/77085010002"><img alt="" src="@/assets/images/icons/Group.svg"></a>
                    <a class="mx-1 social-icon" href="https://t.me/Neutronsystem"><img alt="" src="@/assets/images/icons/tg-white.svg"></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </b-col>

        <b-col class="col-6 col-sm-6 col-md-4 col-xl-3">
          <div class="company">
            <div class="title">
              <div class="main-category other-item">Наша рассылка</div>
            </div>
            <form action="" class="search" method="get">
              <input placeholder="Ваша почта" type="email" v-model="email"/>
            </form>
            <label class="check" >
              <input class="check-box" type="checkbox" v-model="check">
              <span class="check-style"></span>
              <h5 class="promotion">Подписаться на новости и акции</h5>
            </label>
            <button class="btn" :disabled="isDisable" :class="{noHover: assistant}">
              Подписаться
            </button>
          </div>
        </b-col>
      </b-row>
      <div class="THE_END">
        <p>© 2022 «Neutron». All Rights Reserved.</p>
      </div>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: "NeFooter",
  data () {
    return {
      email: "",
      check: false,
      assistant: true
    }
  },
  computed: {
    isDisable () {
      if (this.email.length === 0 && !this.check) {
        this.assistant = true
        return true
      }
      else if(this.email.length !== 0 && this.check == true){
        this.assistant = false
        return false
      }
      else{
        this.assistant = true
        return true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use "sass:math";

.footer-end {
  background: var(--dark-blue-accent);
  padding-top: 60px;
  color: white;
  //border-top: 1px solid rgba(255, 255, 255, .3);

  @media screen and (max-width: 998px) {
    padding-top: 50px;
  }

  .neutron-logo {
    max-width: 239px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .title {
    font-size: 24px;
    font-weight: 500;
    margin-top: 19px;
    margin-bottom: 28px;
  }

  a {
    text-decoration: none;
  }

  .other-item {
    display: inline-block;
  }

  .social-icon {
    opacity: .2;
    transition: all 0.3s ease;
  }

  .social-icon:hover {
    opacity: 1;
    transform: scale(1.07);
  }

  .search input {
    border: none;
    width: 100%;
    padding-bottom: 3px;
    border-bottom: 1px solid var(--text-color);
    color: var(--white);
    font-size: 18px;
    background: #151928;
  }

  input:focus, input:active {
    outline: none;
    border-bottom: 1px solid rgba(255, 255, 255, .5);
  }

  input::-ms-clear {
    display: none;
  }

  input::placeholder {
    color: rgba(255, 255, 255, .5);
  }

  input::placeholder:active {
    color: var(--white);
  }

  :focus::-webkit-input-placeholder {
    color: transparent
  }

  :focus::-moz-placeholder {
    color: transparent
  }

  :focus:-moz-placeholder {
    color: transparent
  }

  :focus:-ms-input-placeholder {
    color: transparent
  }

  input::-webkit-input-placeholder {
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  input::-moz-placeholder {
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  input:-moz-placeholder {
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  input:-ms-input-placeholder {
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  input:focus::-webkit-input-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  input:focus::-moz-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  input:focus:-moz-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  input:focus:-ms-input-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .btn {
    border: 1px solid rgba(255, 255, 255, .5);
    color: rgba(255, 255, 255, .5);
    border-radius: 25px;
    margin-top: 20px;
    transition: all 0.3s ease;
  }

  .btn:hover {
    border: 1px solid var(--white);
    color: var(--white);
  }

  .btn:active, .btn:focus {
    box-shadow: none;
  }

  li {
    padding-top: 8px;
  }

  .line {
    padding-bottom: 68px;
    border-bottom: 1px solid rgba(255, 255, 255, .5);
  }

  .THE_END {
    padding-top: 45px;
    padding-bottom: 45px;
  }

  .THE_END p {
    color: white;
    opacity: 0.5;
    font-size: 16px;
    transition: all 0.3s ease;
    margin: 0;
  }

  .check {
    margin-top: 17px;
    display: flex;
    align-items: center;
    margin-left: 22px;
  }

  .promotion {
    font-size: 14px;
    color: #8A8C93;
    margin: 0;
    cursor: pointer;
  }

  .check-box {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    padding-left: 22px;
  }

  .check-style {
    position: absolute;
    width: 16px;
    height: 16px;
    border: 1px solid #8A8C93;
    border-radius: 3px;
    margin-left: -22px;
    cursor: pointer;
  }

  .check-box:checked + .check-style::before {
    content: "";
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .check-box:checked + .check-style {
    border: 1px solid #fff;
  }

  .check-box:checked + .check-style + .promotion{
    color: #FFF;
  }

  .check-box:checked:disabled + .check-style::before {
    background-color: #8A8C93;
  }

  //.check-box:focus + .check-style {
  //  box-shadow: 0 0 0 2px #8A8C93;
  //}

  .noHover {
    pointer-events: none;
  }

  @media (max-width: 1900px) {
    .title {
      font-size: 20px;
    }
  }

  @media (max-width: 1200px) {
    .title {
      margin-bottom: 14px;
    }

    .description {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 991px) {
    .THE_END {
      padding-top: 40px;
      padding-bottom: 40px;
    }

    .line {
      padding-bottom: 34px;
    }
  }
}

@media screen and (max-width: 768px) {
  .title {
    .main-category {
      font-size: 18px !important;
    }

    margin-bottom: 4px !important;
  }

  .description {
    font-size: 14px;

    li {
      padding-top: 4px;
      padding-bottom: 0;
    }
  }

  .btn {
    font-size: 14px;
  }
}

</style>

<style lang="scss">
.other-item .neutron-link {
  color: white;
  opacity: 0.5;
  transition: opacity .3s ease;
}

.other-item:hover .neutron-link {
  opacity: 1;
}

.main-category {
  font-size: 24px;
}

.main-category .neutron-link {
  opacity: 1;
  font-size: 24px;
}

@media screen and (max-width: 768px) {
  .title {
    .main-category, .main-category .neutron-link {
      font-size: 18px !important;
    }

    margin-bottom: 4px !important;
  }
}
</style>
