import { useState } from "react"
import { Flex, Input,Button } from 'antd';
import { addMumbers } from "../../../api/main"
import '../../../style/addmember.css'
import { useNavigate } from "react-router";

export default function AddMumber() {
    const [employeeNo, setEmployeeNo] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [position, setPosition] = useState('')
    const [salary, setSalary] = useState('')
    const [hireDate, setHireDate] = useState('')
    const [status, setStatus] = useState('')
    const [departmentId, setDepartmentId] = useState('')
    const [roleId, setRoleId] = useState('')
    const navigate = useNavigate()

    const handleAdd = async () => {
         const salaryNum = salary ? Number(salary) : 0
        const departmentIdNum = departmentId ? Number(departmentId) : 0
        const roleIdNum = roleId ? Number(roleId) : 0
        const response = addMumbers(employeeNo, name, email, phone, position, salaryNum, hireDate, status, departmentIdNum, roleIdNum)
        if ((await response).status == 201) {
            alert("添加成功")
            navigate('/membermenu')
        }
    }

    return (
        <div className="addbox">
            <h2>添加员工</h2>
            <Input className="addinput"  placeholder="请输入工号" value={employeeNo} onChange={(e) => setEmployeeNo(e.target.value)} />
            <Input className="addinput" placeholder="请输入姓名" value={name} onChange={(e) => setName(e.target.value)} />
            <Input className="addinput" placeholder="请输入邮箱" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input className="addinput" placeholder="请输入电话" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <Input className="addinput" placeholder="请输入职务" value={position} onChange={(e) => setPosition(e.target.value)} />
            <Input className="addinput" placeholder="请输入薪水" value={salary} onChange={(e) => setSalary(e.target.value)} />
            <Input className="addinput" placeholder="请输入入职时间" value={hireDate} onChange={(e) => setHireDate(e.target.value)} />
            <Input className="addinput" placeholder="请输入status" value={status} onChange={(e) => setStatus(e.target.value)} />
            <Input className="addinput" placeholder="请输入departmentId" value={departmentId} onChange={(e) => setDepartmentId(e.target.value)} />
            <Input className="addinput" placeholder="请输入roleId" value={roleId} onChange={(e) => setRoleId(e.target.value)} />
            <br />
            <Button type="primary" onClick={handleAdd} className="addbutton">添加</Button>
        </div>

    )
}