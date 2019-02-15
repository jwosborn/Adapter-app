import React, {Component} from 'react';
import './App.css';



class Select extends Component {

  //returns user selection value
  targetValue = (i) => {
    console.log(i.currentTarget.value)
      return(
        i.currentTarget.value
      )}

  //function to link Nortonlist/Devicelist to targetValue
  handleRoomCheck = () => {
    const classrooms = this.props.opts.map(room => room.roomNumber)
      if (classrooms.includes(this.targetValue)){
        console.log('it works')
      }
    }
  render () {

      return (
        <div className="Choice-parent">
          <div>
            <label htmlFor="Room-List" className="label-text">Choose Your Classroom:</label><br />
            <select className="Room-list" id="Room-list" onChange={(e) => this.targetValue(e)}> 
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
            <select className="Device-list" onChange={(e) => this.targetValue(e)}>
              <option defaultValue="" selected>Choose Your Device</option> 
              {
                this.props.dopts.map(op => (
                  <option value={op.name}>
                    {op.name}
                  </option>
                ))
              }
            </select>
            <button classname="test-button"onClick={this.handleRoomCheck}>Test</button>
          </div>
        </div>
      );
  }


}
export default Select;