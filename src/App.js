import React,{useState} from 'react';
import './App.css';
import Header from './components/header';
import Tasks from './components/tasks';
import AddTask from './components/AddTask';

function App() {

  const [tasks,setTasks]=useState([
    {
      id: "1",
      title: "ler livro",
      completed:true
    },
    {
      id: "2",
      title: "ler livro2",
      completed:false
    }
  ]);

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

  return (
    <div className="App">
      <Header/>
      <AddTask handleTaskAddition={handleTaskAddition}/>
      <Tasks 
      handleTaskClick={handleTaskClick}
      handleTaskDeletion={handleTaskDeletion }
      tasks={tasks}/>
    </div>
  );
}

export default App;
