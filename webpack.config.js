const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const webpack = require('webpack');
const _ = require('lodash');

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
    const clientConfig = {
        entry: {
            'main': './src/index.js'
        },
        output: {
            path: DIST_PATH,
            filename: `[name].js`,
            chunkFilename: `[name].chunk.js`,
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
                    use: ExtractCssChunks.extract({
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
                hash: true
            }),
            // Make sure that the plugin is after any plugins that add images
            new ImageminPlugin({
                disable: !isProd, // Only for production
                pngquant: {
                    quality: '95-100'
                }
            }),
            new ExtractCssChunks()
        ]
    };

    if (isProd) {
        clientConfig.plugins.push(
            new UglifyJSPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            })
        );
    }

    /**
     * Server side configuration
     * Used for rendering React on the server
     */
    const serverConfig = Object.assign(_.cloneDeep(clientConfig), {
        entry: {'server': './src/server/index.js'},
        target: 'node',
        node: {
            __filename: true,
            __dirname: true
        },
        output: {
            path: DIST_PATH,
            filename: `[name].js`,
            libraryTarget: 'commonjs2'
        }
    });
    serverConfig.plugins = serverConfig.plugins.slice().splice(2);
    serverConfig.plugins.push(new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
    }));

    return [clientConfig, serverConfig];
};
