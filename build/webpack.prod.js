const { merge } = require('webpack-merge');//用来合并配置文件
const baseConfig=require('./webpack.base')
const webpack=require('webpack')
//webpack 配置文件默认遵循commonJS规范
module.exports = merge(baseConfig,{
    mode: 'production',
    plugins:[
        new webpack.DefinePlugin({
            IS_DEV:'false'
        })
    ],
    devtool: 'cheap-module-eval-source-map', //推荐
})