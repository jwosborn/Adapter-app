import React, { Component } from 'react';
// Component Imports
import Select from './Components/Select';
import Header from './Components/Header';
import Positive from './Components/Positive';
import Negative from './Components/Negative';
import {Nortonlist} from './Classroomlist';
import {Devicelist} from './Devicelist';
import './App.css';

class App extends Component {

  state = {
    needsAdapter: '',
    ishidden: true,
    roomTarget: '',
    deviceTarget: ''
  }
  
  getRoomTarget = (i) => {
    this.setState({roomTarget: i.currentTarget.value})
  }

  getDeviceTarget = (i) => {
    this.setState({deviceTarget: i.currentTarget.value})
  }
  adapterCheck = (a, b, c, d) => {
    if((a === true && c === true) || (b === true && d === true)) {
      this.setState({
        needsAdapter: false,
        ishidden: false})
    } else {
      this.setState({
        needsAdapter: true,
        ishidden: false
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Select 
        opts={Nortonlist}
        dopts={Devicelist}
        adapterCheck={this.adapterCheck}
        roomTarget={this.state.roomTarget}
        deviceTarget={this.state.deviceTarget}
        getRoomTarget={this.getRoomTarget}
        getDeviceTarget={this.getDeviceTarget}
        />
        {
          this.state.needsAdapter 
              ? <Negative 
                ishidden={this.state.ishidden}
                Devicelist={Devicelist}
                deviceTarget={this.state.deviceTarget}
                /> 
              : <Positive ishidden={this.state.ishidden}/>
        }
      </div>
    );
  }
}

export default App;
