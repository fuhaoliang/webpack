const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
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
      favicon: './public/ico.ico',
      hash: true,
      minify: {
        showErrors: true, // 开发环境打开 显示错误信息
        removeComments: true, //移除注释
        collapseWhitespace: true, // 压缩document中的空白节点 SEO优化关闭
        collapseInlineTagWhitespace: true, //压缩行元素空白,保留&nbsp;
      }
    })
  ]
};
