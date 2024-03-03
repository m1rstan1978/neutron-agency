<template>
  <header :class="headerClass">
    <b-container fluid class="d-flex px-3 px-lg-5 justify-content-between">
      <div class="d-flex">
        <NuxtLink to="/" tag="div" class="pointer">
          <img src="@/assets/images/neutron_logo.svg" class="neutron-logo" alt="Neutron logo"/>
        </NuxtLink>
        <div class="d-none d-md-flex d-lg-none d-xl-flex align-items-center ml-5 phone">
          <ne-link :nuxt="false" href="tel: +7 708 501 0002">
            <mark>+</mark>
            7 708 501 0002
          </ne-link>
        </div>
      </div>

      <div class="menu d-flex">
        <div class="menu-items d-none d-lg-flex align-items-center justify-content-end"
             :class="isOverlayOpen ? 'opened' : ''">
          <ne-link class="menu-item" :active="$route.path.split('#')[0] === '/'" to="/">Главная</ne-link>
          <ne-link class="menu-item" :active="$route.path.split('#')[0] === '/about'" to="/about">О нас</ne-link>
          <ne-link class="menu-item" :active="$route.path.split('#')[0] === '/services'" to="/services">Услуги</ne-link>
          <ne-link class="menu-item" :active="$route.path.split('#')[0] === '/portfolio'" to="/portfolio">Портфолио</ne-link>
          <ne-link class="menu-item" :active="$route.path.split('#')[0] === '/contacts'" to="/contacts">Контакты</ne-link>
        </div>

        <div class="menu-toggle d-flex align-items-center ml-3">
          <button class="d-flex p-2 align-items-center" @click="onMenuOverlayToggle">
          <span class="lines d-flex flex-column" :class="isOverlayOpen ? 'opened' : ''">
            <span class="menu-toggle-line line-1"></span>
            <span class="menu-toggle-line line-2"></span>
            <span class="menu-toggle-line line-3"></span>
          </span>
          </button>
        </div>
      </div>
    </b-container>

    <div class="subheader" :class="pageScrolled && !isOverlayOpen ? 'show' : ''" v-if="subHeaderNav">
      <div class="container mr-3 mr-md-auto">
        <div class="d-flex justify-content-start justify-content-md-center">
          <div v-for="nav in subHeaderNav" class="mx-2 sub-navigation-link" @click="onScrollToNav(nav.blockId)">{{nav.name}}</div>
        </div>
      </div>
    </div>

    <transition name="slide-down">
      <div class="menu-overlay" v-if="isOverlayOpen">
        <b-container class="pt-5">
          <b-row>
            <b-col cols="12" lg="5">
              <template v-for="(link, i) in overlayMenuLinks">
                <ne-menu-link :to="link.to"
                              data-aos="zoom-in-right"
                              :data-aos-duration="(i + 1) * 150 + 800 + ''"
                              :show-chapters="openedChapters === i"
                              @open-chapters="onOpenChapters(i)"
                              :chapters="link.chapters">
                  {{ link.name }}
                </ne-menu-link>
                <b-col cols="4" v-if="link.chapters.length && openedChapters === i"
                       :class="('chapters-' + i + ' ') + (openedChapters === i ? 'show' : '')"
                       class="chapters__wrapper position-absolute d-none d-lg-block">
                  <div class="position-absolute animated">
                    <ne-link v-for="(chapter, index) in link.chapters" class="chapter pointer" :to="chapter.to" :key="index">
                      {{ chapter.name }}
                    </ne-link>
                  </div>
                </b-col>
              </template>
            </b-col>
            <b-col cols="12" lg="2"></b-col>
            <b-col cols="12" lg="5">
              <ne-contacts class="ne-card text-center mt-4 mt-lg-0" data-aos="zoom-in" data-aos-duration="800"/>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: "NeHeader",
  data() {
    return {
      pageScrolled: false,
      isOverlayOpen: false,
      openedChapters: null,
      overlayMenuLinks: [
        {
          to: "/about", name: "О компании", chapters: [
            {to: "/about#team", name: "Наша команда"},
            {to: "/about#mission", name: "Наша миссия"},
            {to: "/about#numbers", name: "Нейтрон в цифрах"},
            {to: "/about#goal", name: "Наша цель"},
            {to: "/about#works", name: "Наши работы"}
          ]
        },
        {
          to: "/services", name: "Услуги", chapters: [
            {to: "/services#list", name: "Список услуг"},
            {to: "/services#steps", name: "Этапы работы"},
            {to: "/services#works", name: "Наши работы"},
            {to: "/services#why", name: "Почему мы?"},
          ]
        },
        {to: "/portfolio", name: "Кейсы", chapters: []},
        {to: "/client", name: "Стать клиентом", chapters: []},
        {to: "/contacts", name: "Контакты", chapters: []},
      ]
    }
  },
  watch: {
    $route() {
      this.isOverlayOpen = false
      document.documentElement.style.overflow = "auto"
    },
  },
  computed: {
    headerClass() {
      let className = ""

      if (this.pageScrolled) {
        className += "scrolled "
      }

      if (this.isOverlayOpen) {
        className += "overlay "
      }

      return className
    },
    subHeaderNav() {
      switch (this.$route.path) {
        case "/": return [
          {blockId: "cases", name: "Кейсы"},
          {blockId: "services", name: "Услуги"},
          {blockId: "about", name: "О нас"},
          {blockId: "whywe", name: "Почему мы?"},
          {blockId: "feedback", name: "Контакты"},
        ]
        case "/about": return [
          {blockId: "team", name: "Команда"},
          {blockId: "mission", name: "Миссия"},
          {blockId: "goal", name: "Цель"},
          {blockId: "partition", name: "Что мы умеем?"},
        ]
        case "/services": return [
          {blockId: "services", name: "Наши услуги"},
          {blockId: "steps", name: "Этапы работы"},
          {blockId: "cases", name: "Наши работы"},
          {blockId: "whywe", name: "Почему мы?"},
        ]
        default: return false
      }
    }
  },
  mounted() {
    this.pageScrolled = window.pageYOffset > 10;

    window.addEventListener('scroll', () => {
      this.pageScrolled = window.pageYOffset > 10;
    })
  },
  methods: {
    onMenuOverlayToggle() {
      this.isOverlayOpen = !this.isOverlayOpen

      if (this.isOverlayOpen) {
        document.documentElement.style.overflow = "hidden"
      } else {
        document.documentElement.style.overflow = "auto"
        this.openedChapters = null
      }
    },
    onOpenChapters(index) {
      this.openedChapters = index
    },
    onScrollToNav(blockId) {
      document.getElementById(blockId)?.scrollIntoView({block: "nearest", behavior: "smooth"})
    }
  }
}
</script>

<style scoped lang="scss">
header {
  position: fixed;
  background: rgba(255, 255, 255, .08);
  //backdrop-filter: blur(3.5px);
  z-index: 10;
  width: 100%;
  transition: all .3s ease-in-out;
  padding: 20px 0;
}

header.scrolled {
  background: var(--background-color);
  //backdrop-filter: none;
  padding: 8px 0;
}

header.overlay {
  background: var(--background-color);
  backdrop-filter: none;
  padding: 20px 0;
}

.subheader {
  height: 0;
  overflow-y: hidden;
  overflow-x: auto;
  transition: all .3s ease;

  &::-webkit-scrollbar {
    display: none;
  }
}

.sub-navigation-link {
  cursor: pointer;
  transition: all .3s ease;
  white-space: nowrap;

  &:hover {
    opacity: .5;
  }
}

.subheader.show {
  height: 40px;
  padding-top: 12px;
  padding-bottom: 8px;
}

.neutron-logo {
  max-width: 230px;
}

.phone {
  font-size: 24px;
  font-weight: 600;
}

.menu-items {
  @media screen and (min-width: 1200px) {
    width: 665px;
    overflow: hidden;
  }
  transition: all .3s ease;
  overflow: hidden;


  .menu-item {
    margin-right: 36px;
    white-space: nowrap;
    font-size: 24px;
    font-weight: 600;
  }
}

.menu-items.opened {
  width: 0;
}

.menu-toggle {
  button {
    background: var(--blue-gradient);
    aspect-ratio: 1;
    border: none;
    outline: none;
    color: white;
    border-radius: 100px;
    transition: all .3s ease;

    .lines:not(.opened) {
      &:hover {
        .line-2 {
          transform: translateX(5px);
        }
      }
    }

    &:hover {
      box-shadow: 0 0 10px #7092E0;
    }

    .lines.opened {
      .line-2 {
        height: 0 !important;
        width: 0 !important;
        transform: translateX(0);
      }

      .line-1 {
        transform: translateY(8px) translateX(0px) rotate(45deg);
      }

      .line-3 {
        transform: translateY(-9px) translateX(0px) rotate(-45deg);
      }
    }
  }

  .menu-toggle-line {
    width: 30px;
    height: 4px;
    border-radius: 100px;
    background: white;
    margin-bottom: 3px;
    margin-top: 3px;
    transition: all .3s ease;
  }
}

@media screen and (max-width: 768px) {
  .neutron-logo {
    max-width: 120px;
  }

  .menu-toggle-line {
    width: 20px !important;
    height: 3px !important;
    margin-bottom: 2px !important;
    margin-top: 2px !important;
  }

  .lines.opened {
    .line-1 {
      transform: translateY(5px) translateX(0px) rotate(45deg) !important;
    }

    .line-3 {
      transform: translateY(-6px) translateX(0px) rotate(-45deg) !important;
    }
  }
}

@media screen and (max-width: 1200px) {
  .menu-items {
    .menu-item {
      font-size: 18px;
      margin-right: 20px;
    }
  }
}

@media screen and (max-width: 1440px) {
  .menu-items {
    width: 530px;

    .menu-item {
      font-size: 20px;
      margin-right: 24px;
    }
  }

  .phone {
    font-size: 20px;
    margin-left: 20px !important;
  }
}

.menu-overlay {
  z-index: -1;
  position: fixed;
  width: 100%;
  height: 100vh;
  background: var(--background-color);
}

.chapters__wrapper {
  opacity: 0;
  right: -200px;
  top: 0;
  transition: opacity, color .3s ease;
  z-index: 11;

  @media screen and (max-width: 1800px) {
    right: -150px;
  }

  @media screen and (max-width: 1200px) {
    right: -120px;
  }
}

.chapters__wrapper.show {
  opacity: 1;
}

.chapters-1 {
  top: 90px;
}

.chapter:hover {
  color: var(--blue-accent);
  z-index: 12;
}
</style>
