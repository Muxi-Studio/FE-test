import React, { useState , type ChangeEvent} from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import {  useNavigate } from 'react-router';

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const Register: React.FC = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [verificationCode, setVerificationCode]=useState('')
    const [disabled,setDisabled]=useState(false)
    const [countdown,setCountdown]=useState(0)
    const navigate=useNavigate()
    const handleVer=async()=>{
        if (!(name && email && password ))
        {
            alert("请输入完整信息")
        }
        else{
            try {
                const response = await fetch('http://101.36.123.45:3000/api/auth/send-verification-code', {
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: email,
                            // type:resister
                        })
                    })
                    const data = await response.json()
                    if (response.ok) {
                        setCountdown(10)
                        alert('已发送验证码')
                        setDisabled(true)
                        const timer = setInterval(() => {
                            setCountdown(prev => {
                                if (prev <= 1) {
                                    clearInterval(timer)
                                    setDisabled(false)
                                    return 0
                                } else {
                                    return prev - 1
                                }
                            })
                        }, 1000);
                    } else {
                        alert(`发送失败：${data.message || '请稍后重试'}`);
                    }
                } catch (error) {
                    console.error('Error:', error)
                    window.confirm('发送验证码时出现错误')
                }
            }
        }
    const handleRegister = async () => {
        try {
            const response = await fetch('http://101.36.123.45:3000/api/auth/register', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    username: name,
                    verificationCode:verificationCode
                })
            })
            const data = await response.json()

            if (response.ok) {
                alert(`${data.message}`)
                navigate('/login')
            } else {
                alert(`${data.massage}`)
            }
        } catch (error) {
            console.log('Error:', error);
            alert('网络错误，注册失败');
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
        <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter email!' }]}
        >
            <Input placeholder="Please enter email" onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                setEmail(e.target.value)
            }} />
                <Button onClick={handleVer} disabled={disabled}>{countdown===0?"获取验证码":`${countdown}s后重新获取`}</Button>
                <Input placeholder='验证码为' onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setVerificationCode(e.target.value)
                }}/>
        </Form.Item>
        <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
            <Input.Password onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)} placeholder='密码至少为8个字符，且必须包含数字和字母' />
        </Form.Item>
        <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input  onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                setName(e.target.value)
            }}/>
        </Form.Item>

 

        <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
            <Checkbox>Remember me</Checkbox>
        </Form.Item>
            <Button onClick={handleRegister}>注册</Button>
    </Form>
    );
}

export default Register;
