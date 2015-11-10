var webpack = require('webpack');
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// Path Config
var pathConfig = {
  context: __dirname + '/dev',
  assetsPath: path.resolve(__dirname + '/public')
}


// definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});



// PostCSS
var autoprefixer = require('autoprefixer');
var postcssUse = require('postcss-use');
var postcssImport = require('postcss-import');
var lost = require('lost');

module.exports = {
  context: pathConfig.context,
  entry: ['./css/styles', './js/App'],
  output: {
    path: pathConfig.assetsPath,
    filename: './js/bundle.js'
  },
  devServer: {
    contentBase: 'public'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'react'],
      }
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
    ]
  },
  eslint: {
    configFile: '.eslintrc'
  },
  plugins: [
    new ExtractTextPlugin('./css/styles.css'),
    definePlugin
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  }
}
