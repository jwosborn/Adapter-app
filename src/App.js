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
  }

  // Function tests data from roomData and deviceData
  //changes App State so that App renders Positive/Negative banners
  adapterCheck = (roomHDMI, deviceHDMI, roomVGA, deviceVGA) => {
    if (
      (roomHDMI === true && deviceHDMI === true) ||
      (roomVGA === true && deviceVGA === true)
    ) {
      this.setNeedsNoAdapter()
    } else if (
      roomHDMI === true &&
      deviceHDMI === false &&
      (roomVGA === true && deviceVGA === false)
    ) {
      this.setNeedsBoth()
    } else if (roomHDMI === true && deviceHDMI === false) {
      this.setNeedsHDMIAdapter()
    } else if (roomVGA === true && deviceVGA === false) {
      this.setNeedsVGAAdapter()
    }
  }

  checkHDMI = (roomHDMI, deviceHDMI) => {
    if (roomHDMI === true && deviceHDMI === false) {
      this.setNeedsHDMIAdapter()
    }
  }

  checkVGA = (roomVGA, deviceVGA) => {
    if (roomVGA === true && deviceVGA === false) {
      this.setNeedsVGAAdapter()
    }
  }
  // setRoomTarget = e => {
  //   this.setState({ roomTarget: e.currentTarget.value })
  // }

  // setDeviceTarget = e => {
  //   this.setState({ deviceTarget: e.currentTarget.value })
  // }
  //Functions that change App state to render Positive/Negative(may rename) Banners. passed to Tiles
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
        <Tiles buildings={classroomList} adapterCheck={this.adapterCheck} />
      </div>
    )
  }
}

export default App
