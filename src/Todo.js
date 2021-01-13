import React from 'react';

const Todo = ({text}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    // ??? Why is so complicated to remove?
    }  
    return (
        <>
        <div style={{margin: "20px 750px"}}><span>{text}</span>
        <button onClick={handleSubmit}>X</button>
        </div>
        </>
    )
}

export default Todo;