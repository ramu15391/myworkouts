module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "parser":"babel-eslint",
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single",// quotes rule can be string option like "single", or objects like below
            {
                "avoidEscape": true,// ex: following string work only if this rule enabled "don't" 
                "allowTemplateLiterals": true // for allowing backtick quotes
            },
        ],
        "semi": [
            "error",
            "never"
        ],
        "semi-spacing": [
            "error",
            {"before":false,"after":true}
        ],
        "arrow-parens": ["error", "as-needed"]
    }
};