// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ui: {},
  googleFonts: {
    families: {
      'Open Sans': true,
      Poppins: [300],
      Caveat: [700],
      Inter: [200, 500, 700],
    },
  },
  modules: ["@nuxtjs/google-fonts", "@nuxt/ui", "nuxt-icon"],
});
