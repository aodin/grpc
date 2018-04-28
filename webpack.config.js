const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: "./grpcweb/client.ts",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: {
      index: 'index.html'
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: /src|_proto/,
        exclude: /node_modules/,
        loader: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: []
};
