import { useState, useEffect } from 'react';
import { Table, Button, Popconfirm, message, Space, Tag } from 'antd';
import { getEmployeeList, deleteEmployee } from '../api/employee';
import { EditOutlined, DeleteOutlined, UserAddOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router'; // 假设用react-router做路由跳转

const EmployeeList = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const fetchEmployees = async () => {
        setLoading(true);
        try {
            const res = await getEmployeeList();
            if (res.success) {
                setEmployees(res.data || []);
            } else {
                message.error(res.message);
            }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            message.error(err.message || '获取列表失败');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);
    const handleDelete = async (id: number) => {
        try {
            const res = await deleteEmployee(id);
            if (res.success) {
                message.success('删除成功！');
                fetchEmployees(); 
            } else {
                message.error(res.message);
            }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err:any) {
            message.error(err.message || '删除失败');
        }
    };
    const getStatusTag = (status: string) => {
        switch (status) {
            case 'working':
                return <Tag color="success">在职</Tag>;
            case 'on-leave':
                return <Tag color="warning">休假</Tag>;
            case 'resigned':
                return <Tag color="default">已离职</Tag>;
            default:
                return <Tag>{status}</Tag>;
        }
    };
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: '职位',
            dataIndex: 'position',
            key: 'position',
        },
        {
            title: '薪资',
            dataIndex: 'salary',
            key: 'salary',
            render: (salary: number) => `¥${salary.toLocaleString()}`,
        },
        {
            title: '入职日期',
            dataIndex: 'hireDate',
            key: 'hireDate',
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => getStatusTag(status),
        },
        {
            title: '操作',
            key: 'action',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            render: (_: any, record: Employee) => (
                <Space size="middle">
                    <Button
                        type="link"
                        icon={<EditOutlined />}
                        onClick={() => navigate(`/employees/edit/${record.id}`)} // 跳转到编辑页
                    >
                        编辑
                    </Button>
                    <Popconfirm
                        title="确定要删除该员工吗？"
                        onConfirm={() => handleDelete(record.id!)}
                        okText="确定"
                        cancelText="取消"
                    >
                        <Button type="link" danger icon={<DeleteOutlined />}>
                            删除
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <div style={{ padding: '20px', background: '#fff', borderRadius: 8 }}>
            <div style={{ marginBottom: 20, display: 'flex', justifyContent: 'space-between' }}>
                <h3>员工列表</h3>
                <Button
                    type="primary"
                    icon={<UserAddOutlined />}
                    onClick={() => navigate('/employees/create')} 
                >
                    新增员工
                </Button>
            </div>
            <Table
                columns={columns}
                dataSource={employees}
                rowKey="id"
                loading={loading}
                pagination={{ pageSize: 10 }}
            />
        </div>
    );
};

export default EmployeeList;