let webpack = require('webpack');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


module.exports = {
    entry: "./src/client/main.js",
    output: {
        path: __dirname + "/src/client/dist",
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
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,  // собирает импортированные файлы css в один и закидывает его в директорию сборки, убирает его из файла сборки
                    "css-loader" // вместо import 'style.css' встраивает код из этого css
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader',
                options: {
                  limit: 100000
                }
            }
        ]
    }
}