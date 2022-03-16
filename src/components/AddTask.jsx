import React, { useState } from 'react';
import "./input.css"

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
        <div className='input-box'>
            <input 
            placeholder='digite aqui'
            onChange={handleInputChange}
            value={inputData}
            type="text" />
            <div className='btn-input'>

                <Btn OnClick={handleAddTaskClick}>
                    enviar
                </Btn>
            </div>
        </div>
     );
}
 
export default AddTask;