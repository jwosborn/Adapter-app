import React, {Component} from 'react';
import './App.css';



class Select extends Component {
  state = {
    roomTarget: '',
    deviceTarget:''
  }

  //returns user room selection value
  roomTarget = (i) => {
    this.setState({roomTarget: i.currentTarget.value})
  }
  //returns user device selection value
  deviceTarget = (i) => {
    this.setState({deviceTarget: i.currentTarget.value})
  }

  //function returns boolean values of hasHDMI and hasVGA based on device selection
  connections = () => {
    if(this.state.roomTarget === '' || this.state.deviceTarget === '') {
      alert('Please select Classroom and Device.')
    } else {
      const roomHDMI = this.props.opts.find(x => x.roomNumber === this.state.roomTarget).hasHDMI;
      const roomVGA = this.props.opts.find(x => x.roomNumber === this.state.roomTarget).hasVGA;
      const deviceHDMI = this.props.dopts.find(x => x.name === this.state.deviceTarget).hasHDMI;
      const deviceVGA = this.props.dopts.find(x => x.name === this.state.deviceTarget).hasVGA
      this.props.adapterCheck(roomHDMI, roomVGA, deviceHDMI, deviceVGA);
    }

  }

  render () {

      return (
        <div className="Choice-parent">
          <div>
            <label htmlFor="Room-List" className="label-text">Choose Your Classroom:</label><br />
            <select className="Room-list" id="Room-list" onChange={(e) => this.roomTarget(e)}> 
              <option disabled selected>Choose Your Classroom</option>
              {
                this.props.opts.map(op => (
                  <option key={op.roomNumber} value={op.roomNumber}>
                    {op.roomNumber}
                  </option>
                ))
              }
            </select>
          </div>
          <div>
            <label htmlFor="Device-List" className="label-text">Choose Your Device:</label><br />
            <select className="Device-list" onChange={(e) => this.deviceTarget(e)}>
              <option disabled selected>Choose Your Device</option> 
              {
                this.props.dopts.map(op => (
                  <option key={op.name} value={op.name}>
                    {op.name}
                  </option>
                ))
              }
            </select>
            <button className="submit" onClick={this.connections}>Submit</button>
          </div>
        </div>
      );
  }


}
export default Select;