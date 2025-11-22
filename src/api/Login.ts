import request from './request'
export const loginApi = async (data: LoginApireq): Promise<LoginApires> => {
    return request(
        {
            url: '/api/auth/login',
            method: 'POST',
            data
        }
    )
}
export const createDepartApi = async (data: departreq):Promise<pulicres> =>{
    return request(
        {
            url:'/api/departments',
            method:'POST',
            data
        }
    )
}
