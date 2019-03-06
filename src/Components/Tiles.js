import React, { Component } from 'react'
import Tile from './Tile'
import axios from 'axios'

class Tiles extends Component {
  state = {
    buildings: [],
    building: '',
    rooms: [],
    room: '',
    roomData: {},
    devices: [],
    deviceID: '',
    deviceData: {},
  }

  componentDidMount() {
    axios.get('https://adapter-api.herokuapp.com/api/buildings').then(res => {
      this.setState({ buildings: res.data })
    })
    axios.get('https://adapter-api.herokuapp.com/api/devices').then(res => {
      this.setState({ devices: res.data })
    })
  }

  setBuilding = building => {
    axios
      .get(`https://adapter-api.herokuapp.com/api/buildings/${building}/rooms`)
      .then(res => {
        this.setState({ building: building, rooms: res.data })
      })
      .catch(err => console.log(err))
  }

  setRoom = room => {
    const { building } = this.state
    axios
      .get(
        `https://adapter-api.herokuapp.com/api/buildings/${building}/${room}`,
      )
      .then(res => {
        this.setState({ room: room, roomData: res.data[0] })
      })
      .catch(err => console.log(err))
  }

  setDevice = device => {
    axios
      .get(`https://adapter-api.herokuapp.com/api/devices/${device}`)
      .then(res => {
        this.setState({ deviceID: device, deviceData: res.data })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { buildings, room, rooms, devices } = this.state
    return (
      <div className="tile-wrapper">
        {rooms.length === 0 &&
          buildings.map((building, index) => (
            <Tile
              key={index}
              text={building}
              id={building}
              func={this.setBuilding}
            />
          ))}
        {!room &&
          rooms.map((room, index) => (
            <Tile key={index} text={room} id={room} func={this.setRoom} />
          ))}
        {room &&
          devices.map((dev, index) => (
            <Tile
              key={index}
              id={dev._id}
              text={dev.name}
              func={this.setDevice}
            />
          ))}
      </div>
    ) //return
  } //rendermethod
} //component
export default Tiles
