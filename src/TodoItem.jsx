import React, { useState } from "react";
import Button from "./Button";
import DelIcon from "./icons/DelIcon.png";
import EditIcon from "./icons/EditIcon.png"


const TodoItem = ({remove, todo}) => {
    const [done, setDone] = useState(false)
    const [editig, setEditing] = useState(false)
    const editTodo = e => {
        e.preventDefault()
        todo.body = e.target.value
    }
    return (
        <div className="TodoItem" key={todo.id}>
            <input className="DoneCheckbox" type="checkbox" onChange={() => setDone(!done)}></input>
            <div className="TodoText">
                {editig
                 ? <textarea wrap="soft" className="EditTodoField" onChange={editTodo} defaultValue={todo.body}></textarea>
                 : done
                 ? <strike>{todo.body}</strike>
                 : todo.body
                 }
            </div>

            <Button 
                callback={() => setEditing(!editig)} 
                className="EditButton" src={EditIcon}
                style={{height: 13, width: 13}}
            ></Button>
            <Button 
                callback={() => remove(todo)} 
                className="DelButton" src={DelIcon} 
                style={{height: 10, width: 10}}
            ></Button>

        </div>
        
    )
}
export default TodoItem
