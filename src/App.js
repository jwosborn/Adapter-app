import React, { Component } from 'react';
// Component Imports
import Select from './Select';
import Header from './Header';
import Positive from './Positive';
import {Nortonlist} from './Classroomlist';
import {Devicelist} from './Devicelist';
import './App.css';
import Negative from './Negative';

class App extends Component {

  render() {

const Applogic = () => {
  const hasHDMI = false; 
  if (hasHDMI) {
      return (<Positive />)
    } return (<Negative />)

}
    return (
      <div className="App">
        <Header />
        <Select 
        opts={Nortonlist}
        dopts={Devicelist}
        />
        <Applogic />
      </div>
    );
  }
}

export default App;
