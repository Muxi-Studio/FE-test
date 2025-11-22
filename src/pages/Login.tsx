import React, {  useState, type ChangeEvent } from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input,message } from 'antd';
import { useNavigate } from 'react-router';
import { loginApi } from '../api/Login';
import { Link } from 'react-router';
type FieldType = {
    email?: string;
    password?: string;
    remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const Login: React.FC = function(){
    const [email,setemail]=useState('')
    const [userPassword,setUserpassword]=useState('')
    const navigate=useNavigate()
    const handleLogin = async() => {
           
            if (!email.trim() || !userPassword.trim()) {
                message.error("请填写完整信息")
                return
            }
            const response: LoginApires = await loginApi(
                {
                    email: email,
                    password: userPassword
                }
            )
            const { success, message: msg, data } = response
            if (success !== true) {
                message.error(msg || "登录失败")
                return
            }
            const token = data?.token
            if (token) {
                localStorage.setItem("my_token", token)
                message.success("登录成功")
                navigate("/")
            } else {
                message.error("登录失败，未返回 token")
            }
}
    return(
    <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item<FieldType>
            label="email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
        >
            <Input onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setemail(e.target.value) }/>
        </Form.Item>

        <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
                <Input.Password onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setUserpassword(e.target.value)} />
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
            <Button type="primary" htmlType="submit" onClick={handleLogin}>
                登录
            </Button>
                <div> 还没有账户<Link to="/register">注册</Link>一个</div>
        </Form.Item>
    </Form>
)};

export default Login;