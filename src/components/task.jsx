import React from 'react';
import './task.css';

const Task=({task, handleTaskClick, handleTaskDeletion })=>{
    return(
        <div className='task-box' style={task.completed ? {borderLeft: "6px solid #004ba8"}:{} }>
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