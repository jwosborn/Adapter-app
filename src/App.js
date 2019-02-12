import React, { Component } from 'react';
// Component Imports
import Select from './Select';
import Header from './Header';
import {Nortonlist} from './Classroomlist';
import './App.css';

class App extends Component {
  // state = {
    
  // };

 

  // nortonRoomOptions = this.state.Nortonlist.map(roomNumber => this.state.Nortonlist.roomNumber)

  // handlePopulateChoices = () => {
  //   const select = document.getElementById("Room-list");
  //     for (let i = 0; i < this.nortonRoomOptions.length; i++){
  //       var nortonRoomOption = this.nortonRoomOptions[i];
  //       var op = document.createElement("option");
  //       op.textContent = nortonRoomOption;
  //       op.value = nortonRoomOption;
  //       select.appendChild(op);
  //       console.log(op);
  //     }
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Select 
        opts={Nortonlist}
        />
      </div>
    );
  }
}

export default App;
