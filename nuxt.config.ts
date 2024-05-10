// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: {enabled: true},
    app: {
        head: {
            title: "Sample",
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1'
        }
    },
    css: [
        "vuetify/lib/styles/main.sass",
        "@/assets/scss/main.scss",
    ],
    build: {
        transpile: ['vuetify'],
    }
})
