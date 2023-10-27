import axios, { ResponseType } from 'axios';
import { ElMessage } from 'element-plus'

/*
 * 创建实例
 * 与后端服务通信
 */
const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 10000, //指定请求超时的毫秒数
    withCredentials: false, //表示跨域请求时是否需要使用凭证
});

/**
 * 请求拦截器
 * 功能：配置请求头
 */
service.interceptors.request.use(
    (config) => {
        const token = '222';
        config.headers.authorization = 'Bearer ' + token;
        return config;
    },
    (error) => {
        console.error('网络错误，请稍后重试');
        return Promise.reject(error);
    },
);

/**
 * 响应拦截器
 * 功能：处理异常
 */
service.interceptors.response.use(
    (response) => {
        const res = response.data;
        if (res.code && res.code != 200) {
            ElMessage({
                message: res.message || res.msg || '请求错误，请稍后重试',
                type: 'error',
                duration: 3 * 1000,
            })
        }
        return res;
    },
    (error) => {
        ElMessage({
            message: error.msg || error.message || '系统错误',
            type: 'error',
            duration: 3 * 1000,
        })
        return Promise.reject(error);
    },
);

interface requestType {
    url: string;
    method: string;
    data?: any;
    params?: any;
    responseType?: ResponseType;
}

/**
 * 封装接口请求方法
 * @param url 域名后需补齐的接口地址
 * @param method 接口请求方式
 * @param data data下的其他数据体
 * @param responseType 接口响应数据类型
 */
const request = (url: string, method: string, data: object, responseType?: ResponseType) => {
    let res: requestType = {
        url,
        method,
    }
    if (method == 'get') {
        res.params = data
    } else {
        res.data = data
    }

    if (responseType) {
        res.responseType = responseType
    }
    return service(res)
}

export default request
