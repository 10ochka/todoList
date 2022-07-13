import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos, remove}) => {
    return !todos.length?
        <div className="NoTodos">
            No todos yet
        </div>
    :
        <div className="TodoList">
            { todos.map(
                todo => <TodoItem remove={remove} todo={todo} key={todo.id}></TodoItem>
            )}
        </div>
}
export default TodoList
