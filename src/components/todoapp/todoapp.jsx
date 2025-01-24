import React from "react";
import {AddTaskForm, TaskList, FilterFooter} from './../index'
import './todoapp.css'

const ToDoApp = () =>(
    <div className="todoapp">
      <AddTaskForm/>
      <TaskList/>
      <FilterFooter/>
    </div>
)
export default ToDoApp;