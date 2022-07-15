import { useState } from "react";
import Form from "../components/Form";
import "../styles/App.css"
import TodoItemList from "../components/TodoItemList";
import Menu from "../components/Menu";




function TodoList() {

  const [ todos, setTodos ] = useState( [] )
  const createTodo = newTodo => setTodos( [ ...todos, newTodo ] )
  const delTodo = todo => setTodos( todos.filter( elem => elem.id !== todo.id ) )
  const [ visible, setVisible ] = useState( false )

  return (
    <div class=" todo ">

      <Menu 
        cls=" todo-menu space-x-4 "
        visible={ visible } 
        setVisible={ setVisible }
      />

      <div class=" todo-bg todo-text mb-2 ">
        Todo list
      </div>

      <Form 
        cls=" flex todo-bg flex-row todo-centering " 
        create={ createTodo }
      />

      <TodoItemList 
        cls=" todo-bg "
        remove={ delTodo } 
        todos={ todos }
      />

    </div>
  )
}
export default TodoList;