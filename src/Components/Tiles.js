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
  }

  setBuilding = building => {
    axios
      .get(`http://localhost:4000/api/buildings/${building}/rooms`)
      .then(res => {
        this.setState({ building: building, rooms: res.data })
      })
  }

  setRoom = room => {
    const { building } = this.state
    axios
      .get(`http://localhost:4000/api/buildings/${building}/${room}`)
      .then(res => {
        this.setState({ room: room, roomData: res.data[0] })
      })
  }

  componentDidMount() {
    axios.get('http://localhost:4000/api/buildings').then(res => {
      this.setState({ buildings: res.data })
    })
  }

  render() {
    const { buildings, rooms } = this.state
    return (
      <div className="tile-wrapper">
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
