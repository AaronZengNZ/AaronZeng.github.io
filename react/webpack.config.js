const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // define entry file and output
  entry: "./src/reactApp.js",
  output: {
    path: path.resolve("asset/js"),
    filename: "reactApp.js",
  },
  // define babel loader
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        // use: ["babel-loader", "style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: ".",
    index: "index.html",
    compress: false,
    inline: true,
    progress: true,
    hot: true,
    port: 9999,
  },
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Hot Module Replacement",
      template: "index.html",
      // filename: "index_bundle.html",
    }),
  ],
  resolve: {
    extensions: [".vue", ".js", ".css", "jsx"],
  },
};
