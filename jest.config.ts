import {Config} from "@jest/types";

const config: Config.InitialOptions  = {

  preset: "ts-jest",

  testEnvironment: "jsdom",

  globalSetup: "./setup.ts",

  globalTeardown: "./teardown.ts",

  rootDir: "./tests",

  testRegex: "\.spec\.tsx?$",

  moduleNameMapper: {
    "@\/(.*)$": "<rootDir>/src/$1",
    '\\.(jpe?g|png|gif|svg|woff2?|eot|ttf|otf)$': '<rootDir>/tests/_fixtures/empty-string.ts',
  }

};

export default config;