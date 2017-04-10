var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");



module.exports = {
  entry: [
    './src/index.js',
  ],

  output: {
    filename: 'static/bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: 'https://phaze1d.github.io/Interactive-Resume/'
  },

  resolve: {
    modules: [
      'node_modules',
      'src',
      'public'
    ],
    extensions: ['.js', '.jsx', '.scss', '.sass']
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|svg|pdf)$/,
        include: [path.resolve(__dirname, './public/images')],
        use: 'url-loader?limit=5000'
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader",
        })
      },
      {
        test: /\.(ttf|pdf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader'
      }
    ],
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false
    }),
    new ExtractTextPlugin("static/styles.css")
  ],
};
