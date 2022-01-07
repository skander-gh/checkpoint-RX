
import { useDispatch } from "react-redux"
import React,{ useState } from "react"
import { addTodo } from "../redux/actions"

function Addtask() {
     const  dispatch = useDispatch()
     const [ajouterr,setajouterr]=useState("")

    return (
        <div>
            <input type="text" placeholder="You text here" onChange={(e)=>setajouterr(e.target.value)} />
            <button onClick={()=>dispatch(addTodo({id:Math.random(),Description:ajouterr,Done:false}))} variant="outline-primary" >Add</button>
        </div>
    )
}

export default Addtask
