import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "./pages/TodoList";
import MainRouter from "./Routes/MainRouter";
import { PathsContext } from "./context";
import { Paths } from "./Routes/Routes";


function App() {
  
  return (
    <PathsContext.Provider value={Paths}>
      <MainRouter/>
    </PathsContext.Provider>

  );
}

export default App;
