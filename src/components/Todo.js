import React from 'react';
const Todo = (props) => {
    const {data, dispatch}= props;
    const {id, title} = data;


    return (
        <div>
        <div className='todo'>
        <div className='todo-title'>
        {title}
        <input type='checkbox' value={id}/>
        <button className='todo-delete' onClick={() => dispatch ({type: 'DELETETODO', payload: id})}>Delete</button>
        </div>
        </div>
        </div>
    )
}


export { Todo }

