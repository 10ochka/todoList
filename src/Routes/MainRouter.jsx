import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Paths } from "./Routes.js";

const MainRouter = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                {Paths.map(route => <Route key={route.path} path={route.path} element={route.element}/> )}
                <Route path="/*" element={<h1>Page not found</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default MainRouter