const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

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
            'main': './src/index.js',
            'server': './src/server.js'
        },
        output: {
            path: DIST_PATH,
            filename: `[name].js`,
            libraryTarget: 'umd'
        },
        devtool: isProd ? false : 'eval-source-map',
        devServer: {
            contentBase: DIST_PATH,
            historyApiFallback: {
                index: 'index.html'
            }
        },
        resolve: {
            extensions: ['.js', '.scss', '.json']
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
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        //resolve-url-loader may be chained before sass-loader if necessary
                        use: ['css-loader', 'sass-loader']
                    })
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
                chunks: ['main'],
                hash: true
            }),
            // Make sure that the plugin is after any plugins that add images
            new ImageminPlugin({
                disable: !isProd, // Only for production
                pngquant: {
                    quality: '95-100'
                }
            }),
            new ExtractTextPlugin('style.css')
        ]
    };

    if (isProd) {
        config.plugins.push(
            new UglifyJSPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            })
        );
    }

    return config;
};
