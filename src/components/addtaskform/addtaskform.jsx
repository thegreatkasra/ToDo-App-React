import React from "react";
import './addtaskform.css'

const AddTaskForm = () => (
    <div className="addtaskform">
      <form>
        <input type='text' placeholder='what needs to be done ?'></input>
        <button type='submit'>Add</button>
      </form>
      </div>
);

export default AddTaskForm;