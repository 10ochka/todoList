import { useState } from "react";
import Button from "./Button";
import Form from "./Form";
import "./styles/App.css"
import TodoList from "./TodoList";
import MenuIcon from "./icons/MenuIcon.png";


function App() {
  const [todos, setTodos] = useState([])
  
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }
  const delTodo = (todo) => {
    setTodos(todos.filter(elem => 
     { 
      return elem.id !== todo.id

      }
  ))
    
  }
  return (
    <div className="App">

      <div className="AppHeader">

        <div className="HeaderText">Todo list</div>
        
        <Button
          src={MenuIcon} className="MenuButton"
          callback={() => console.log("menu")}
          style={{height: 20, width: 20}}
        ></Button>

      </div>
      
      <Form create={createTodo}></Form>
      <TodoList remove={delTodo} todos={todos}></TodoList>
        
    </div>
  );
}

export default App;
