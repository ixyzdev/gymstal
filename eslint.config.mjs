// https://docs.expo.dev/guides/using-eslint/
import { defineConfig } from 'eslint/config'
import expoConfig from 'eslint-config-expo/flat.js'
import testingLibrary from 'eslint-plugin-testing-library'

export default defineConfig([
  expoConfig,

  {
    settings: {
      'import/core-modules': ['react-native-paper']
    }
  },

  {
    ignores: ['dist/*']
  },

  {
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    plugins: {
      'testing-library': testingLibrary
    },
    rules: {
      ...testingLibrary.configs.react.rules,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off'
    }
  }
])
