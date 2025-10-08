const path = require("path");
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/javascript/script.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true // pulisce dist prima di ogni build
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader, // estrae CSS in file separato
          "css-loader",               // interpreta @import e url()
          "sass-loader"               // compila SCSS in CSS
        ]
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"] // compatibilità browser
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css" // CSS generato in dist/
    }),
    new HtmlWebpackPlugin({
      template: "./index.html", // template principale
      filename: "index.html"    // output in dist/
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/img", to: "img" } // copia la cartella img in dist/
      ]
    }),
    new Dotemv()
  ],
  mode: "development",
  devtool: "source-map" // utile per il debug del CSS/JS
};
