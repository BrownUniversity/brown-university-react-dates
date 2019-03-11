const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const { version } = require("./package.json");

module.exports = {
  mode: "none",
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    filename: "index.commonjs.js",
    path: path.resolve(__dirname, "./dist"),
    libraryTarget: "umd"
  },
  externals: {
    "brown-university-styles": "brown-university-styles",
    react: "react",
    "styled-components": "styled-components",
    "prop-types": "prop-types"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(`v${version}`),
    new CleanWebpackPlugin(["dist"], {
      root: `${__dirname}/`,
      exclude: ["es"]
    })
  ]
};
