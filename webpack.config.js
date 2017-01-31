
module.exports = {
  //context: __dirname + "/src",
  entry: {
    javascript: __dirname + "/src/js/index.js",
  },
  output: {
    path: __dirname + "/public",
    filename: "/dist/bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.html$/, loader: "file-loader?name=[path][name].[ext]" },
      { test: /\.sass$/, loaders: ["style-loader", "css-loader", "sass-loader"]}
    ]
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".sass", ".html"]
  },
  devtool: "source-map",
  devServer: {
    contentBase: './public',
    host: "192.168.33.10",
    port: 3000
  }
}
