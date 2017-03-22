var path = require('path');
var webpack = require('webpack');


module.exports = {
  entry: [
    './src/index.js',
  ],

  output: {
    filename: 'static/bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: 'file://' + path.resolve(__dirname, 'build') + '/'
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
        loader: 'url-loader?limit=5000'
      },
      {
        test: /\.sass$/,
        loaders: [
          'style-loader',
          'css-loader',
          { loader: 'sass-loader', query: { outputStyle: 'expanded' } }
        ]
      },
      {
        test: /\.(ttf|pdf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ],
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false
    })
  ],
};
