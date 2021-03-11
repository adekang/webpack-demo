const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");
const {
    Template
} = require("webpack");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'XDML',
        Template: 'src/assets/index.html'
    })],
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }, ],
    },
};