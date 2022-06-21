/*
 * @Author: niumengfei
 * @Date: 2022-06-20 13:57:24
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-06-20 14:16:28
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    mode: 'development',
    // devtool: 'source-map',
    entry: {
        index: './src/index.js',
        app: './src/app.js',
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new BundleAnalyzerPlugin(), //依赖图
    ]
}