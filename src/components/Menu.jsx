import React, { useContext, useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom"
import MenuIcon from "../icons/MenuIcon.png";
import { pathsContext } from "../context";


const Menu = ( { cls } ) => {

    const [ visible, setVisible ] = useState( false )
    const paths = useContext( pathsContext )

    return (
        <div class={ cls } >

            < Button 
                cls=" todo-bg h-5 w-5 " 
                src={ MenuIcon }
                callback={ () => setVisible( !visible ) }
            />

            { paths.map( item => 
                <Link 
                    class={ ` todo-bg ${ visible? " visible " : " invisible " } ` }
                    to={ item.path }
                    key={ item.path }
                > { item.name } </Link>
            ) }

        </div>
    )
}

export default Menu