const path = require('path');
const config = require('./config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        app: [
            path.join(__dirname, '../src/index.tsx')
        ]
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, "../build"),
        publicPath: config.base
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{ loader: 'ts-loader' }]
            }
        ]
    },
    devServer: {
        port: 7000,
        static: {
            directory: path.join(__dirname, "../build"),
        },
        host: "0.0.0.0",
        compress: true,
        hot: true,
        historyApiFallback: true
    },
    resolve: {
        //下面后缀的文件导入时可以省略文件名，js必须要有，否则会react.js文件会无法被解析
        extensions: [".ts", ".tsx", ".js", ".jsx", ".vue", ".css", ".less", ".scss"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            output: path.join(__dirname, "../build/index.html"),
            template: path.join(__dirname, "../src/index.html")
        })
    ]
};