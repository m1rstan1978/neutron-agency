let webpack = require("webpack")

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Neutron Agency',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/style/main'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-particles.js',
    '~/plugins/vue-typed-js.js',
    {src: '~/plugins/vue-carousel.js', mode: "client"},
    {src: "~/plugins/aos", mode: "client"}
  ],

  purgeCSS: {
    whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      Manrope: [300, 400, 500, 600, 700, 800],
      "Material Icons Round": true,
    },
    display: 'swap'
  },

  // loading: "~/components/PagePreloader.vue",

  loading: {
    color: '#7092E0',
    height: '4px'
  },

  loadingIndicator: {
    name: 'circle',
    color: '#7092E0',
    background: 'white'
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vue-particles", "vue-typed-js", "three", "vue-carousel"],
    extend: function (config) {
      config.plugins.push(new webpack.ProvidePlugin({
        THREE: 'three'
      }));
    }
  },

  transition: {
    name: 'fade',
  }
}
