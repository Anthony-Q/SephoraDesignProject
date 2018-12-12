var webpack = require("webpack");
var path = require("path");

// Build directory is where the bundle file will be placed
var BUILD_DIR = path.resolve(__dirname, "client/dist");
// App directory is where all of your raw JSX files will be placed
var APP_DIR = path.resolve(__dirname, "client/src");

var config = {
  entry: APP_DIR + "/index.jsx",
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: "babel-loader",
        query: {
          presets: ["env", "react"]
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader"
      },
      {
        test: /\.css$/,
        loader: "css-loader",
        query: {
          modules: true,
          localIdentName: "[name]__[local]___[hash:base64:5]"
        }
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  }
};

module.exports = config;
