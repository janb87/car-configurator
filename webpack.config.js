const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const postCssLoaderConfig = {
  loader: 'postcss-loader', options: {
    plugins: function () {
      return [autoprefixer];
    }
  }
};

const DIST_PATH = path.resolve(__dirname, 'dist');

module.exports = env => {
  const isProd = env && env.platform == 'prod';
  const config = {
    entry: {
      'app': './src/index.js'
    },
    output: {
      path: DIST_PATH,
      filename: `[name].js`
    },
    devtool: isProd ? false : 'eval-source-map',
    devServer: {
      contentBase: DIST_PATH
    },
    resolve: {
      extensions: ['.js', '.css', '.scss', '.json']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', {loader: 'css-loader', options: {importLoaders: 1}}, postCssLoaderConfig]
        },
        {
          test: /\.scss$/,
          use: ['style-loader', {loader: 'css-loader', options: {importLoaders: 1}}, 'sass-loader', postCssLoaderConfig]
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        chunks: ['app'],
        hash: true
      }),
      // Make sure that the plugin is after any plugins that add images
      new ImageminPlugin({
        disable: !isProd, // Only for production
        pngquant: {
          quality: '95-100'
        }
      })
    ]
  };

  if (isProd) {
    config.plugins.push(new UglifyJSPlugin());
  }

  return config;
};
