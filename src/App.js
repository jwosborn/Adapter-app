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
    needsAdapter: '',
    ishidden: true
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
        />
        {
          this.state.needsAdapter ? <Negative 
                                    ishidden={this.state.ishidden}
                                    Devicelist={Devicelist}
                                    /> 
                                    : <Positive ishidden={this.state.ishidden}/>
        }
      </div>
    );
  }
}

export default App;
