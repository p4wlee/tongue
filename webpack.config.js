const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/javascript/script.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true // cleans dist before every build
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader, // extract CSS into a separate file
          "css-loader",               // interprets @import and url()
          "sass-loader"               // compile SCSS to CSS
        ]
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"] // browser compatibility
          }
        }
      }
    ]
  },
  plugins: [
    new Dotenv({
      systemvars: true
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html"
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/img", to: "img" }
      ]
    })
  ],
  mode: "development",
  devtool: "source-map"
};
