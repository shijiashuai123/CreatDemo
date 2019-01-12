import axios from 'axios'
import { Message } from 'element-react';

// 创建axios实例
const service = axios.create({
    baseURL: 'http://music.itinga.cn', // api的base_url
    timeout: null               // 请求超时时间
})

// request 拦截器
service.interceptors.request.use(config => {
    // 请求之前要做的事情
    // if (token) {
        //  config.headers['X-Token'] = store.getters.token
        // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    // }
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(response => response, error => {
    console.log('err' + error)
    Message({
        message: error.message,
        type: 'error',
        duration: 1 * 1000
    })
    return Promise.reject(error)
})

export default service
