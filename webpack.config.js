const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractStyles = new ExtractTextPlugin("style.css");
const extractFonts = new ExtractTextPlugin("fonts.css");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    app: './js/index.js'
  },
  module:{
    loaders: [
      { test: '/style/\.css$/',
        loader: extractStyles.extract({
          loader: 'css-loader?importLoaders=1!postcss-loader'
        })
      },
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ }
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },

  plugins: [
    extractStyles,
    extractFonts
  ]

}
