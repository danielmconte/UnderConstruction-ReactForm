import React, {useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const [boxes, setBoxes] = useState([]); 

// ??? Kind of confused about this function below
    const addBox = (box) => {
        setBoxes(boxes => [...boxes, box]);
 }

// ??? And fuzzy on this 
 const boxComponents = boxes.map(box => {
    <Box
        id={box.id}
        color={box.backgroundColor}
        height={box.height}
        width={box.width}
    />


 })
return (
    <>
    <NewBoxForm addBox={addBox} />
    {boxComponents}
    </>
)

}

export default BoxList;