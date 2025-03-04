module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        ["airbnb", "prettier"],
        "eslint:recommended",
        "plugin:react/recommended", ["prettier"]
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "prettier/prettier": ["error"]
    }
};