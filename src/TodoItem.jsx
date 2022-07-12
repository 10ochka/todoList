import React, { useState } from "react";
import delIcon from "./icons/delIcon.png"


const TodoItem = ({remove, todo}) => {
    const [done, setDone] = useState(false)
    return (
        <div className="TodoItem" key={todo.id}>
            <input className="DoneCheckbox" type="checkbox" onChange={() => setDone(!done)}></input>
            <div className="TodoText">
            {done
            ? <strike>{todo.body}</strike>
            : todo.body}
            </div>
            <div className="DelIcon">
                <img   onClick={() => {remove(todo); console.log(todo.id)}} src={delIcon} style={{height: 10, width: 10}}></img>
            </div>
        </div>
        
    )
}
export default TodoItem