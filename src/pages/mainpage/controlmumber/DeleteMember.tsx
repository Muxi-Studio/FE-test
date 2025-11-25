import { useState } from "react"
import { deleteMumber } from "../../../api/main"
import { Input,Button } from "antd"
import "../../../style/deletemumber.css"


export default function DeleteMumber(){
    const [id,setId] = useState<number>(0)

    const handleDelete = async() => {
        const response = deleteMumber(id)
        if((await response).status == 200){
            window.confirm("删除成功！")
        }else{
            window.confirm("删除失败！")
        }
    }

    return(
        <div>
            <h1>删除</h1>
            <Input placeholder="输入要删除的id" value={id} onChange={(e)=>setId(Number(e.target.value))} />
             <Button type="primary" onClick={handleDelete} className="deletebutton">删除</Button>
        </div>
    )
}