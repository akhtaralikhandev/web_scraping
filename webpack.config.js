const path = require("path");

module.exports = {
  entry: "./src/index.html",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  // Rest of your webpack configuration...
};
