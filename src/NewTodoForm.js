import { render } from '@testing-library/react';
import React, {useState} from 'react';
import Todo from './Todo';

const NewTodoForm = () => {
    const [formData, setFormData] = useState("")

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData(data => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        render(
        <Todo text={formData.todo}/>
        )
        setFormData({todo: ""});
    }  
    return (
        <div>
        <form>

                <label htmlFor = "todo">ADD A TODO: </label>
                <input 
                id = "one" 
                type="text" 
                name = "todo" 
                value={formData.todo}
                onChange={handleChange}/>
              
                <button onClick = {handleSubmit}>ADD TODO NOW!</button>
              
            </form>

        </div>
    )
}


export default NewTodoForm;