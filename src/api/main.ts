import { request } from "./request"

export const checkMyself = () => {
    return request.get('/api/auth/me')
}

export const health = () => {
    return request.get('/health')
}

export const addMumbers = (employeeNo: string, name: string, email: string, phone: string, position: string, salary: number, hireDate: string, status: string, departmentId: number, roleId: number) => {
    return request.post('/api/employees', {
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

export const getMember = (id: number) => {
    return request.get(`/api/employees/${id}`)
}

export const deleteMumber = (id: number) => {
    return request.delete(`/api/employees/${id}`)
}

export const batchDeleteEmployee = (ids: number[]) => {
    return request.post('/api/employees/batch-delete', 
        {
            "ids": ids
        }
    )
}

export const getEmployee = (
    page: number,
    limit: string,
    search: string,
    departmentId: number,
    status: 'active' | 'inactive' | 'resigned',
    pageSize: number,
    sortBy: 'id' | 'name' | 'createAt' | 'hireDate',
    sortOrder: 'ASC' | 'DESC',
) => {
    return request.get('/api/employees', {
        params: {
            page,
            limit,search,
            departmentId,
            status,
            pageSize,
            sortBy,
            sortOrder
        }
    })
}