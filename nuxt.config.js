const pkg = require('./package')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
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
    '@/assets/scss/index.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    { src: '~/plugins/querystring' },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    // scss: [
    //   'assets/scss/file/_path.scss',
    //   'assets/scss/file/_path-two.scss'
    // ]
  },
  /*
  ** Axios module configuration
  */
  axios: {
    baseURL:
      process.env.NODE_ENV == 'production' ? 'https://54.180.144.27:8000' : 'http://localhost:8000/',
    // credentials: true,
    // proxy: false,
    // debug: false, // ture시 콘솔에 모든 데이터 다 찍힘
    // requestInterceptor: (config, { store }) => {
    //   config.headers.common['Authorization'] = ''
    //   config.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;application/json'
    //   return config
    // }
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },

  // serverMiddleware: [
  //   '~/api/index.js'
  // ]
}
