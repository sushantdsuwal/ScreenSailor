module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  reporters: [
    "default",
    ["jest-junit", { outputDirectory: "reports", outputName: "report.xml" }]
  ]
};
