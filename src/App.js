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

  state = {
    needsAdapter: true
  }
  
  adapterCheck = (a, b, c, d) => {
    if((a === true && c === true) || (b === true && d === true)) {
      this.setState({needsAdapter: false})
    } else {
      this.setState({needsAdapter: true})
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
        />
        {
          this.state.needsAdapter ? <Negative /> : <Positive /> 
        }
      </div>
    );
  }
}
// I'm now a contributor

export default App;
