import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import AddButton from "../icons/AddButton.png"
import { useDispatch } from "react-redux";
import { addTodo } from "../Reducers/TodoReducer";


const Form = ( { cls, create } ) => {

    const dispatch = useDispatch()
    const [ todo, setTodo ] = useState({})
    const addNewTodo = e => {
        e.preventDefault()
        dispatch( addTodo( { ...todo, id: Date.now() } ) )
        setTodo({})
    }

    return (
            <form class={ cls } >
                <Input 
                    cls=" todo-bg w-32 border-2 rounded mr-2 "
                    value={ todo.body } 
                    placeholder=" Add new todo "
                    callback={ e => setTodo(  { ...todo, body: e.target.value } ) }
                />
                <Button 
                    cls=" bg-white self-center h-5 w-5" 
                    src={ AddButton } 
                    callback={ addNewTodo }
                ></Button>
            </form>
    )
}

export default Form