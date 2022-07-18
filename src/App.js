import React from "react";
import MainRouter from "./Routes/MainRouter";
import { pathsContext } from "./context";
import { paths } from "./Routes";


function App() {
  
  return (
      <pathsContext.Provider value={ paths }>
        <MainRouter/>
      </pathsContext.Provider>
  );
}
export default App;
