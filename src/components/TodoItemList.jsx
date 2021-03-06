import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";


const TodoItemList = ( { cls } ) => { 

    const todos = useSelector( ( state ) => state.TodoReducer.value )
    
    return todos.length
    ? <div class={ cls } >
        { todos.map( todo => 
            <TodoItem cls=" bg-gray-200 flex flex-row m-2 rounded " todo={ { ...todo } } key={ todo.id } />
        )}
    </div>
    : <div class=" todo-bg todo-text m-6 text-slate-300 " > No todos yet </div>
}

export default TodoItemList