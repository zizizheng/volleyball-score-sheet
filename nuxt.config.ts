export default defineNuxtConfig({
	app: {
		// head
		head: {
			title: 'Volley Sheet Score',
			meta: [
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{
					hid: 'description',
					name: 'description',
					content: 'ElementPlus + Nuxt3',
				},
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/toss.png' }],
		},
	},

	css: ['~/assets/scss/index.scss'],

	typescript: {
		strict: true,
		shim: false,
	},

	// build modules
	modules: [
		// '@vueuse/nuxt',
		// '@unocss/nuxt',
		'@pinia/nuxt',
		'@element-plus/nuxt',
		'@nuxtjs/color-mode',
	],

	// colorMode
	colorMode: {
		classSuffix: '',
	},

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "./assets/scss/element/index.scss" as element;`,
				},
			},
		},
	},
	elementPlus: {
		icon: 'ElIcon',
		importStyle: 'scss',
	},
	extensions: ['js', 'ts', 'vue'],
	alias: {
		'@': 'src',
	},
});
