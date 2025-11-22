import { useState } from "react"
import { Flex, Input,Button } from 'antd';
import { addMumbers } from "../../../api/main"
import '../../../style/addmember.css'

export default function AddMumber() {
    const [employeeNo, setEmployeeNo] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [position, setPosition] = useState('')
    const [salary, setSalary] = useState<number>(0)
    const [hireDate, setHireDate] = useState('')
    const [status, setStatus] = useState('')
    const [departmentId, setDepartmentId] = useState<number>(0)
    const [roleId, setRoleId] = useState<number>(0)

    const handleAdd = async () => {
        const response = addMumbers(employeeNo, name, email, phone, position, salary, hireDate, status, departmentId, roleId)
        if ((await response).status == 201) {
            alert("添加成功")
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
            <Input className="addinput" placeholder="请输入薪水" value={salary} onChange={(e) => setSalary(Number(e.target.value))} />
            <Input className="addinput" placeholder="请输入入职时间" value={hireDate} onChange={(e) => setHireDate(e.target.value)} />
            <Input className="addinput" placeholder="请输入status" value={status} onChange={(e) => setStatus(e.target.value)} />
            <Input className="addinput" placeholder="请输入departmentId" value={departmentId} onChange={(e) => setDepartmentId(Number(e.target.value))} />
            <Input className="addinput" placeholder="请输入roleId" value={roleId} onChange={(e) => setRoleId(Number(e.target.value))} />
            <br />
            <Button type="primary" onClick={handleAdd} className="addbutton">添加</Button>
        </div>

    )
}