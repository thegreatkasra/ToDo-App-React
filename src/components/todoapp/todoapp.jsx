import React, {useState, useEffect} from "react";
import {AddTaskForm, TaskList, FilterFooter} from './../index'
import './todoapp.css'
import { v4 as uuidv4 } from 'uuid';

const ToDoApp = () =>{

  const[tasks, setTasks] = useState([]);
  const[filter, setFilter] = useState('all');
  const[filteredTasks, setFilteredTasks] = useState([]);
  

  useEffect(()=>{
    if(filter === 'all'){
      setFilteredTasks(tasks);
    }
    if(filter === 'completed'){
      const completedTasks = tasks.filter(task => task.status);
      setFilteredTasks(completedTasks);
    }
    if(filter === 'active'){
      const activedTasks = tasks.filter(task => !task.status);
      setFilteredTasks(activedTasks);
    }

  }, [filter]);

  useEffect(()=>{
    setTasks([
      {
        id:uuidv4(),
        title:'defualt task',
        status: true, //bolean
      },
      {
        id:uuidv4(),
        title:'defualt task number 2',
        status: false, //bolean
      },
    ])
  }, []);



  // add task function
  const addTask = (taskTitle) =>{
    setTasks([
      ...tasks,
      {
        id:uuidv4(),
        title:taskTitle,
        status: false, 
      }
    ]);
  }

  // Delete task function
  const deleteTask = (taskId) => {
    const newTaskList = tasks.filter((task) => task.id !== taskId);
    setTasks(newTaskList);
  };
  
  return(
    <div className="todoapp">
    <AddTaskForm addTask={addTask} />
    <TaskList tasks={filteredTasks} deleteTask={deleteTask} />
    <FilterFooter tasks={filteredTasks} changeFilter={setFilter} />
  </div>
  )
}
export default ToDoApp;