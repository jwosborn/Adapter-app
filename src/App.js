import React, { Component } from 'react';
// Component Imports
import Select from './Select';
import Header from './Header';
import Solution from './Solution';
import {Nortonlist} from './Classroomlist';
import {Devicelist} from './Devicelist';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />
        <Select 
        opts={Nortonlist}
        dopts={Devicelist}
        />
        <Solution />
      </div>
    );
  }
}

export default App;
