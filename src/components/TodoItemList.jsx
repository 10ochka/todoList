import React from "react";
import TodoItem from "./TodoItem";

const TodoItemList = ({todos, remove}) => {
    const cls = "bg-white"
    return !todos.length?
        <div class={`${cls} text-center m-6 text-slate-300`}>
            No todos yet
        </div>
    :
        <div class={cls}>
            { todos.map(
                todo => <TodoItem remove={remove} todo={todo} key={todo.id}></TodoItem>
            )}
        </div>
}
export default TodoItemList