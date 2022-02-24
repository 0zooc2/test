module.exports = {
	env: {
		browser: true,
		node: true,
	},
	extends: ['airbnb', 'prettier'],
	plugins: ['prettier'],
	rules: {
		'import/no-unresolved': 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto',
			},
		],
	},
};
