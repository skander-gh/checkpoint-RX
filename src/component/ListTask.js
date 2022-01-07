import React from "react-redux"
import { useSelector } from "react-redux"



function ListTask() {
    const todo_list= useSelector(state => state.todo_list)
    return (
        <div>
           {todo_list.map(el=><h1>{el.Description}</h1>)}  
        </div>
    )
}

export default ListTask
