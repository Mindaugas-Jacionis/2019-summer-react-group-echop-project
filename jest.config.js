module.exports = {
  projects: [
    // {
    //   displayName: 'e2e',
    //   preset: 'jest-puppeteer',
    //   testMatch: ['<rootDir>/**/*.e2e.+(js|ts){,x}'],
    //   setupFilesAfterEnv: [require.resolve('./__tests__/setup')]
    // },
    {
      displayName: 'unit',
      testEnvironment: 'jsdom',
      setupFiles: ['jest-date-mock'],
      testMatch: ['<rootDir>/**/*.test.js'],
      transform: {
        '^.+\\.(js|jsx)$': require.resolve('babel-jest'),
      },
    },
  ],
};
