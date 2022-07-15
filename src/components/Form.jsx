import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import AddButton from "../icons/AddButton.png"

const Form = ({cls, create}) => {
    const [todo, setTodo] = useState({body: "", done: false})
    const addNewTodo = (e) => {
        e.preventDefault()
        const newTodo = {...todo, id: Date.now()}
        create(newTodo)
        setTodo({body: "", done: false})
        
    }
    return (

            <form class={cls}>
            <Input cls="bg-white w-32 border-2 rounded mr-2"
            value={todo.body} 
            placeholder=" Add new todo"
            callback={e => setTodo({...todo, body: e.target.value})}/>
      
                <Button cls="bg-white self-center"
                     src={AddButton}
                    callback={addNewTodo}
                    style={{height: 20, width: 20}}
                ></Button>
            
            </form>
    )
}
export default Form