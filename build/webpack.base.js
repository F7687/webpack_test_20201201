const path = require('path');
const webpack =require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //html插件
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin'); //打包时候清除dist文件夹
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const fs = require('fs');
// async function print(path) {
//     const dir = await fs.promises.opendir(path);
//     for await (const dirent of dir) {
//       console.log(dirent.name);
//     }
//   }
//   print('./').catch(console.error);
//webpack 配置文件默认遵循commonJS规范
module.exports = {
    // entry: './src/main.js', //入口文件
    entry: {
        index: './src/main.js',
        other: './src/other.js'
    },
    optimization:{
        splitChunks:{
            chunks:'all'
        }
    },
    output: { //输出目录必须是绝对路劲
        //path.resolve解析当前相对路劲的觉得路劲
        path: path.resolve('./dist'),
        // filename: 'bundle.js',
        filename: '[name].js', //多入口需要对应多出口，[name].js
        // publicPath:'../dist/'
    },
    // 打包模式，development：开发环境，默认是生产环境
    // mode: 'development',
    // mode: 'production',  再dev，pro模式中单独配置
    watch: false, //是否开启监视模式
    // "dev": "webpack-dev-server  --compress --hot --port 7687 --open --contentBase src"
    // devServer: {
    //     // open:true,//自动打开浏览器
    //     port: 7687, //端口
    //     compress: true, //开启gzp压缩
    //     hot: true, //热更新
    //     // contentBase:'src',//改变入口index.html 所在目录
    // },

    // 插件配置
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', //存在内存中
            template: './src/index.html', //目录下的html
            chunks: ['index','other'] //index.html 文件引入的js
        }),
        new HtmlWebpackPlugin({
            filename: 'other.html', //存在内存中
            template: './src/other.html', //目录下的html
            chunks: ['other'] //other.html 文件引入的js
        }),
        new CleanWebpackPlugin(),
        // new webpack.ProvidePlugin({//jQuery注入到全局
        //     $:'jquery',
        //     jQuery:'jquery'
        // }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        //loader用于对模块的源代码进行转换
        rules: [{
                test: /\.html$/,
                loader: 'html-withimg-loader'
            },
            // {
            //     test: /\.css$/,
            //     exclude: /node_modules/, // 排除node_modules文件夹
            //     use: ['style-loader', 'css-loader'], //从右到左解析
            // },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader'],
              },
            {
                test: /\.less$/,
                exclude: /node_modules/, // 排除node_modules文件夹
                use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader', 'less-loader'],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/, // 排除node_modules文件夹
                use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader', 'sass-loader'],
            },

            {
                test: /\.(png|jpg|gif|jpeg)$/,
                exclude: /node_modules/, // 排除node_modules文件夹.
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        outputPath: 'images',
                        esModule: false, //很重要，否则<img ur="[object Module]">依然无法显示图片
                        name: '[name][hash:4].[ext]'
                    }
                }]

            },
            {
                test: /\.(woff|wof2|eot|svg|ttf)$/,
                use: 'file-loader',
            },
            // 'transform-runtime' 插件告诉 babel 要引用 runtime 来代替注入。
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            // {
            //     test: require.resolve('jquery'), //require.resolve 用于解析JQuery的绝对路径
            //     loader: 'expose-loader',
            //     options: {
            //         exposes: ['$', 'jQuery']
            //     }

            // }
        ]
    }
}