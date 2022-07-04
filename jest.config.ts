/** @type {import('ts-jest/dist/types').Init} */
module.exports = {
  roots: ["<rootDir>/test", "<rootDir>/src"],
  testEnvironment: "node",
  collectCoverage: true,
  preset: "ts-jest",
  verbose: true,
  coverageDirectory: "coverage",
  testRegex: "(.*\\.spec\\.ts)$",
  collectCoverageFrom: ["<rootDir>/src/**/*{ts}"],
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/$1",
    "@root/(.*)": "<rootDir>/$1",
  },
  moduleDirectories: ["node_modules", "src"],
};
