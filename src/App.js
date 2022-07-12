import { useState } from "react";
import Form from "./Form";
import Input from "./Input";
import "./styles/App.css"
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";


function App() {
  const [todos, setTodos] = useState([])
  
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }
  const delTodo = (todo) => {
    setTodos(todos.filter(elem => 
     { 
      return elem.id != todo.id

      }
  ))
    
  }
  return (
    <div className="App">

      <div className="AppHeader">Todo list</div>
    
     
          <Form create={createTodo}></Form>

          <TodoList remove={delTodo} todos={todos}></TodoList>
    </div>
  );
}

export default App;
