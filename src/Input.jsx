import React from "react";
const Input = React.forwardRef(
    (props, ref) => {
        return (
                <input className="Input" size={5} ref={ref} {...props}></input>

            
        )
    })

export default Input