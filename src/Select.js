import React from 'react';
// import Solution from './Solution';
import './App.css'; 



const Select = ({opts, dopts}) => {

  // const roomSelect = document.getElementById("Room-list");
  // const roomSelection = roomSelect.options.selectedIndex.text;
//  const e = document.getElementById("Room-list");
// var strUser = e.options[e.selectedIndex].value;
  const roomValue = (i) => {
    console.log(i.currentTarget.value);
    return(
      i.currentTarget.value
    );}


    return (
      <div className="Choice-parent">
      <div>
        <label htmlFor="Room-List" className="label-text">Choose Your Classroom:</label><br />
        <select className="Room-list" id="Room-list" onChange={roomValue}> 
          <option defaultValue="" selected>Choose Your Classroom</option>
          {
            opts.map(op => (
              <option value={op.roomNumber}>
                {op.roomNumber}
              </option>
            ))
          }
        </select>
      </div>
      <div>
        <label htmlFor="Device-List" className="label-text">Choose Your Device:</label><br />
        <select className="Device-list">
         <option defaultValue="" selected>Choose Your Device</option> 
         {
            dopts.map(op => (
              <option value={op.name}>
                {op.name}
              </option>
            ))
          }
        </select>
    </div>
    </div>
    );
}
export default Select;