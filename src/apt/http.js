let host = ''
if(!IS_DEV){
    host='https://marketouchplus-uat.brandmax.com.cn'
    // host='https://webim.tim.qq.com/v4/group_open_http_svc/apply_join_group?websdkappid=537048168&v=1.7.3&platform=10&a2=1a6f7e8c18d374888132a10bc64e3e9d326014252d4058fd45b02ebfbddcab91a7ef49aa3606537539c294c7ae8e51c40757436611208ad2454d3a48d1c3ace5a3bd0f705eafe56d&tinyid=144115231543280125&sdkappid=1400017628&contentType=json&accounttype=94751135'
}
let url =host+'/rest/employee/user/app/doLogin'
// let url ='https://webim.tim.qq.com/v4/group_open_http_svc/apply_join_group?websdkappid=537048168&v=1.7.3&platform=10&a2=1a6f7e8c18d374888132a10bc64e3e9d326014252d4058fd45b02ebfbddcab91a7ef49aa3606537539c294c7ae8e51c40757436611208ad2454d3a48d1c3ace5a3bd0f705eafe56d&tinyid=144115231543280125&sdkappid=1400017628&contentType=json&accounttype=94751135'

import axios from 'axios'
axios.defaults.withCredentials = true;
axios.defaults.headers.post['X-Forwarded-For']='192.168.37.1,168.155.3.101,182.51.177.4'
axios.defaults.headers.get['X-Forwarded-For']='192.168.37.1,168.155.3.101,182.51.177.4'
axios.defaults.headers.post['X-Real-IP']='192.168.37.1'
axios.defaults.headers.get['X-Real-IP']='192.168.37.1'
// axios.defaults.headers.get['Referer']='https://www.ip.cn/'
// axios.defaults.headers.get['cookie']='__cfduid=d3e53ce60d117e57d2aabc0693c8e315b1604904003; INIT_IP_INFO=%E4%B8%AD%E5%9B%BD++%E5%B9%BF%E4%B8%9C%E7%9C%81+%E5%B9%BF%E5%B7%9E%E5%B8%82+%E7%94%B5%E4%BF%A1'  
//设置axios为form-data
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.transformRequest = [function (data) {
//     let ret = ''
//     for (let it in data) {
//       ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//     }
//     console.log('ret:',ret)
//     return '{"GroupId":"@TGS#aVQAEFZGF"}'
// }]
// 网易问卷 
export const getUserInfo = () => {
    // 发送 POST 请求
    return axios({
        method: 'post',
        url,
        data: {"admin":"11"}
    });
}
export const getIpInfo=()=>{
    return axios({
        method:'get',
        url:'/web/receiver/view/survey_recycle/visit?surveyId=127142&surveyUserId=&',
        data:''
    })
}