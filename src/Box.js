import React from 'react';

const Box = ({id, color, height, width}) => {
    
    const remove = (e) => {
        e.preventDefault();
    }  
    return (
        <>
        <div style= {{
            backgroundColor: `${color}`, 
            height: `${height}px`, 
            width: `${width}px`, 
            margin: "10px auto", 
            border: "solid 2px black" }}>
        </div>    
            <button onClick = {remove}>X</button>
        </>
    )
}


export default Box;