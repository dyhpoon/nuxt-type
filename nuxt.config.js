module.exports = {
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Rufina|Josefin+Sans:400,700|Playfair+Display:700|Prata' }
    ]
  },
  loading: false,
  css: ['assets/normalize.css', 'assets/main.css'],
  build: {
    extend(config, {isClient, dev}) {
      if (isClient) {
        config.entry.app = ["~/SplitText.min", config.entry.app];
      }
    }
  }
}
