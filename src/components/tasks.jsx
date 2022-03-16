import React from 'react';
import Task from './task';
import "./Tasks.css"

const Tasks =({tasks,handleTaskClick,handleTaskDeletion })=> {
    return(
        <div className='tasks-container'>
        {tasks.map((task) => (
            <Task key={task.id} task={task} 
            handleTaskDeletion={handleTaskDeletion}
            handleTaskClick={handleTaskClick}/>
        ))}
        </div>
    );
}
export default Tasks;