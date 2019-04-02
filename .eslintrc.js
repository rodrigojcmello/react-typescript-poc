module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [

        // ESLint
        'airbnb',
        'plugin:@typescript-eslint/recommended',

        // Prettier
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'

    ],
    env: {
        'browser': true,
        'node': true
    },
    parserOptions: {
        'ecmaVersion': 2018,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true
        }
    },
    rules: {

        // JavaScript
        'no-underscore-dangle': [2, { 'allow': ['__REDUX_DEVTOOLS_EXTENSION__'] }],

        // Typescript
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/no-var-requires': 0,

        // React
        'react/jsx-filename-extension': 0,
        'react/jsx-indent': 0,
        'react/jsx-indent-props': 0,
        'react/sort-comp': 0,
        'react/jsx-key': 2,
    },
    settings: {
        'react': {
            'version': 'latest'
        },
        'import/resolver': {
            'node': {
                'extensions': [
                    '.js',
                    '.ts',
                    '.tsx'
                ]
            },
        }
    },
    globals: {
        'PRODUCTION': 'readonly'
    }
};
