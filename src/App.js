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

  const targetValue = (i) => {
  return(
    i.currentTarget.text
  )}
  
const Applogic = () => { 
  if (Nortonlist.includes(targetValue)) {
      return (<Positive />)
    } return (<Negative />)

}
    return (
      <div className="App">
        <Header />
        <Select 
        opts={Nortonlist}
        dopts={Devicelist}
        targetValue={this.targetValue}
        />
        <Applogic />
      </div>
    );
  }
}

export default App;
