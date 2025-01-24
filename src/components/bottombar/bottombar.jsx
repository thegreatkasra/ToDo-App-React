import React, {useState} from "react";
import './bottombar.css'

const FilterFooter = ({tasks, changeFilter}) => {
  const[filter, setFilter] = useState('all');

  const handleFilter = (filterName) =>{
    setFilter(filterName);
    changeFilter(filterName);
  };

  return (
        <div className="filterfooter">
        <div>
          <span>{tasks.length} tasks left to do !</span>
        </div>
        <div>
          <ul>
            <li>
              <button onClick={()=>{handleFilter('all')}} className={filter === 'all' ? 'active' : ''}>All</button>
            </li>
            <li>
              <button onClick={()=>{handleFilter('active')}} className={filter === 'active' ? 'active' : ''}>Active</button>
            </li>
            <li>
              <button onClick={()=>{handleFilter('completed')}} className={filter === 'completed' ? 'active' : ''} >Completed</button>
            </li>
          </ul>
        </div>
      </div>
    )
};
export default FilterFooter;