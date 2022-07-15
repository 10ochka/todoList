import React from "react";
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
