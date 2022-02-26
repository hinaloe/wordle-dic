module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json",
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'react/prop-types': 'off',
    },
    "ignorePatterns": [
        ".eslintrc.js",
        "vite.config.ts",
    ],
    "settings": {
        "react": {
            "version": "detect"
        },
    },
}
