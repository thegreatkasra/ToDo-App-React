import React, {useState} from "react";
import './addtaskform.css'

const AddTaskForm = ({addTask}) => {

  const[value, setValue] = useState('');

  const handleChange = (event) =>{
    if(event) {
      event.preventDefault();
    }
    setValue(event.target.value);
  };
  const handleSubmit = (event) =>{
    if(event) {
      event.preventDefault();
    }
    if(!value || value === ""){
      return
    }else{
      addTask(value);
    }
  }
  return(
    <div className="addtaskform">
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type='text' placeholder='what needs to be done ?'></input>
      <button type='submit'>Add</button>
    </form>
    </div>
  )
};

export default AddTaskForm;