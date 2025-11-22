import { request } from "./request"

export const checkMyself = () => {
    return request.get('/api/auth/me')
}

export const health = () => {
    return request.get('/health')
}

export const addMumbers = (employeeNo:string,name:string,email:string,phone:string,position:string,salary:number,hireDate:string,status:string,departmentId:number,roleId:number) => {
    return request.post('/api/employees',{
        employeeNo,
        name,
        email,
        phone,
        position,
        salary,
        hireDate,
        status,
        departmentId,
        roleId
    })
}

export const getmumber = (id:number) => {
    return request.get(`/api/employees/${id}`)
}

export const deleteMumber = (id:number) => {
    return request.delete(`/api/employees/${id}`)
}

export const deleteMany = (id:number[]) => {
    return request.post('/api/employees/batch-delete',{
        id:id
    })
}