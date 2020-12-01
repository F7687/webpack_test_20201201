// webpack 入口文件
// let a=require('./a.js');//commonjs 导入
//es6 zhuan
import $ from 'jquery'
import "@babel/polyfill";
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