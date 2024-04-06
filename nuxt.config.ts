// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  "tailwindcss": {
    exposeConfig: true,
    cssPath: [
      "./assets/tailwind.css",
      {injectPosition: "first"}
    ],
    viewer: false,
    config: {
      daisyui: {
        themes: [
          "night",
          "light",  
        ],
      },
      content: {
        files: [
          'components/**/*.{vue,mjs,ts}',
          '*.{mjs,js,ts}',
        ]
      },
      plugins: [
        require("daisyui")
      ],
    }
  }
})
