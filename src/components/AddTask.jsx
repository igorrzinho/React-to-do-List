import React, { useState } from 'react';

import Btn from './btn';
const AddTask = ({handleTaskAddition}) => {
    const [inputData,setInputData]=useState("")

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
    }

    return ( 
        <div>
            <input 
            onChange={handleInputChange}
            value={inputData}
            type="text" />
            <div>

                <Btn OnClick={handleAddTaskClick}>
                    enviar
                </Btn>
            </div>
        </div>
     );
}
 
export default AddTask;