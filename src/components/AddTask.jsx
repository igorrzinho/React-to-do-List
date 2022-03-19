import React, { useState } from 'react';
import "./AddTask.css"

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
            <h1>To Do List</h1>
           <br/>
           <div className='form'>
            <input 
            placeholder='digite aqui'
            onChange={handleInputChange}
            value={inputData}
            type="text" />
                <div className='btn-input'>

                    <Btn OnClick={handleAddTaskClick}>
                        add
                    </Btn>
                </div>
            </div>   
        </div>
     );
}
 
export default AddTask;