var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');



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

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },{
        test: /\.(png|jpg|svg|pdf)$/,
        include: [path.resolve(__dirname, './public/images')],
        use: 'url-loader?limit=500'
      },{
	      test: /\.(scss|sass|css)$/,
	      use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
	      })
	    },{
        test: /\.(ttf|pdf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader'
      }
    ],
  },

  plugins: [
    // new UglifyJSPlugin(),
		new ExtractTextPlugin("static/styles.css"),
		new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    }),
		new HtmlWebpackPlugin(),
		// new BundleAnalyzerPlugin()
  ],
};
