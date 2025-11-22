import { useState } from "react"
import { getmumber } from "../../../api/main"
import { redirect } from "react-router"
import { Input,Button } from "antd"

export default function GetMumber(){
    const [id,setId] = useState<number>(0)
    // const [filtered,setFiltered] = useState({})

    const handleSearch = async() => {
        const response = getmumber(id)
        if((await response).status == 200){
            const filteredpeo = (await response).data.data
            // setFiltered(filteredpeo)
            console.log(filteredpeo);
            window.confirm(`
                id:${filteredpeo.id}
                employeeNo:${filteredpeo.employeeNo}
                name:${filteredpeo.name}
                email:${filteredpeo.email}
                phone:${filteredpeo.phone}
                hireDate:${filteredpeo.hireDate}
                status:${filteredpeo.status}
                salary:${filteredpeo.salary}
                `)
            redirect('/mumbermenu')
        }
    }

    return(
        <div>
            <Input className="addinput"  placeholder="请输入员工id" value={id} onChange={(e)=>setId(Number(e.target.value))} />

            <Button type="primary" onClick={handleSearch} className="addbutton">查询</Button>
        </div>

    )
}