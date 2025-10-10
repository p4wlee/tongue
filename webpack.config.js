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
    new MiniCssExtractPlugin({
      filename: "style.css" // CSS generated in dist/
    }),
    new HtmlWebpackPlugin({
      template: "./index.html", // main template
      filename: "index.html"    // output in dist/
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/img", to: "img" } // copy the img folder to dist/
      ]
    }),
    new webpack.DefinePlugin({
      'process.env.API_BASE': JSON.stringify(process.env.API_BASE || "https://hacker-news.firebaseio.com/v0")
    })
  ],
  mode: "development",
  devtool: "source-map" // useful for debugging CSS/JS
};
