const { merge } = require('webpack-merge');//用来合并配置文件
const baseConfig=require('./webpack.base')
const webpack=require('webpack')

// const TerserJSPlugin=require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin=require('optimize-css-assets-webpack-plugin')
//webpack 配置文件默认遵循commonJS规范
module.exports = merge(baseConfig,{
    mode: 'production',
    // optimization:{
    //     minimizer: [
    //         new UglifyJsPlugin({
    //           cache: true,
    //           parallel: true,
    //           sourcMap: true
    //         }),
    //         new OptimizeCssAssetsPlugin({
    //           assetNameRegExp: /\.optimize\.css$/g,
    //           cssProcessor: require('cssnano'),
    //           cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
    //           canPrint: true
    //         }),
    //       ],
    // },
    plugins:[
        new webpack.DefinePlugin({
            IS_DEV:'false'
        }),
        new OptimizeCssAssetsPlugin()
    ],
    devtool: 'cheap-module-eval-source-map', //推荐
})