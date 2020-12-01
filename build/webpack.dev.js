const { merge } = require('webpack-merge');//用来合并配置文件
const baseConfig=require('./webpack.base')
const webpack=require('webpack')
//webpack 配置文件默认遵循commonJS规范
module.exports =merge(baseConfig,{
    
    mode: 'development',
    devServer: {
        // open:true,//自动打开浏览器
        port: 10002, //端口
        
        compress: true, //开启gzp压缩
        hot: true, //热更新
        proxy:{
            //当前端请求/rest 地址时候，会将请求转发
            "/rest": {
                target: "https://marketouchplus-uat.brandmax.com.cn",
                secure: false,//是否支持https
              },
              "/api": {
                target: "https://www.ip.cn/",
                secure: false,//是否支持https
              },
              "/web/receiver":{
                target: "https://survey.163.com",
                secure: false,//是否支持https
                
              }
        }
        
        // contentBase:'src',//改变入口index.html 所在目录
    },
    plugins:[
        new webpack.DefinePlugin({
            IS_DEV:'true'
        })
    ],
    devtool: 'cheap-module-eval-source-map', //推荐
}) 