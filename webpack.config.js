const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Aula Webpack",
    }),
  ],
  devServer: {
    static: "./build",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
};
