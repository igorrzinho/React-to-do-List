import React from 'react';
const Task=({task, handleTaskClick, handleTaskDeletion })=>{
    return(
        <div className='class' style={task.completed ? {borderLeft: "6px solid chartreuse"}:{} }>
            <div onClick={()=> handleTaskClick(task.id)}>
                {task.title}                
            </div>
            <div>
                <button onClick={()=>handleTaskDeletion(task.id)}>
                    &times;
                </button>
            </div>
        </div>
    );
}

export default Task;