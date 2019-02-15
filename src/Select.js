import React, {Component} from 'react';
import './App.css'; 



class Select extends Component {
  
  
  state = {

    roomTarget : this.targetValue,
    deviceTarget: this.targetValue

  }



  render () {
    const targetValue = (i) => {
        return(
          i.currentTarget.value
        )}
      
  
  
      return (
        <div className="Choice-parent">
          <div>
            <label htmlFor="Room-List" className="label-text">Choose Your Classroom:</label><br />
            <select className="Room-list" id="Room-list" onChange={(e) => targetValue(e)}> 
              <option  selected>Choose Your Classroom</option>
              {
                this.props.opts.map(op => (
                  <option value={op.roomNumber}>
                    {op.roomNumber}
                  </option>
                ))
              }
            </select>
          </div>
          <div>
            <label htmlFor="Device-List" className="label-text">Choose Your Device:</label><br />
            <select className="Device-list" onChange={(e) => targetValue(e)}>
            <option defaultValue="" selected>Choose Your Device</option> 
            {
                this.props.dopts.map(op => (
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


}
export default Select;