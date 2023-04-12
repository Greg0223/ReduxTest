/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
};
