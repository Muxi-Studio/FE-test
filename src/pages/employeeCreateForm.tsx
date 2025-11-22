import { useState } from 'react';
import { Form, Input, InputNumber,  Select,DatePicker, Button, message } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { createEmployee } from '../api/employee';
const { Option } = Select;
const { DatePicker: SingleDatePicker } = DatePicker;

const EmployeeCreateForm = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (values: Employee) => {
        setLoading(true);
        try {
            const submitData = {
                ...values,
            };

            const res = await createEmployee(submitData);
            if (res.success) {
                message.success('员工创建成功！');
                form.resetFields(); 
            } else {
                message.error(`创建失败：${res.message}`);
            }
        } catch (err: any) {
            message.error(`请求失败：${err.message || '网络异常'}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px', background: '#fff', borderRadius: 8 }}>
            <h3 style={{ marginBottom: 20 }}>
                <UserAddOutlined /> 新增员工
            </h3>
            <Form
                form={form}
                layout="vertical"  
                onFinish={handleSubmit}
                initialValues={{
                    status: 'working',
                    departmentId: 1,
                    roleId: 1,
                }}
            >
                <Form.Item
                    label="姓名"
                    name="name"
                    rules={[{ required: true, message: '请输入姓名' }]}
                >
                    <Input placeholder="请输入姓名" />
                </Form.Item>

                <Form.Item
                    label="邮箱"
                    name="email"
                    rules={[{ required: true, type: 'email', message: '请输入正确的邮箱' }]}
                >
                    <Input placeholder="请输入邮箱" />
                </Form.Item>

                <Form.Item
                    label="电话"
                    name="phone"
                    rules={[{ required: true, message: '请输入电话' }]}
                >
                    <Input placeholder="请输入电话" />
                </Form.Item>

                <Form.Item
                    label="职位"
                    name="position"
                    rules={[{ required: true, message: '请输入职位' }]}
                >
                    <Input placeholder="请输入职位" />
                </Form.Item>

                <Form.Item
                    label="薪资"
                    name="salary"
                    rules={[{ required: true, message: '请输入薪资' }]}
                >
                    <InputNumber min={0} style={{ width: '100%' }} placeholder="请输入薪资" />
                </Form.Item>

                <Form.Item
                    label="入职日期"
                    name="hireDate"
                    rules={[{ required: true, message: '请选择入职日期' }]}
                >
                    <SingleDatePicker format="YYYY-MM-DD" style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    label="员工状态"
                    name="status"
                    rules={[{ required: true, message: '请选择状态' }]}
                >
                    <Select placeholder="请选择状态">
                        <Option value="working">在职</Option>
                        <Option value="on-leave">休假</Option>
                        <Option value="resigned">已离职</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="部门ID"
                    name="departmentId"
                    rules={[{ required: true, message: '请选择部门' }]}
                >
                    <Select placeholder="请选择部门">
                        <Option value={1}>技术部</Option>
                        <Option value={2}>产品部</Option>
                        <Option value={3}>人事部</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="角色ID"
                    name="roleId"
                    rules={[{ required: true, message: '请选择角色' }]}
                >
                    <Select placeholder="请选择角色">
                        <Option value={1}>普通员工</Option>
                        <Option value={2}>主管</Option>
                        <Option value={3}>经理</Option>
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading} block>
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default EmployeeCreateForm;