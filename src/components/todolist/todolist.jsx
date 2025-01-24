import React from "react";
import './todolist.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const TaskList = ({tasks, deleteTask}) =>{
    return(
        <div className="todolist">
        <ul>
          {tasks.map((task)=>(          
            <li>
            <input id="Task" type='checkbox' checked={task.status} />
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