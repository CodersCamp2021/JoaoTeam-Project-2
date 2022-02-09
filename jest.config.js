const config = {
    verbose: true,
    setupFilesAfterEnv: ['./jest-setup.js'],
    moduleNameMapper: {
        "^.+\\.(css|less|scss|svg)$": "babel-jest"
      }
};
  
module.exports = config
