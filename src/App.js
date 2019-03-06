import React, { Component } from 'react'
// Component Imports
// import Select from './Components/Select'
import Header from './Components/Header'
// import Positive from './Components/Positive'
// import Negative from './Components/Negative'
import Tiles from './Components/Tiles'
import classroomList from './Data/Classroomlist'
import { Devicelist } from './Data/Devicelist'
import './App.css'

class App extends Component {
  state = {
    needsAdapter: '',
    needsHDMIAdapter: '',
    needsVGAAdapter: '',
    ishidden: true,
    roomTarget: '',
    deviceTarget: '',
  }

  setRoomTarget = e => {
    this.setState({ roomTarget: e.currentTarget.value })
  }

  setDeviceTarget = e => {
    this.setState({ deviceTarget: e.currentTarget.value })
  }
  //Functions that change App state which Renders Positive/Negative(may rename) Banners. To be pased to Tiles
  setNeedsNoAdapter = () => {
    this.setState({
      needsAdapter: false,
      needsHDMIAdapter: false,
      needsVGAAdapter: false,
      ishidden: false,
    })
  }
  setNeedsHDMIAdapter = () => {
    this.setState({
      needsAdapter: true,
      needsHDMIAdapter: true,
      needsVGAAdapter: false,
      ishidden: false,
    })
  }

  setNeedsVGAAdapter = () => {
    this.setState({
      needsAdapter: true,
      needsHDMIAdapter: false,
      needsVGAAdapter: true,
      ishidden: false,
    })
  }

  setNeedsBoth = () => {
    this.setState({
      needsAdapter: true,
      needsHDMIAdapter: true,
      needsVGAAdapter: true,
      ishidden: false,
    })
  }

  //Checks to see if adapters are needed and what type; Parameters defined in connections
  adapterCheck = (roomHDMI, roomVGA, deviceHDMI, deviceVGA) => {
    if (
      (roomHDMI === true && deviceHDMI === true) ||
      (roomVGA === true && deviceVGA === true)
    ) {
      this.setState({
        needsAdapter: false,
        needsHDMIAdapter: false,
        needsVGAAdapter: false,
        ishidden: false,
      })
    } else if (
      roomHDMI === true &&
      deviceHDMI === false &&
      (roomVGA === true && deviceVGA === false)
    ) {
      this.setState({
        needsAdapter: true,
        needsHDMIAdapter: true,
        needsVGAAdapter: true,
        ishidden: false,
      })
    } else if (roomHDMI === true && deviceHDMI === false) {
      this.setState({
        needsAdapter: true,
        needsHDMIAdapter: true,
        needsVGAAdapter: false,
        ishidden: false,
      })
    } else if (roomVGA === true && deviceVGA === false) {
      this.setState({
        needsAdapter: true,
        needsHDMIAdapter: false,
        needsVGAAdapter: true,
        ishidden: false,
      })
    }
  }

  //function dynamically checks values based on CurrentTarget updates everytime fired
  connections = () => {
    const roomHDMI = classroomList.find(
      x => x.roomNumber === this.state.roomTarget,
    )
    console.log(roomHDMI)
    const roomVGA = classroomList.find(
      x => x.roomNumber === this.state.roomTarget,
    ).hasVGA
    const deviceHDMI = Devicelist.find(x => x.name === this.state.deviceTarget)
      .hasHDMI
    const deviceVGA = Devicelist.find(x => x.name === this.state.deviceTarget)
      .hasVGA
    this.adapterCheck(roomHDMI, roomVGA, deviceHDMI, deviceVGA)
  }

  //ADAPTER DISPLAY

  //Function that displays appropriate adapter(s) dynamically currently returns undefined
  getDeviceAdapter = () => {
    let deviceAdapterHDMI = Devicelist.find(
      x => x.name === this.state.deviceTarget,
    ).adapterHDMI
    let deviceAdapterVGA = Devicelist.find(
      x => x.name === this.state.deviceTarget,
    ).adapterVGA

    if (
      this.state.needsHDMIAdapter === true &&
      this.state.needsVGAAdapter === true
    ) {
      return deviceAdapterHDMI + ' or a ' + deviceAdapterVGA
    } else if (this.state.needsHDMIAdapter === true) {
      return deviceAdapterHDMI
    } else if (this.state.needsVGAAdapter === true) {
      return deviceAdapterVGA
    }
  }

  //  Dynamic Link Population
  getAdapterLink = () => {
    const adapterLinkHDMI = Devicelist.find(
      x => x.name === this.state.deviceTarget,
    ).linkHDMI
    const adapterLinkVGA = Devicelist.find(
      x => x.name === this.state.deviceTarget,
    ).linkVGA
    const displayLinkHDMI = (
      <h2>
        You can buy an HDMI adapter by clicking{' '}
        <a rel="noopener noreferrer" target="_blank" href={adapterLinkHDMI}>
          here
        </a>
      </h2>
    )
    const displayLinkVGA = (
      <h2>
        You can buy a VGA adapter by clicking{' '}
        <a rel="noopener noreferrer" target="_blank" href={adapterLinkVGA}>
          here
        </a>
      </h2>
    )
    const displayLinkBoth = (
      <h2>
        You can buy an HDMI adapter by clicking{' '}
        <a rel="noopener noreferrer" target="_blank" href={adapterLinkHDMI}>
          here
        </a>
        <br /> OR You can buy a VGA adapter by clicking{' '}
        <a rel="noopener noreferrer" target="_blank" href={adapterLinkVGA}>
          here
        </a>
      </h2>
    )

    if (
      this.state.needsHDMIAdapter === true &&
      this.state.needsVGAAdapter === false
    ) {
      return displayLinkHDMI
    } else if (
      this.state.needsHDMIAdapter === false &&
      this.state.needsVGAAdapter === true
    ) {
      return displayLinkVGA
    } else if (
      this.state.needsHDMIAdapter === true &&
      this.state.needsVGAAdapter === true
    ) {
      return displayLinkBoth
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Tiles
          buildings={classroomList}
          setNeedsNoAdapter={this.setNeedsNoAdapter}
          setNeedsBoth={this.setNeedsBoth}
          setNeedsHDMIAdapter={this.setNeedsHDMIAdapter}
          setNeedsVGAAdapter={this.setNeedsVGAAdapter}
        />
      </div>
    )
  }
}

export default App
