import React, { Component } from 'react'
// Component Imports
import Select from './Components/Select'
import Header from './Components/Header'
import Positive from './Components/Positive'
import Negative from './Components/Negative'
import {Nortonlist} from './Data/Classroomlist'
import {Devicelist} from './Data/Devicelist'
import './App.css'

class App extends Component {

  state = {
    needsAdapter: '',
    needsHDMIAdapter: '',
    needsVGAAdapter: '',
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


//Function that displays appropriate adapter(s) dynamically currently returns undefined
  getDeviceAdapter = () => {
    let deviceAdapterHDMI = Devicelist.find(x => x.name === this.state.deviceTarget).adapterHDMI
    let deviceAdapterVGA = Devicelist.find(x => x.name === this.state.deviceTarget).adapterVGA

      if (this.state.needsHDMIAdapter === true && this.state.needsVGAAdapter === true){
        return (
          deviceAdapterHDMI + ' or a ' + deviceAdapterVGA 
        )
      } else if (this.state.needsHDMIAdapter === true) {
        return deviceAdapterHDMI
      } else if (this.state.needsVGAAdapter === true) {
        return deviceAdapterVGA
      }
    }

//  Dynamic Link Population currently returns Undefined
  getAdapterLink = () => {
    const adapterLinkHDMI = Devicelist.find(x => x.name === this.state.deviceTarget).linkHDMI
    const adapterLinkVGA = Devicelist.find(x => x.name === this.state.deviceTarget).linkVGA
    const displayLinkHDMI =  <h2>You can buy an HDMI adapter by clicking <a rel="noopener noreferrer" target="_blank" href={adapterLinkHDMI} >here</a></h2>
    const displayLinkVGA =  <h2>You can buy a VGA adapter by clicking <a rel="noopener noreferrer" target="_blank" href={adapterLinkVGA} >here</a></h2>
    const displayLinkBoth = <h2>You can buy an HDMI adapter by clicking <a rel="noopener noreferrer" target="_blank" href={adapterLinkHDMI} >here</a><br/> OR You can buy a VGA adapter by clicking <a rel="noopener noreferrer" target="_blank" href={adapterLinkVGA} >here</a></h2>

        if (this.state.needsHDMIAdapter === true && this.state.needsVGAAdapter === false) {
          return displayLinkHDMI
        } else if (this.state.needsHDMIAdapter === false && this.state.needsVGAAdapter === true) {
          return displayLinkVGA
        } else if (this.state.needsHDMIAdapter === true && this.state.needsVGAAdapter === true) {
          return (
            displayLinkBoth
          )
        }
    }


//Checks to see if adapters are needed and what type
  adapterCheck = (roomHDMI, roomVGA, deviceHDMI, deviceVGA) => {
    if((roomHDMI === true && deviceHDMI === true) || (roomVGA === true && deviceVGA === true)) {
      this.setState({
        needsAdapter: false,
        needsHDMIAdapter: false,
        needsVGAAdapter: false,
        ishidden: false})
    } else if ((roomHDMI === true && deviceHDMI === false) && (roomVGA === true && deviceVGA === false)) {
      this.setState({
        needsAdapter: true,
        needsHDMIAdapter: true,
        needsVGAAdapter: true, 
        ishidden: false
      })
    } else if (roomHDMI === true && deviceHDMI === false) {
      this.setState({
        needsAdapter: true,
        needsHDMIAdapter: true,
        needsVGAAdapter: false, 
        ishidden: false
      })
    } else if (roomVGA === true && deviceVGA === false)  {
      this.setState({
        needsAdapter: true, 
        needsHDMIAdapter: false, 
        needsVGAAdapter: true,
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
                getDeviceAdapter={this.getDeviceAdapter}
                needsHDMIAdapter={this.state.needsHDMIAdapter}
                needsVGAAdapter={this.state.needsVGAAdapter}
                getAdapterLink={this.getAdapterLink}
                /> 
              : <Positive ishidden={this.state.ishidden}/>
        }
      </div>
    )
  }
}

export default App
