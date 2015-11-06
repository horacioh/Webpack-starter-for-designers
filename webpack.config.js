var webpack = require('webpack');
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// Path Config
var pathConfig = {
  context: __dirname + '/dev',
  assetsPath: path.resolve(__dirname + '/public')
}


// PostCSS
var autoprefixer = require('autoprefixer');
var postcssUse = require('postcss-use');
var postcssImport = require('postcss-import');
var lost = require('lost');

module.exports = {
  context: pathConfig.context,
  entry: ['./css/style', './js/App'],
  output: {
    path: pathConfig.assetsPath,
    filename: './js/bundle.js'
  },
  devServer: {
    contentBase: 'public'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      },
      {
        test: /\.woff$/,
        loader: 'file-loader?name=/assets/fonts/[name].[ext]'
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
        'file?hash=sha512&digest=hex&name=/assets/img/[hash].[ext]',
        'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      }
    ]
  },
  postcss: function (webpack) {
    return [
      postcssImport({
        addDependencyTo: webpack
      }),
      autoprefixer({
        browsers: ['last 2 versions']
      }),
      postcssUse({ modules: [
        'lost'
      ]}),
    ];
  },
  plugins: [
    new ExtractTextPlugin('./css/style.css')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  }
}
