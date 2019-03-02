import React, { Component } from 'react'
import Tile from './Tile'
import axios from 'axios'

class Tiles extends Component {
  state = {
    buildings: [],
  }

  componentDidMount() {
    axios.get('http://localhost:4000/api/buildings').then(buildings => {
      console.log(buildings)
    })
  }

  render() {
    const { buildings } = this.props
    return (
      <div className="tile-wrapper">
        {buildings.map((building, index) => (
          <Tile key={index} building={building.roomNumber} />
        ))}
      </div>
    )
  }
}
export default Tiles
