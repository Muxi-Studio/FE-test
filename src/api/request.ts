import axios, { type AxiosRequestConfig, type InternalAxiosRequestConfig } from "axios";
import { redirect } from "react-router";

const instance = axios.create({
    baseURL:'http://101.36.123.45:3000',
    timeout:10000
})

instance.interceptors.request.use(
    (config:InternalAxiosRequestConfig)=>{
        const token = localStorage.getItem('token');
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (Response)=>Response,
    (error)=>{
        const status = error?.response?.status
        if(status == 401){
            alert('登录失效')
            localStorage.removeItem('token')
            redirect('/')
        }
        return Promise.reject(error)
    }
)

export const request={
    get:(url:string,config?:AxiosRequestConfig)=>instance({
        method:"GET",
        url,
        data:undefined,
        ...config
    }),
    post:(url:string,data:object,config?:AxiosRequestConfig)=>instance({
        method:"POST",
        url,
        data,
        ...config
    }),
    put:(url:string,data:object,config?:AxiosRequestConfig)=>instance({
        method:"PUT",
        url,
        data,
        ...config
    }),
    delete:(url:string,config?:AxiosRequestConfig)=>instance({
        method:"DELETE",
        url,
        data:undefined,
        ...config
    })
}