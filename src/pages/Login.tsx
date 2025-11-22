import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { clickLogin } from "../api/user";
import { Input,Button } from "antd";
import '../style/login.css'

export default function Login(){
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleLogin = async() => {
        const response = clickLogin(email,password)
        if((await response).status == 200){
            alert("登陆成功")
            const token = (await response).data.data.token
            localStorage.setItem('token',token)
            navigate('/menu')
        }
    }
    return(
        <div>
        <h1>登录</h1>
        <Input placeholder="请输入邮箱" value={email} onChange={(e)=>setEmail(e.target.value)} className="logininput"/>
        <Input placeholder="请输入密码" value={password} onChange={(e)=>setPassword(e.target.value)} className="logininput" />

        <Button type="primary" onClick={handleLogin} className="login">登录</Button>
       
        
        <Link to="/register"><Button type="primary" className="login">注册</Button></Link>
        </div>
        
    )
}