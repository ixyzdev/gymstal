/** @jest-config-loader ts-node */
import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-expo',
  verbose: true,
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.(test|spec).[jt]s?(x)',
    '<rootDir>/src/**/*.test.[jt]s?(x)',
    '<rootDir>/src/**/*.spec.[jt]s?(x)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],

  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native(-community)?|expo(nent)?|@expo(nent)?/.*)',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/build/'],
};

export default config;
