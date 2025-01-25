import React from "react";
import './todolist.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const TaskList = ({tasks, deleteTask, handleChangeStatus}) =>{

    return(
        <div className="todolist">
        <ul>
          {tasks.map((task)=>(          
            <li key={`task-${task.id}`}>
            <input onChange={() => handleChangeStatus(task.id)} id="Task" type='checkbox' checked={task.status} />
            <h2>{task.title}</h2>
            <button onClick={()=>{deleteTask(task.id)}}>
              <DeleteForeverIcon className="delete" />
            </button>
          </li>
        ))}
        </ul>
      </div>
    )
};

export default TaskList;