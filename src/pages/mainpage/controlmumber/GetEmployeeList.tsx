import React, { useEffect } from 'react';
import { useState } from 'react';
import { Flex, Space, Table, Tag, Button } from 'antd';
import type { TableProps } from 'antd';
import { data, Link, redirect } from 'react-router';
import { batchDeleteEmployee, getEmployee } from '../../../api/main';
import { deleteMumber as deleteMember } from '../../../api/main';
import { getMember } from '../../../api/main';
import '../../../style/List.css'


interface DataType {
    key: number;
    employeeNo: string;
    name: string;
    email: string;
    phone: string;
    position: string;
    hireDate: string;
    status: string;
    salary: string;
}

interface BackContent {
    data: {
        list: Array<{
            id: number;
            employeeNo: string;
            name: string;
            email: string;
            phone: string;
            position: string;
            hireDate: string;
            status: string;
            salary: string;
        }>
    }
}

const transformData = (response: BackContent): DataType[] => {
    return response.data.list.map(item => ({
        key: item.id,
        employeeNo: item.employeeNo,
        name: item.name,
        email: item.email,
        phone: item.phone,
        position: item.position,
        hireDate: item.hireDate,
        status: item.status,
        salary: item.salary,
    }))
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Employee',
        dataIndex: 'employeeNo',
        key: 'employee'
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone'
    },
    {
        title: 'Position',
        dataIndex: 'position',
        key: 'position'
    },
    {
        title: 'HireDate',
        dataIndex: 'hireDate',
        key: 'hireDate'
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status'
    },
    {
        title: 'Salary',
        dataIndex: 'salary',
        key: 'salary'
    }, {
        title: 'Delete',
        key: 'delete',
        render: (_, record) => {
            const handleDelete = async () => {
                const response = deleteMember(record.key)
                const confirmed = window.confirm('确定要删除吗？')
                if (!confirmed) {
                    return
                }
                if ((await response).status == 200) {
                    window.confirm("删除成功！")
                } else {
                    window.confirm("删除失败！")
                }
                window.location.reload();
            }
            return (
                <Button type="primary" onClick={handleDelete} style={{ width: 50 }}>Del</Button>
            )
        }
    },
    {
        title: 'Detail',
        key: 'detail',
        render: (_, record) => {


            const handleSearch = async () => {
                const response = getMember(record.key)
                if ((await response).status == 200) {
                    const filteredpeo = (await response).data.data
                    console.log(filteredpeo);
                    window.confirm(`
                            id:${filteredpeo.id}
                            employeeNo:${filteredpeo.employeeNo}
                            name:${filteredpeo.name}
                            email:${filteredpeo.email}
                            phone:${filteredpeo.phone}
                            hireDate:${filteredpeo.hireDate}
                            status:${filteredpeo.status}
                            salary:${filteredpeo.salary}
                            `)
                    redirect('/membermenu')
                }
            }
            return (
                <Button type="primary" onClick={handleSearch} style={{ width: 50 }}>查询</Button>
            )
        }
    }
]

const GetAllEmployeeList: React.FC = () => {
    const [tableData, setTableData] = useState<DataType[]>([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const axiosEmployeeData = async () => {
        const response = await getEmployee(1, '', '', 1, 'active', 10, 'id', 'ASC')
        const transformedData = transformData(response.data)
        setTableData(transformedData)
    }
    useEffect(() => {
        axiosEmployeeData();
    }, [])


    const handleBatchDelete = async () => {
        if (selectedRowKeys.length === 0) return;
        const confirmed = window.confirm(`确定删除选中的 ${selectedRowKeys.length} 个员工吗？`);
        console.log(selectedRowKeys);
        if (!confirmed) return;
        const response = await batchDeleteEmployee(selectedRowKeys as number[])
        if (response.status == 200) {
            alert('删除成功')
        }
        setSelectedRowKeys([]);
        axiosEmployeeData();
    };
    const rowSelection: TableProps<DataType>['rowSelection'] = {
        selectedRowKeys,

        onChange: (keys) => setSelectedRowKeys(keys),

    };


    return (
        <div>
            <div className='buttonBox'>
                <Link to='/addmember'><Button type="primary" className='addButton'>添加员工</Button></Link>
                <Button
                    type="primary"
                    onClick={handleBatchDelete}
                    disabled={selectedRowKeys.length === 0}
                    className="batchDelete"
                >批量删除</Button>
            </div>

            <div className='list'>

                <Table<DataType> rowKey="key"
                    rowSelection={rowSelection} columns={columns} dataSource={tableData} 
                    />
            </div>
        </div>

    )
}

export default GetAllEmployeeList