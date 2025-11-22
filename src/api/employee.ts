import request from './request'


export const createEmployee = (employee: Employee): Promise<ApiResponse<Employee>> => {
    return request.post('/employees', employee);
};

export const getEmployeeList = (): Promise<ApiResponse<Employee[]>> => {
    return request.get('/employees');
};

export const getEmployeeDetail = (id: number): Promise<ApiResponse<Employee>> => {
    return request.get(`/employees/${id}`);
};


export const updateEmployee = (id: number, employee: Partial<Employee>): Promise<ApiResponse<Employee>> => {
    return request.put(`/employees/${id}`, employee);
};
export const deleteEmployee = (id: number): Promise<pulicres> => {
    return request.delete(`/employees/${id}`);
};