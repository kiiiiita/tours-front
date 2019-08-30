require('dotenv').config()
const {
  FIREBASE_APIKEY,
  FIREBASE_AUTHDOMAIN,
  FIREBASE_DATABASEURL,
  FIREBASE_PROJECTID,
  FIREBASE_STORAGEBUCKET,
  FIREBASE_MESSAGINGSENDERID
 } = process.env

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-vue-material', {
      // theme: 'default-dark',
      components: [
        'MdDrawer',
        'MdRadio',
        'MdMenu',
        'MdContent',
        'MdList',
        'MdButton',
        'MdToolbar',
        'MdField',
        'MdCard',
      ]
    }],
    ['nuxt-material-design-icons'],
    ["@nuxtjs/axios"]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  env: {
    FIREBASE_APIKEY,
    FIREBASE_AUTHDOMAIN,
    FIREBASE_DATABASEURL,
    FIREBASE_PROJECTID,
    FIREBASE_STORAGEBUCKET,
    FIREBASE_MESSAGINGSENDERID
  }
}
