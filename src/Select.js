import React from 'react';
import './App.css'; 



const Select = ({opts}) => {
    return (
      <div className="Choice-parent">
      <div>
        <label htmlFor="Room-List" className="label-text">Choose Your Classroom:</label><br />
        <select className="Room-list"> 
          <option defaultValue="" selected disabled>Choose Your Classroom</option>
          {
            opts.map(op => (
              <option>
                {op.roomNumber}
              </option>
            ))
          }
        </select>
      </div>
      <div>
        <label htmlFor="Device-List" className="label-text">Choose Your Device:</label><br />
        <select className="Device-list">
         <option defaultValue="" selected disabled >Choose Your Device</option> 
          <option>Macbook Air</option>
          <option>iPad</option>
          <option>iPhone</option>
        </select>
    </div>
    </div>
    );
}
export default Select;