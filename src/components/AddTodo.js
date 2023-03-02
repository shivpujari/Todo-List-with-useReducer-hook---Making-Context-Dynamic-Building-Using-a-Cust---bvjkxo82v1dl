import React, { useState } from "react"

const AddTodo = ({ dispatch }) => {

    const [tempInput, setTempInput] = useState('');

    const submitFn=(e)=>{
        e.preventDefault();
        dispatch({type: 'ADDTODO', payload:tempInput});
        setTempInput('');
    }



    return (
        <div>
        <form id="todo-form" onSubmit={submitFn}>
        <input type="text" id="todo-input" value={tempInput} onChange={(e)=> setTempInput(e.target.value)}/>
        <button type="submit">Add To List</button>
        </form>
        </div>

    )
}

export { AddTodo }