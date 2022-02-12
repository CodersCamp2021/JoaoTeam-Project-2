const config = {
    verbose: true,
    setupFilesAfterEnv: ['./jest-setup.js'],
    moduleNameMapper: {
        "^.+\\.(css|less|scss|svg)$": "babel-jest"
    },
    reporters: [
      "default",
      [
        "./node_modules/jest-html-reporter",
        {
          pageTitle: "Test Report"
        }
      ]
    ]
};
  
module.exports = config
