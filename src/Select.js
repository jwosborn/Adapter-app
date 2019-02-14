import React from 'react';
import './App.css'; 



const Select = ({opts, dopts}) => {

  const roomValue = (i) => {
    console.log(i.currentTarget.value);
    return(
      i.currentTarget.value
    );}

    // function that links opts to currentTarget.value and saves into new variable (?)

  // const Solutionchoice =() => {
  //   if (opts.includes(roomValue)){
  //     return <Solution />
  //     } 
  //   }

    return (
      <div className="Choice-parent">
        <div>
          <label htmlFor="Room-List" className="label-text">Choose Your Classroom:</label><br />
          <select className="Room-list" id="Room-list" onChange={roomValue}> 
            <option  selected>Choose Your Classroom</option>
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