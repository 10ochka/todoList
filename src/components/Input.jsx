import React from "react";
const Input =  ({callback, value = "", placeholder = "", cls=""}) => {
        return (
            <input 
                class={cls}
                size={5}
                onChange={callback}
                value={value}
                placeholder={placeholder}
            ></input>
        )
    }

export default Input