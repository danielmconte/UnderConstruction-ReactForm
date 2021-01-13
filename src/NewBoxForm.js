import React, {useState} from 'react';
import {v4 as uuid} from "uuid";

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = { color: "", height: "", width: ""}
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData, id: uuid()});
        setFormData(INITIAL_STATE);
    }  

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    return (
        <>
           <form onSubmit={handleSubmit}>
                THIS FORM NEEDS FILLING:
                <label htmlFor = "color">Color:</label>
                <input id = "one" 
                type="text" 
                name = "color" 
                value ={formData.color}
                onChange={handleChange}
                /> 
                
                <label htmlFor = "height">Height:</label>
                <input id = "two" 
                type="text" 
                name = "height" 
                value = {formData.height}
                onChange={handleChange}
                /> 
                
                <label htmlFor = "width">Width:</label>
                <input id = "three" 
                type="text" 
                name = "width" 
                value = {formData.width}
                onChange={handleChange}
                /> 
                <button>PRESS!</button>
              
            </form>
        </>
    )
}

export default NewBoxForm;