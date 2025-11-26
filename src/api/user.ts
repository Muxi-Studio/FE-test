import { request } from "./request"

export const getCode = (email:string) => {
    return request.post('/api/auth/send-verification-code',{
        email:email
        // type:"register"
    })
}

export const clickRegister = (email:string,password:string,username:string,verificationCode:string) => {
    return request.post('/api/auth/register',{
        email,
        password,
        username,
        verificationCode
    })
}

export const clickLogin = (email:string,password:string) => {
    return request.post('/api/auth/login',{
        email,
        password
    })
}