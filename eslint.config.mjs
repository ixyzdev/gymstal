// eslint.config.js
// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config')
const expoConfig = require('eslint-config-expo/flat')
const testingLibrary = require('eslint-plugin-testing-library')

module.exports = defineConfig([
  // Config base de Expo
  expoConfig,

  // Resolver para módulos RN con exports modernos
  {
    settings: {
      'import/core-modules': ['react-native-paper']
    }
  },

  // Ignorar build outputs
  {
    ignores: ['dist/*']
  },

  // Config específica para tests
  {
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    plugins: {
      'testing-library': testingLibrary
    },

    // Reglas específicas para Testing Library
    rules: {
      ...testingLibrary.configs.react.rules,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'off',
      'unused-imports/no-unused-vars': 'off'
    }
  }
])
