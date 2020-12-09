// webpack 入口文件
// let a=require('./a.js');//commonjs 导入
//es6 zhuan
import $ from 'jquery'
//语法转换插件
// import "@babel/polyfill";
// src/main.js
//动态导入返回的是promise，防止低版本浏览器不支持 需要加上promise补丁
// import "core-js/modules/es.promise";
// import "core-js/modules/es.array.iterator";
// es6 导入
import T from './a.js';
//引入css
import './asses/css/index.css';
//引入less
import './asses/css/ls.less'
//引入sass
import './asses/css/ss.scss'
import './index.html'
//引入bootstrap.css
// import 'bootstrap/dist/css/bootstrap.css' 
class MyTest{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    sum(){
        console.log('你好阿哈哈哈啊哈');
        let str="22222"
        console.log(str.includes('2'))
        return this.a+this.b
    }
}
class Dog{
    name='132456'
}
let x=new MyTest(11,12)
let math=require('./math')
console.log("math: ",math)