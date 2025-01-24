import React from "react";
import './todolist.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const TaskList = () =>{
    return(
        <div className="todolist">
        <ul>
          <li>
            <input type='checkbox'/>
            <h2>Build this app !</h2>
            <button>
              <DeleteForeverIcon className="delete" />
            </button>
          </li>
        </ul>
      </div>
    )
};

export default TaskList;