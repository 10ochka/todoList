import { useContext, useState } from "react";
import Form from "../components/Form";
import "../styles/App.css"
import TodoItemList from "../components/TodoItemList";

import Menu from "../components/Menu";
import { PathsContext } from "../context";




function TodoList() {


  console.log(1)
  const [todos, setTodos] = useState([])
  
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }
  const delTodo = (todo) => {
    setTodos(todos.filter(elem => elem.id !== todo.id))
  }

  const [visible, setVisible] = useState(false)
  
  return (
    <div class="flex-col rounded w-64 min-h-48 max-h-max bg-white m-5 border-b border-l border-zinc-400">

      <Menu cls="flex m-2 bg-white flex-row space-x-4"
      visible={visible} 
      setVisible={setVisible}/>
      <div class="bg-white m-2 text-center">Todo list</div>
            
      <Form cls="flex bg-white flex-row justify-center content-center" create={createTodo}/>

      <TodoItemList remove={delTodo} todos={todos}/>
    </div>
  );
}

export default TodoList;