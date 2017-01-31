
module.exports = {
  //context: __dirname + "/src",
  entry: __dirname + "/src/js/index.js",
  output: {
    path: __dirname + "/public",
    filename: "/dist/bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/,   loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.scss$/, loaders:[
        "style-loader", 
        "css-loader?sourceMap&modules&importLoader=2", 
        "sass-loader", 
        "bulma-loader"
          //?theme=./node_modules/bulma/bulma.sass"
      ]}
    ]
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".scss", ".html"]
  },
  devtool: "source-map",
  devServer: {
    contentBase: './public',
    host: "192.168.1.4",
    port: 3000
  }
}
