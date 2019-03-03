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
    device: '',
  }

  setBuilding = building => {
    axios
      .get(`http://localhost:4000/api/buildings/${building}/rooms`)
      .then(res => {
        this.setState({ building: building, rooms: res.data })
      })
      .catch(err => console.log(err))
  }

  setRoom = room => {
    const { building } = this.state
    axios
      .get(`http://localhost:4000/api/buildings/${building}/${room}`)
      .then(res => {
        this.setState({ room: room, roomData: res.data[0] })
      })
      .catch(err => console.log(err))
  }

  setDevice = device => {
    this.setState({ device: device })
  }

  componentDidMount() {
    axios.get('http://localhost:4000/api/buildings').then(res => {
      this.setState({ buildings: res.data })
    })
    axios.get('http://localhost:4000/api/devices').then(res => {
      this.setState({ devices: res.data })
    })
  }

  render() {
    const { buildings, rooms, device, devices } = this.state
    return (
      <div className="tile-wrapper">
        {device &&
          devices.map((dev, index) => (
            <Tile key={index} text={dev.name} func={this.setDevice} />
          ))}
        {rooms.length === 0 &&
          buildings.map((building, index) => (
            <Tile key={index} text={building} func={this.setBuilding} />
          ))}
        {rooms &&
          rooms.map((room, index) => (
            <Tile key={index} text={room} func={this.setRoom} />
          ))}
      </div>
    )
  }
}
export default Tiles
