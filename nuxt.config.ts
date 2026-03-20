export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@tresjs/nuxt'],
  runtimeConfig: {
    mailchimpApiKey: process.env.MAILCHIMP_API_KEY,
    mailchimpAudienceId: process.env.MAILCHIMP_AUDIENCE_ID,
    mailchimpDc: process.env.MAILCHIMP_DC
  },
  app: {
    head: {
      title: 'OMI',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'OMI - Site en construction' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap' }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})
