module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "airbnb",
  "globals": {
    "react": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "globalReturn": true,
      "impliedStrict": true,
      "arrowFunction": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
    "allowImportExportEverywhere": false,
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prefer-stateless-function": [2, { "ignorePureComponents": true }],
    "import/no-unresolved": false
  }
};
