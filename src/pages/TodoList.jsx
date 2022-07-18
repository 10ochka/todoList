import Form from "../components/Form";
import "../styles/App.css"
import TodoItemList from "../components/TodoItemList";
import Menu from "../components/Menu";


function TodoList() {
  
  return (
    <div class=" todo ">
      <Menu cls=" todo-menu space-x-4 " />
      <div class=" todo-bg todo-text mb-2 " > Todo list </div>
      <Form cls=" flex todo-bg flex-row todo-centering " />
      <TodoItemList cls=" todo-bg " />
    </div>
  )
}

export default TodoList;