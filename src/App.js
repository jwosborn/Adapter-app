import React, { Component } from 'react';
// Component Imports
import Select from './Select';
import Header from './Header';
import {Nortonlist} from './Classroomlist';
import './App.css';

class App extends Component {

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
