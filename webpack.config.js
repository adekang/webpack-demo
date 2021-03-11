const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");

const base = require('./webpack.config.base.js')

module.exports = {
    // 将base里面的代码抄过来
    ...base,
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist"
    },
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};