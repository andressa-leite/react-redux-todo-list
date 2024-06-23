/* global module */
module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react/recommended',
		'prettier',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'eslint-plugin-import-helpers', 'react'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'import-helpers/order-imports': [
			'warn',
			{
				newlinesBetween: 'always',
				groups: [
					'module',
					'/^react/',
					'/^@mui/',
					'/^@shared/',
					'/^@/pages/',
					'/^@/components/',
					'/^@/enums/',
					'/^@/hooks/', 
					'/^@/interfaces/',
					'/^@/schemas/',
					'/^@/styles/',
					'/^@/utils/',
					['parent', 'sibling', 'index'],
				],
				alphabetize: { order: 'asc', ignoreCase: true },
			},
		],
	},
};
