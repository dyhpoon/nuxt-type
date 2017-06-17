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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:600|Rufina:700' }
    ]
  },
  loading: false,
  css: ['assets/normalize.css', 'assets/main.css'],
  build: {
        extend(config, {dev, isClient}) {
            if (isClient) {
                config.entry.app = ["~/SplitText.min", config.entry.app];
            }
        }
    }
}
