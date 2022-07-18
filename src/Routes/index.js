import Calculator from "../pages/Calculator";
import TodoList from "../pages/TodoList";


export const paths = [
    { name: "Todos", path: "/todos", element: <TodoList/> },
    { name: "Calculator", path: "/calc", element: <Calculator/> }
]