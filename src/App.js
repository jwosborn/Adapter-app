import React, { Component } from 'react'
// Component Imports
// import Select from './Components/Select'
import Header from './Components/Header'
import Positive from './Components/Positive'
import Negative from './Components/Negative'
import Tiles from './Components/Tiles'
import classroomList from './Data/Classroomlist'
// import { Devicelist } from './Data/Devicelist'
import './App.css'
import axios from 'axios'

class App extends Component {
  state = {
    adapterStatus: { needsAdapter: false },
    ishidden: true,
    devices: [],
    device: '',
    deviceData: {},
  }

  //place devices[] in state
  componentDidMount = () => {
    axios.get('https://adapter-api.herokuapp.com/api/devices').then(res => {
      this.setState({ devices: res.data })
    })
  }

  //sets selected device from Tiles into App state
  setDevice = device => {
    this.setState({ device: device })
    axios
      .get(`https://adapter-api.herokuapp.com/api/devices/${device}`)
      .then(res => {
        this.setState({ deviceData: res.data[0] })
      })
  }

  // Function tests data from roomData and deviceData
  //changes App State so that App renders Positive/Negative banners
  // adapterCheck = (roomHDMI, deviceHDMI, roomVGA, deviceVGA) => {
  //   if (
  //     (roomHDMI === true && deviceHDMI === true) ||
  //     (roomVGA === true && deviceVGA === true)
  //   ) {
  //     this.setNeedsNoAdapter()
  //   } else if (
  //     roomHDMI === true &&
  //     deviceHDMI === false &&
  //     (roomVGA === true && deviceVGA === false)
  //   ) {
  //     this.setNeedsBoth()
  //   } else if (roomHDMI === true && deviceHDMI === false) {
  //     this.setNeedsHDMIAdapter()
  //   } else if (roomVGA === true && deviceVGA === false) {
  //     this.setNeedsVGAAdapter()
  //   }
  // }

  //function to display Positive component, i.e. no adapter necessary
  handleDisplayBanner = (roomHDMI, deviceHDMI, roomVGA, deviceVGA) => {
    if (
      roomHDMI === true &&
      deviceHDMI === true &&
      (roomVGA === true && deviceVGA === true)
    ) {
      this.setState({ ishidden: false })
    }
  }

  //Breaking apart adapterCheck()
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

  //Functions that change App state to render Positive/Negative(may rename) Banners. passed to Tiles

  setNeedsHDMIAdapter = () => {
    this.setState({
      adapterStatus: { needsAdapter: true, needsHDMI: true },
    })
  }

  setNeedsVGAAdapter = () => {
    this.setState({
      adapterStatus: { needsAdapter: true, needsVGA: true },
    })
  }

  setNeedsBoth = () => {
    this.setState({
      adapterStatus: {
        needsAdapter: true,
        needsHDMI: true,
        needsVGA: true,
      },
    })
  }
  //ADAPTER DISPLAY

  //Function that displays appropriate adapter(s) dynamically needs to be moved to Tiles
  getDeviceAdapter = (adapterHDMI, adapterVGA) => {
    if (
      this.state.needsAdapter.needsHDMI === true &&
      this.state.needsAdapter.needsVGA === true
    ) {
      return adapterHDMI + ' or a ' + adapterVGA
    } else if (this.state.needsAdapter.needsHDMI === true) {
      return adapterHDMI
    } else if (this.state.needsAdapter.needsVGA === true) {
      return adapterVGA
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Tiles
          buildings={classroomList}
          adapterCheck={this.adapterCheck}
          devices={this.state.devices}
          setDevice={this.setDevice}
          deviceData={this.state.deviceData}
        />
        {this.state.adapterStatus.needsAdapter ? (
          <Negative
            needsAdapter={this.state.needsAdapter}
            ishidden={this.state.ishidden}
            deviceData={this.state.deviceData}
            getDeviceAdapter={this.getDeviceAdapter}
          />
        ) : (
          <Positive ishidden={this.state.ishidden} />
        )}
      </div>
    )
  }
}

export default App
