import React, { useContext } from "react";
import Button from "./Button";
import { Link } from "react-router-dom"
import MenuIcon from "../icons/MenuIcon.png";
import { PathsContext } from "../context";


const Menu = ( { visible, setVisible, cls } ) => {

    const items = useContext( PathsContext )

    return (
        <div class={ cls } >

            < Button 
                cls=" todo-bg h-5 w-5 "
                src={ MenuIcon }
                callback={ () => setVisible( !visible ) }
            />

            { items.map( item => 
                <Link 
                    class={ ` todo-bg ${ visible? "visible" : "invisible" } ` }
                    to={ item.path }
                    key={ item.path }
                >
                    { item.name }
                </Link>
            ) }

        </div>
    )
}

export default Menu