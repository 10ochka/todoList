import React, { useContext, useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom"

import MenuIcon from "../icons/MenuIcon.png";
import { PathsContext } from "../context";

const Menu = ({visible, setVisible, cls}) => {
        const items = useContext(PathsContext)
       return (
        <div class={cls}>
        <Button cls="bg-white"
            src={MenuIcon} 
            callback={() => {setVisible(!visible)}}
            style={{height: 20, width: 20}}
        ></Button>
            {items.map(
                (item, index) => <Link to={item.path} class={`bg-white ${visible? "visible" : "invisible"}`}  key={index}>{item.name}</Link>
            )}
        </div>
    )
}

export default Menu