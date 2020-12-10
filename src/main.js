// webpack 入口文件
// let a=require('./a.js');//commonjs 导入
//es6 zhuan
// window.Promise = Promise
//         function isIE() {
//    			 if (!!window.ActiveXObject || "ActiveXObject" in window) {
//       			  return true;
//     		} else {
//         		return false;
//     	}
// 	}
// if (isIE()) {
//     var script = document.createElement('script');
//     script.type = 'text/javaScript';
//      script.src = 'http://cdn.jsdelivr.net/bluebird/3.5.0/bluebird.min.js';  // bluebird 文件地址
//     document.getElementsByTagName('head')[0].appendChild(script);
// }

//语法转换插件
// import "@babel/polyfill";
// src/main.js
//动态导入返回的是promise，防止低版本浏览器不支持 需要加上promise补丁
// import "core-js/modules/es.promise";
// import "core-js/modules/es.array.iterator";
// es6 导入
//引入css
import './asses/css/index.css';
//引入less
import './asses/css/ls.less'
//引入sass
import './asses/css/ss.scss'
// import './index.html'
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

console.log("math: ",MyTest)