import axios from "axios"
const service = axios.create({
    baseURL: 'http://101.36.123.45:3000',
    timeout: 10000,
})
service.interceptors.request.use(
    (config) => {
        const token=localStorage.getItem("my_token")
        if(token){
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)
service.interceptors.response.use(
    res => { return res.data },
    err => {
        return Promise.reject(err);
    }
)
export default service