import React from 'react';
import { Form, Input, Button, Space, message } from 'antd';
import { useNavigate } from 'react-router';
import { addMumbers } from '../../../api/main';
import '../../../style/addmember.css';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const tailLayout = {
  wrapperCol: { offset: 6, span: 18 },
};

interface FormValues {
  employeeNo: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  salary: string;
  hireDate: string;
  status: string;
  departmentId: string;
  roleId: string;
}

const AddMember: React.FC = () => {
  const [form] = Form.useForm<FormValues>();
  const navigate = useNavigate();

  const onFinish = async (values: FormValues) => {
    try {
      const { salary, departmentId, roleId, ...rest } = values;
      const res = await addMumbers(
        rest.employeeNo,
        rest.name,
        rest.email,
        rest.phone,
        rest.position,
        Number(salary) || 0,
        rest.hireDate,
        rest.status,
        Number(departmentId) || 0,
        Number(roleId) || 0
      );
      if (res.status === 201) {
        message.success('添加成功');
        navigate('/membermenu');
      }
    } catch (err: any) {
      message.error(err?.message || '添加失败');
    }
  };

  const onReset = () => form.resetFields();
  const onBack = () => navigate(-1);

  return (
    <div 
    className='formBox'
    style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px 40px',
        boxSizing: 'border-box',
    }}>
      <h2 style={{
        marginBottom: '16px',
      }}>添加员工</h2>
      <Form {...layout} form={form} name="add-member" 
      size='small'
      layout='horizontal'
      style={{margin:'1px'}}
      onFinish={onFinish}>
        <Form.Item
          label="工号"
          name="employeeNo"
          rules={[{ required: true, message: '请输入工号' }]}
          style={{ margin: '0px' }} 
        >
          <Input placeholder="请输入工号" />
        </Form.Item>

        <Form.Item
          label="姓名"
          name="name"
          rules={[{ required: true, message: '请输入姓名' }]}
          style={{ marginBottom: '8px' }} 
        >
          <Input placeholder="请输入姓名" />
        </Form.Item>

        <Form.Item
          label="邮箱"
          name="email"
          rules={[
            { required: true, message: '请输入邮箱' },
            { type: 'email', message: '邮箱格式不正确' },
          ]}
          style={{ marginBottom: '8px' }} 
        >
          <Input placeholder="请输入邮箱" />
        </Form.Item>

        <Form.Item
          label="电话"
          name="phone"
          rules={[{ required: true, message: '请输入电话' }]}
          style={{ marginBottom: '8px' }} 
        >
          <Input placeholder="请输入电话" />
        </Form.Item>

        <Form.Item
          label="职务"
          name="position"
          rules={[{ required: true, message: '请输入职务' }]}
          style={{ marginBottom: '8px' }} 
        >
          <Input placeholder="请输入职务" />
        </Form.Item>

        <Form.Item
          label="薪水"
          name="salary"
          rules={[{ required: true, message: '请输入薪水' }]}
          style={{ marginBottom: '8px' }} 
        >
          <Input type="number" placeholder="请输入薪水" />
        </Form.Item>

        <Form.Item
          label="入职时间"
          name="hireDate"
          rules={[{ required: true, message: '请输入入职时间' }]}
          style={{ marginBottom: '8px' }} 
        >
          <Input placeholder="例：2023-01-01" />
        </Form.Item>

        <Form.Item
          label="状态"
          name="status"
          rules={[{ required: true, message: '请输入状态' }]}
          style={{ marginBottom: '8px' }} 
        >
          <Input placeholder="请输入状态" />
        </Form.Item>

        <Form.Item
          label="部门 ID"
          name="departmentId"
          rules={[{ required: true, message: '请输入部门 ID' }]}
          style={{ marginBottom: '8px' }} 
        >
          <Input type="number" placeholder="请输入部门 ID" />
        </Form.Item>

        <Form.Item
          label="角色 ID"
          name="roleId"
          rules={[{ required: true, message: '请输入角色 ID' }]}
          style={{ marginBottom: '8px' }} 
        >
          <Input type="number" placeholder="请输入角色 ID" />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              添加
            </Button>
            <Button htmlType="button" onClick={onReset}>
              重置
            </Button>
            <Button htmlType="button" onClick={onBack}>
              返回
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddMember;
