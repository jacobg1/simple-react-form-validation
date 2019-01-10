module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "airbnb",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2016,
        "sourceType": "module"
    },
    "parser": "babel-eslint",
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-indent": ["error", 4],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "warn",
            "never"
        ]
    }
};