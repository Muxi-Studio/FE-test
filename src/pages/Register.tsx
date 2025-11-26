import { useState } from "react"
import { clickRegister, getCode } from "../api/user"
import { useNavigate } from "react-router"
import { Link } from "react-router"
import {Input,Button} from "antd"
import "../style/register.css"
// import { data } from "react-router"


export default function Register(){
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [code,setCode] = useState('')
    const [username,setUsername] = useState('')
    const handleSendCode = async() => {
        const response = getCode(email)
        if((await response).status == 200){
            alert("发送成功")
        }
    }
    const handleRegister = async() => {
        const response = clickRegister(email,password,username,code)
        if((await response).status == 201){
            alert("注册成功！")
            navigate('/login')
        }else if((await response).status == 400){
            console.log((await response).statusText);
            
        }
    }

    return(
        <div>
        <h1>注册</h1>
        <Input placeholder="请输入邮箱" value={email} onChange={(e)=>setEmail(e.target.value)} className="logininput"/>
        <Input placeholder="请输入用户名" value={username} onChange={(e)=>setUsername(e.target.value)} className="logininput"/>
        <Input placeholder="请输入密码" value={password} onChange={(e)=>setPassword(e.target.value)}className="logininput"/>
        <Input placeholder="请输入验证码" value={code} onChange={(e)=>setCode(e.target.value)}className="logininput"/>
        {/* <input type="email" placeholder="请输入邮箱" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder="请输入用户名" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type="text" placeholder="请输入密码" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <input type="text" placeholder="请输入验证码" value={code} onChange={(e)=>setCode(e.target.value)}/> */}
        <Button type="primary" onClick={handleSendCode} className="getcode">获取验证码</Button><br />

        <Button type="primary" onClick={handleRegister} className="register">注册</Button>
        
     
        <Link to='/login'><Button type="primary" className="register">返回登陆</Button></Link>
        </div>
    )
}