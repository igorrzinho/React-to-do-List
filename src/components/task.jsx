import React from 'react';
import './task.css';

const Task=({task, handleTaskClick, handleTaskDeletion })=>{
    return(
        <div className='task-box' style={task.completed ? {border: "4px solid #0075BD"}:{} }>
            <div className='task-txt' onClick={()=> handleTaskClick(task.id)}>
                {task.title}                
            </div>
            <div>
                <button className='btn' onClick={()=>handleTaskDeletion(task.id)}>
                    &times;
                </button>
            </div>
        </div>
    );
}

export default Task;