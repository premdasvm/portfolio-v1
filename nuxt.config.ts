// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@nuxt/icon', '@vueuse/nuxt', '@nuxtjs/color-mode', '@nuxt/fonts'],
	typescript: {
		typeCheck: true,
	},
	tailwindcss: {
		cssPath: '~/assets/css/global.css',
	},
	fonts: {},
	colorMode: {
		classSuffix: '',
	},
	future: {
		compatibilityVersion: 4,
	},
});
