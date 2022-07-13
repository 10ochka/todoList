import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import AddButton from "./icons/AddButton.png"

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
           
                <Button 
                    className="AddTodoButton" src={AddButton}
                    callback={addNewTodo}
                    style={{height: 20, width: 20}}
                ></Button>
            
            </form>
    )
}
export default Form
