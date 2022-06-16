/*
 * @Author: niumengfei
 * @Date: 2022-04-30 18:54:06
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-06-12 18:42:00
 */
const CSSMinimizerWebpackPlugin  = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
    output: {
        filename: 'assets/js/[name].[contenthash].js', // contenthash hash:5
        // Error: Conflict: Multiple chunks emit assets to the same filename assets/js/bundle.js (chunks 826 and 21)
        // 多入口时 需要配置 多出口
        publicPath: 'http://localhost:8080/'
    },
    mode: 'production', //none development production
    // 优化配置 
    optimization: { 
        minimizer: [ //生产环境需要压缩代码
            new CSSMinimizerWebpackPlugin(),
            new TerserWebpackPlugin(), //代码压缩 生产才会压缩 开发环境不会
        ], 
    },
    performance: { //去除警告
        hints:false   
    }
}