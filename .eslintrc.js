module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:nuxt/recommended',
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 13,
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	rules: {
		'comma-dangle': 'off',
		'vue/multi-word-component-names': 0,
		'space-before-functino-paren': 0,
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
	},
};
