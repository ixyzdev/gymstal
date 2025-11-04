// eslint.config.js
// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const testingLibrary = require('eslint-plugin-testing-library');


module.exports = defineConfig([
  // Config base de Expo
  expoConfig,

  // Ignorar build outputs
  {
    ignores: ['dist/*'],
  },

  // Config específica para tests
  {
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    plugins: {
      'testing-library': testingLibrary,
    },

    // Regras específicas para Testing Library
    rules: {
      ...testingLibrary.configs.react.rules,
    },
  },
  
]);
