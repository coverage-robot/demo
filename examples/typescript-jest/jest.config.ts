import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    ".styled.{tsx,ts}",
    "index.ts",
  ],
};

export default config;
