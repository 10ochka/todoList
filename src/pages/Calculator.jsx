import React, { useState } from "react";
import Menu from "../components/Menu";

const Calculator = () => {

    const [ visible, setVisible ] = useState( false )

    return (
        <div class=" todo ">

            <Menu cls=" todo-menu space-x-4 "
                visible={ visible } 
                setVisible={ setVisible }
            />

            <div class=" todo-bg todo-text m-2 ">
                Calculate here
            </div>

        </div>
    )
}
export default Calculator