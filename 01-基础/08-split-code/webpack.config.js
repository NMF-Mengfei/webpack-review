/*
 * @Author: niumengfei
 * @Date: 2022-04-30 18:54:06
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-06-10 13:32:00
 */
console.log(__dirname)
const path = require('path');
const HtmlWebpackPlugins = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CSSMinimizerWebpackPlugin  = require('css-minimizer-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    entry: {
        index: './src/index.js',
        another: './src/another.js',
    },
    /* 防止重复: 解决上边方法 同一个包打包多次 */
    // entry: {
    //     index: {
    //         import: './src/index.js',
    //         dependOn: 'shared',
    //     },
    //     another: {
    //         import: './src/another.js',
    //         dependOn: 'shared',
    //     },
    //     shared: 'lodash'
    // },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/js/[name].bundle.js',
        // Error: Conflict: Multiple chunks emit assets to the same filename assets/js/bundle.js (chunks 826 and 21)
        // 多入口时 需要配置 多出口
        clean: true, //清除历史dist
        assetModuleFilename: 'assets/images/[contenthash][ext][query]' //contenthash / name
    },
    mode: 'production', //none development production
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugins({
            filename: 'app.html', //文件名 可以指定到目录assets/index.html
            template: 'index.html', //原html文件位置 //可以./index.html 也可以直接index.html
            inject: 'head', //放在html的哪里 body head true / false
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[contenthash].css'
        })
    ],
    module: {
        rules: [{ 
            test: /\.png/, 
            type: 'asset/resource', //resource 自然资源 import会导入一个路径
            // 优先级高于 assetModuleFilename 
            generator: { 
                filename: 'assets/images/[contenthash][ext][query]' 
            }
        },{ 
            test: /\.svg/, 
            type: 'asset/inline' //inline 行内 线上 不会打包到资源里
        },{ 
            test: /\.txt/, //使用inline会出现base64数据流渲染到页面 使用source正常 使用resource会展示目录
            //resource import = file:///D:/webpack-study/05-assets-module/dist/assets/js/../../assets/images/7da1604e40dc5f0fb6f8.txt
            //inline import = data:text/plain;base64,aGVsbG8gd2VicGFjaw==
            //source import = hello.wepack
            type: 'asset/source' //source 资源，导出资源的源代码
        },{ 
            test: /\.jpg/, 
            type: 'asset', //asset 自动选择
            parser: { 
                dataUrlCondition: { 
                    maxSize: 4 * 1024, // (638/1024) * 1024 * 1024 // 1kb = 1024 || 1MB = 1024 * 1024
                } 
            }   
        },{ 
            test:  /\.(css|less)$/i, 
            use: [
                // 'style-loader', 
                MiniCssExtractPlugin.loader,
                'css-loader', 
                'less-loader'
            ]
        }],
    },
    devServer: { 
        static: './dist' 
    },
    // 优化配置 
    optimization: { 
        minimizer: [ new CSSMinimizerWebpackPlugin(), ], 
        splitChunks: { chunks: 'all', }, //代码分割
    },

    performance: { //去除警告
        hints:false   
    }
}