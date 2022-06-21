/*
 * @Author: niumengfei
 * @Date: 2022-06-21 14:32:52
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-06-21 16:43:00
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production', // development  production
    entry: './index.js',
    output: {
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    //webpack 生产环境会默认 开启tree-shaking 和代码压缩
    optimization: { 
        // minimize: true, //代码压缩优化
        usedExports: false, //生产模式下 可设置false手动关闭 tree-shaking ,不然会打包出多余代码
    },
}