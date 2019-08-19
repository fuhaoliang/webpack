const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "production",
  entry: {
    index: './src/index.js',
    about: './src/about.js',
    home: './src/home.js',
  },
  output: {
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
      templateParameters: {
        title: "index页面!!!",
        params: "1111"
      },
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./public/index.html",
      templateParameters: {
        title: "index页面!!!",
        params: "about!!!"
      },
      chunks: ['about']
    }),
    new HtmlWebpackPlugin({
      filename: "home.html",
      template: "./public/index.html",
      templateParameters: {
        title: "index页面!!!",
        params: "home!!!"
      },
      chunks: ['home']
    })
  ]
};
