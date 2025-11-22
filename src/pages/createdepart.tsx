import { Button,Form, Input, Card,message,notification} from 'antd';
import { useState,useEffect, } from 'react';
import { createDepartApi } from '../api/Login';
import { useNavigate } from 'react-router';
const {Item}=Form
 export default function Createdepart(){
     const [form] = Form.useForm()
    const [loading,setLoading]=useState(false)
    // const [formdata,setFormdata]=useState({
    //     name: '',
    //     code: '',
    //     description: '',
    //     managerId: ''
    // })
    const navigate=useNavigate()
     useEffect(() => {
         if (!localStorage.getItem("token")) {
             navigate("/login")
         }
     }, [navigate])

    const handleCreate=async(values:departreq)=>{
            setLoading(true)
            const hide = message.loading({ content: '正在创建中...' })
            try {
                const res = await createDepartApi(values)
                if (res.success===true) {
                    message.success({ content: res.message || '创建成功' })
                    notification.success({
                        message: '创建成功',
                        description: '已创建成功'
                    })
                    form.resetFields()
                } else {
                    message.error({ content: res?.message || '创建失败' })
                }
            } catch (err) {
                console.error('请求接口失败', err)
                message.error({ content: '网络异常，稍后再试' })
            } finally {
                setLoading(false)
                hide()
            }
        }
    return(
        <Card style={{ maxWidth: 720, margin: '24px auto' }}>
            <h2 >创建部门</h2>
            <Form
                form={form}
                layout="vertical"
                onFinish={handleCreate}
                initialValues={{ borrowed: false }}
            >
                <Item
                    name="name"
                    label="部门名称"
                    rules={[{ required: true, message: '请输入部门名称' }]}
                >
                    <Input placeholder="请输入部门名称" />
                </Item>
                <Item
                    name="code"
                    label="部门编码"
                    rules={[{ required: true, message: '请输入部门编码' }]}                  >
                    <Input placeholder="请输入部门编码" />
                </Item>

                <Item
                    name="description"
                    label="职能描述"
                    rules={[{ required: true, message: '请输入部门职能' }]}
                >
                    <Input placeholder="请输入部门职能" />
                </Item>

                <Item
                    name="managerId"
                    label="部门ID"
                    rules={[{ required: true, message: '请输入部门ID' }]}
                >
                    <Input placeholder="请输入部门ID" />
                </Item>

                <Item>
                    <Button type="primary" htmlType="submit"  loading={loading}>
                        确认创建
                    </Button>
                </Item>
            </Form>
        </Card>
    )
}