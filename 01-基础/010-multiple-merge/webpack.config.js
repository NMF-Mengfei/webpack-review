/*
 * @Author: niumengfei
 * @Date: 2022-04-30 18:54:06
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-06-12 19:35:02
 */
console.log(__dirname)
const { merge } = require('webpack-merge');
const commonConfig = require('./config/webpack.commom')
const devConfig = require('./config/webpack.config.dev')
const proConfig = require('./config/webpack.config.pro')


module.exports = (env) =>{
    console.log('env::::', env);
    switch (true) {
        case env.dev:
            return merge(commonConfig, devConfig)
        case env.pro:
            return merge(commonConfig, proConfig)
        default:
            throw new Error('No matching configuration was found!');
    }
}