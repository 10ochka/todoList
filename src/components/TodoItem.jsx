import React, { useState } from "react";
import Button from "./Button";
import DelIcon from "../icons/DelIcon.png";
import EditIcon from "../icons/EditIcon.png";
import { useDispatch } from "react-redux/es/exports";
import { delTodo as del } from "../Reducers/TodoReducer";
import { editTodo as edit } from "../Reducers/TodoReducer";



const TodoItem = ( {todo, cls } ) => {
    
    const [ dispatch, dsp ] = [ useDispatch(), expr => dispatch( expr ) ]
    const [ done, setDone ] = useState( false )
    const [ editig, setEditing ] = useState( false )
    const decoration = done? " line-through " : ""

    return ( 
        <div class={ cls } >

            <input 
                class="flex-none ml-2" 
                type="checkbox" 
                onChange={ () => setDone(!done) }
            ></input>

            {
                editig
                ? 
                <textarea 
                    class=" flex-1 m-2 bg-gray-300 w-36 " 
                    wrap="soft" 
                    onChange={ e => dsp( edit( { ...todo, body: e.target.value } ) ) } 
                    defaultValue={ todo.body } 
                ></textarea>
                : 
                <div class={ `${decoration} flex-1 m-2 break-all bg-gray-200 w-36 max-h-max text-gray-400 text-left` } >
                    { todo.body }
                </div>
            }

            <Button 
                cls="bg-gray-200 self-center flex-none ml-2 h-3 w-3"
                callback={ () => setEditing( !editig ) } 
                src={ EditIcon }
            />

            <Button
                cls="bg-gray-200 self-center flex-none m-2 h-2.5 w-2.5"
                callback={ () => dsp( del( todo ) ) } 
                src={ DelIcon } 
            />

        </div> 
    )
}

export default TodoItem