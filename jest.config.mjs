/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFiles: ['jest-localstorage-mock'],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  transform: {
    "^.+\\.[tj]sx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.app.json",
      },
    ],
    "^.+\\.svg$": "<rootDir>/svgTransform.cjs",
  },
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy",
    "\\.svg$": "<rootDir>/svgTransform.cjs",
  },
};