// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  googleFonts: {
    families: {
      Roboto: true,
      Poppins: [300],
      Caveat: [700],
      Inter: [200, 500, 700],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "nuxt-icon"],
});
