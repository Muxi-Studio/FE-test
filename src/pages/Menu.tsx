import { Link } from "react-router"
import { checkMyself, health } from "../api/main"
import '../style/menu.css'
import { Button } from "antd"

export default function Menu() {
    const authMe = async () => {
        const response = checkMyself()

        if ((await response).status == 200) {
            window.confirm(`
                id: ${(await response).data.data.id}                  
                email: ${(await response).data.data.email}
                username: ${(await response).data.data.username}
                isVerified: ${(await response).data.data.isVerified}
                role: ${(await response).data.data.role}
                `)
            // window.confirm(`` )
        }
    }

    const checkHealth = async() => {
        const response = health()
        if((await response).status == 200){
            window.confirm("牌煤油问题")
        }

    }

    return (
        <div className="menuBox">
            <Button type="primary"  onClick={()=>alert("这个没写")} className="mybutton">部门管理</Button>
            <Link to='/membermenu'> <Button type="primary" className="mybutton">员工管理</Button></Link>
            <Button type="primary" onClick={checkHealth} className="mybutton">我要烟牌</Button>
            <Button type="primary" onClick={authMe} className="mybutton">查询信息</Button>
            {/* <button className="mybutton">部门管理</button> */}
           

        </div>
    )
}