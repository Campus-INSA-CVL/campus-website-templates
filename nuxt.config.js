const base =
  process.env.NODE_ENV === 'production' ? '/campus-website-templates/' : '/'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  generate: {
    fallback: true,
  },
  router: {
    base,
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: (titleChunk) => {
      return titleChunk
        ? `${titleChunk} - Campus Templates`
        : 'Campus Templates'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Ce site permet aux associations de facilement générer le contenu pour leur page d'association du site campus de l'INSA Centre-Val de Loire",
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: base + 'favicon.ico',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: [
    '~/components/',
    { path: '~/components/campus/', prefix: 'campus' },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/vuetify',
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    liveEdit: false,
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      options: {
        customProperties: true,
      },
      dark: false,
      themes: {
        light: {
          baseColor: '#fc5c65',
          teamColor: '#fd9644',
          socialColor: '#fed330',
          socialTeamColor: '#26de81',
          imageColor: '#2bcbba',
          imageSocialTeamColor: '#45aaf2',
          carouselColor: '#4b7bec',
          carouselTeamColor: '#a55eea',
          carouselSocialTeamColor: '#d1d8e0',
          carouselImageSocialTeamColor: '#778ca3',
          imagesColor: '#f9ca24',
          longColor: '#f0932b',
          expansionColor: '#eb4d4b',
        },
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
