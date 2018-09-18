let webpack = require('webpack');
const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
    src: path.resolve(__dirname, 'src'),
    entry: path.resolve(__dirname, 'src/client'),
    build: path.resolve(__dirname, 'dist'),
    assets: path.resolve(__dirname, 'src/assets'),
};

module.exports = {
    entry: path.join(PATHS.entry, 'index.js'),
    output: {
        path: PATHS.build,
        filename: "bundle.[contenthash].js"
    },
    resolve: {
        modules: ['node_modules']
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new CleanWebpackPlugin(PATHS.build), // чистит директорию сборки
        new HtmlWebpackPlugin({ // html модуль с его настройкой, в него будет автоимпорт
            inject: 'head',
            favicon: path.join(PATHS.src, 'favicon.ico'),
            template: path.join(PATHS.src, 'index.html'),
            filename: path.join(PATHS.build, 'index.html')
        }),
        new CopyWebpackPlugin([
            path.join(PATHS.assets, 'image', 'backgrounds', 'carusel-1.png'),
            path.join(PATHS.assets, 'image', 'backgrounds', 'carusel-2.jpg'),
            path.join(PATHS.assets, 'image', 'backgrounds', 'carusel-3.jpg'),
            path.join(PATHS.assets, 'image', 'backgrounds', 'carusel-4.jpg'),
            path.join(PATHS.assets, 'image', 'faceNicobaggio.jpg'),
            {
                from: path.join(PATHS.assets, 'icons'),
                to: path.join(PATHS.build, 'assets', 'icons')
            },
            {
                from: path.join(PATHS.assets, 'image', 'loading'),
                to: PATHS.build
            }
        ]),
        new MiniCssExtractPlugin({
            filename: "style.[contenthash].css",
            chunkFilename: "[id].css"
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({}),
            new HtmlWebpackPlugin({
                inject: 'head',
                minify: true,
                favicon: path.join(PATHS.src, 'favicon.ico'),
                template: path.join(PATHS.src, 'index.html'),
                filename: path.join(PATHS.build, 'index.html')
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    /* "postcss-loader", */
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader", // встраивает импортированные css в html в котором вызывается скрипт bundle
                    "css-loader", // вместо import 'style.css' встраивает код из этого css
                    /* "postcss-loader" */
                ]
            },
            {
                test: /\.svg$/,
                loader: 'url-loader', //заменяет url ссылки на сами файлы в base64 
                options: {
                    limit: 100000
                }
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|jpg|gif|otf)$/,
                loader: 'file-loader',// заменяет url ссылки на модули с путями-указателями на файл
                options: {
                    outputPath: 'assets/'
                },
            }
        ]
    }
}