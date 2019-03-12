import React, { Component } from 'react'
// Component Imports
// import Select from './Components/Select'
import Header from './Components/Header'
import Positive from './Components/Positive'
import Negative from './Components/Negative'
import Tile from './Components/Tile'
// import { Devicelist } from './Data/Devicelist'
import './App.css'
import axios from 'axios'

class App extends Component {
  state = {
    buildings: [],
    building: '',
    rooms: [],
    room: '',
    roomData: {},
    devices: [],
    deviceData: {},
    roomHDMI: '',
    deviceHDMI: '',
    roomVGA: '',
    deviceVGA: '',
  }

  //place devices[] in state
  componentDidMount = () => {
    axios.get('https://adapter-api.herokuapp.com/api/devices').then(res => {
      this.setState({ devices: res.data })
    })
    axios.get('https://adapter-api.herokuapp.com/api/buildings').then(res => {
      this.setState({ buildings: res.data })
    })
  }
  //sets selected building in state and calls rooms
  setBuilding = building => {
    axios
      .get(`https://adapter-api.herokuapp.com/api/buildings/${building}/rooms`)
      .then(res => {
        this.setState({ building: building, rooms: res.data })
      })
      .catch(err => console.log(err))
  }

  //calls for room and sets room and roomData in  state
  setRoom = room => {
    const { building } = this.state
    axios
      .get(
        `https://adapter-api.herokuapp.com/api/buildings/${building}/${room}`,
      )
      .then(res => {
        this.setState({
          room: room,
          roomData: res.data[0],
          roomHDMI: res.data[0].hasHDMI,
          roomVGA: res.data[0].hasVGA,
        })
      })
      .catch(err => console.log(err))
  }

  //sets selected device and deviceData into  state
  setDevice = device => {
    this.setState({ device: device })
    axios
      .get(`https://adapter-api.herokuapp.com/api/devices/${device}`)
      .then(res => {
        this.setState({
          deviceData: res.data[0],
          deviceHDMI: res.data[0].hasHDMI,
          deviceVGA: res.data[0].hasVGA,
        })
      })
  }

  //Function tests data from roomData and deviceData returns boolean
  adapterCheck = (roomHDMI, deviceHDMI, roomVGA, deviceVGA) => {
    //test booleans return true if adapter is needed
    if (
      (roomHDMI === true && deviceHDMI === true) ||
      (roomVGA === true && deviceVGA === true)
    ) {
      return false
    } else if (
      (roomHDMI === true && deviceHDMI === false) ||
      (roomVGA === true && deviceVGA === false)
    ) {
      return true
    }
  }

  //ADAPTER DISPLAY

  //helper function for adapterCheck() that gets specific adapter needs
  whichAdapter = (roomHDMI, deviceHDMI, roomVGA, deviceVGA) => {
    //test both (prevents infinite loop)
    if (
      roomHDMI === true &&
      deviceHDMI === false &&
      (roomVGA === true && deviceVGA === false)
    ) {
      return `${this.state.deviceData.adapterHDMI} or a ${
        this.state.deviceData.adapterVGA
      }`
    }
    //test HDMI
    else if (roomHDMI === true && deviceHDMI === false) {
      return this.state.deviceData.adapterHDMI
    }
    //test VGA
    else if (roomVGA === true && deviceVGA === false) {
      return this.state.deviceData.adapterVGA
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="tile-wrapper">
          {this.state.rooms.length === 0 &&
            this.state.buildings.map((building, index) => (
              <Tile
                key={index}
                text={building}
                id={building}
                func={this.setBuilding}
              />
            ))}
          {!this.state.room &&
            this.state.rooms.map((room, index) => (
              <Tile key={index} text={room} id={room} func={this.setRoom} />
            ))}
          {this.state.room &&
            this.state.devices.map((dev, index) => (
              <Tile
                key={index}
                id={dev._id}
                text={dev.name}
                func={this.setDevice}
              />
            ))}
        </div>
        {this.state.device ? (
          this.adapterCheck(
            this.state.roomHDMI,
            this.state.deviceHDMI,
            this.state.roomVGA,
            this.state.deviceVGA,
          ) ? (
            <Negative
              roomData={this.state.roomData}
              deviceData={this.state.deviceData}
              getDeviceAdapter={this.getDeviceAdapter}
              whichAdapter={this.whichAdapter}
            />
          ) : (
            <Positive />
          )
        ) : null}
      </div>
    )
  }
}

export default App
