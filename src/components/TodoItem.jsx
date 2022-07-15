import React, { useState } from "react";
import Button from "./Button";
import DelIcon from "../icons/DelIcon.png";
import EditIcon from "../icons/EditIcon.png"


const TodoItem = ({remove, todo}) => {
    const [done, setDone] = useState(false)
    const [editig, setEditing] = useState(false)
    const editTodo = e => {
        e.preventDefault()
        todo.body = e.target.value
    }
    const decoration = done? "line-through" : ""
    return (
        <div class="bg-gray-200 flex flex-row m-2 rounded" key={todo.id}>
            <input class="flex-none ml-2" type="checkbox" onChange={() => setDone(!done)}></input>
            {/* <div class="bg-gray-200 flex-1 m-2 break-all" > */}
                {editig
                 ? <textarea class="flex-1 m-2 bg-gray-300 w-36" wrap="soft" onChange={editTodo} defaultValue={todo.body}></textarea>
                 : 
                 <div class={`${decoration} flex-1 m-2 break-all bg-gray-200 w-36 max-h-max`} >{todo.body}</div>
                 }
            {/* </div> */}

            <Button cls="bg-gray-200 self-center flex-none ml-2"
                callback={() => setEditing(!editig)} 
                src={EditIcon}
                style={{height: 13, width: 13}}
            ></Button>
            <Button 
                callback={() => remove(todo)} 
                src={DelIcon} 
                style={{height: 10, width: 10}}
                cls="bg-gray-200 self-center flex-none m-2"
            ></Button>

        </div>
        
    )
}
export default TodoItem