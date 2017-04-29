module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'La Baleine - Communauté francophone de crypto monnaies',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        content: "Venez vous initiez aux crypto monnaies, avec la meilleure communauté de crypto monnaies française."
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Quicksand' },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/main.css',
    '~assets/css/normalize.css',
    { src: 'tachyons', lang: 'css' },
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Route for static generation
  */
  generate: {
    routeParams: {
    }
  }
}
