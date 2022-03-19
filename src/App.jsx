import React,{useState,useEffect} from 'react';
import './App.css';
import Tasks from './components/tasks';
import AddTask from './components/AddTask';

const getLocalItems = () =>{
  let list = localStorage.getItem('list')

  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }else{
    return [
      {
        "title":"completa",
        "id":1,
        "completed":true
      },
      {
        "title":"não completa",
        "id":2,
        "completed":false
      },
    ]
  }
}

function App() {

  const [tasks,setTasks]=useState(getLocalItems());

  const handleTaskAddition = (taskTitle) =>{
    if(taskTitle!="" && taskTitle!=" "){
      const newTasks=[
      ...tasks,
      {
      title: taskTitle,
      id:Math.random(10),
      completed:false
    },
  ]
  setTasks(newTasks)
}
    

  }

    const handleTaskClick = (taskId) => {
      const newTasks = tasks.map((task)=>{
        if (task.id === taskId)return{...task, completed: !task.completed}
        return task;
      })

      setTasks(newTasks);
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id != taskId)

    setTasks(newTasks)
  }

  useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(tasks))
  },[tasks])
  return (
    <div className="App">
      <AddTask handleTaskAddition={handleTaskAddition}/>
      <Tasks 
      handleTaskClick={handleTaskClick}
      handleTaskDeletion={handleTaskDeletion }
      tasks={tasks}/>
    </div>
  );
}

export default App;
