import { Link } from "react-router"
import { Button, Flex } from 'antd';
import '../../style/MumberMenu.css'
export default function MemberMenu(){
    return(
        <div className="mumbermenu">
            <Link to='/addmember'> <Button type="primary" className="buttons">添加员工</Button></Link>
            <Link to='/deletemember'><Button type="primary"className="buttons">删除员工</Button></Link>
            <Link to='/deletemany'><Button type="primary"className="buttons">批量删除</Button></Link>
            <Link to='/searchMember'><Button type="primary"className="buttons">查询员工</Button></Link>
            <Link to='/getmember'><Button type="primary"className="buttons">员工详情</Button></Link>
        </div>
    )
}