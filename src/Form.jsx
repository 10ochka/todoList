import React, { useState } from "react";
import Input from "./Input";
const Form = ({create}) => {
    const [todo, setTodo] = useState({body: "", done: false})
    const addNewTodo = (e) => {
        e.preventDefault()
        const newTodo = {...todo, id: Date.now()}
        create(newTodo)
        setTodo({body: "", done: false})
        
    }
    return (

            <form className="Form">
            <Input 
            value={todo.body} 
            placeholder=" Add new todo"
            onChange={e => setTodo({...todo, body: e.target.value})}/>
            <button className="AddTodoButton" onClick={addNewTodo}>+</button>
            </form>

        
    )
}
export default Form