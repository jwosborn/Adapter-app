import React, { Component } from 'react'
import Tile from './Tile'
import axios from 'axios'

class Tiles extends Component {
  state = {
    buildings: [],
    building: '',
    rooms: [],
  }

  setBuilding = building => {
    axios
      .get(`http://localhost:4000/api/buildings/${building}/rooms`)
      .then(res => {
        this.setState({ building: building, rooms: res.data })
      })
  }

  setRoom = room => {
    //
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
            <Tile key={index} building={building} func={this.setBuilding} />
          ))}
        {rooms &&
          rooms.map((room, index) => <Tile key={index} building={room} />)}
      </div>
    )
  }
}
export default Tiles
