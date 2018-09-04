let webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/client/main.js",
    output: {
        path: __dirname + "/src/client/dist",
        filename: "bundle.js"
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
        new CleanWebpackPlugin('/src/client/dist')
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader", // встраивает импортированные css в html в котором вызывается скрипт bundle
                    "css-loader" // вместо import 'style.css' встраивает код из этого css
                ]
            },
            {
                test: /\.svg$/,
                loader: 'url-loader?limit=100000' //заменяет url ссылки на сами файлы в base64 
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader', // заменяет url ссылки на модули с путями-указателями на файл
                        options: {}
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }]
            }
        ]
    }
}