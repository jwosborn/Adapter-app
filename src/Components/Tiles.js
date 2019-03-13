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

  deviceHDMI = this.props.deviceData.hasHDMI
  deviceVGA = this.props.deviceData.hasVGA
  roomHDMI = this.state.roomData.hasHDMI
  roomVGA = this.state.roomData.hasVGA

  componentDidMount() {}

  render() {
    const { buildings, room, rooms } = this.state
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
          this.props.devices.map((dev, index) => (
            <Tile
              key={index}
              id={dev._id}
              text={dev.name}
              func={this.props.setDevice}
            />
          ))}
      </div>
    ) //return
  } //rendermethod
} //component
export default Tiles
