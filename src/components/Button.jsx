import React from "react";


const Button = ( { src="", callback, children, cls } ) => {

    return src? 
        <img 
            class={ cls } 
            alt="" 
            src={ src } 
            onClick={ callback } 
        ></img>
    : 
        <button 
            class={ cls } 
            onClick={ callback }
        >
            {children}
        </button>
}
export default Button