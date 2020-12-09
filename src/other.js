let arr=[1,2,32,54,5,6]
console.log('******************',...arr)
console.log(()=>{})
import {getUserInfo,getIpInfo} from './apt/http.js'
// import './asses/css/other.css'
// 动态导入
import('jquery').then(({default:$})=>{
    console.log('动态导入jQuery',$);
    
})
function getJquery(){
    return import('jquery').then(({default:$})=>{
        console.log('动态导入jQuery',$);
        return $
    })
}
getJquery().then((res)=>{
    console.log('resssssss:',res)
})


// let time=''
// let endTiem=''
// // for(let i=0;i<300;i++){
// //     if(i==0){
// //         time=new Date().getTime()
// //     }
// //     getUserInfo().then((res)=>{
// //         console.log(`请求成功，第${i+1}次请求：`,res)
// //         if(i==299)endTiem=new Date().getTime()
// //     }).catch((err)=>{
       
// //         console.error(`第${i+1}次，请求失败:`,err)
// //     })
// // }
// getUserInfo().then((res)=>{
//         console.log(`请求成功：`,res)
        
//     }).catch((err)=>{
       
//         console.error(`请求失败:`,err)
//     })
//     getIpInfo().then(res=>{
//         console.log('----------------');
//         console.log('Ip:',res)
//     }).catch(err=>{
//         console.error('错误',err)
//     })

    
// console.log(`执行完毕，耗时：${endTiem-time}`)