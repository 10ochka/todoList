import React, { useState } from "react";
import Menu from "../components/Menu";

const Calculator = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div class="flex-col rounded w-64 min-h-48 max-h-max bg-white m-5 border-b border-l border-zinc-400">
            <Menu cls="flex m-2 bg-white flex-row space-x-4"
                visible={visible} 
                setVisible={setVisible}/>
            <div class="bg-white m-2 text-center">Calculate here</div>
        </div>
    )
}
export default Calculator