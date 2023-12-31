import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 const ignoredModules = ["next"].join("|")
// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transformIgnorePatterns: [`/node_modules/(?!${ignoredModules})`],
  moduleNameMapper: {
    pdfHeader:'<rootDir>/__mocks__/fileMock.js',
    jspdf: '<rootDir>/__mocks__/fileMock.js',
    ArrowLongLeftIcon: '<rootDir>/__mocks__/fileMock.js',
    ArrowLongRightIcon: '<rootDir>/__mocks__/fileMock.js',
    InformationCircleIcon:'<rootDir>/__mocks__/fileMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  testEnvironment: 'jest-environment-jsdom',
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
