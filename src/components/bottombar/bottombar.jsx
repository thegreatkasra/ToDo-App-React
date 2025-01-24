import React from "react";
import './bottombar.css'

const FilterFooter = () => {
    return (
        <div className="filterfooter">
        <div>
          <span>2 items left</span>
        </div>
        <div>
          <ul>
            <li>
              <button>All</button>
            </li>
            <li>
              <button>Active</button>
            </li>
            <li>
              <button>Completed</button>
            </li>
          </ul>
        </div>
      </div>
    )
};
export default FilterFooter;