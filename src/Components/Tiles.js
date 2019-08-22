import React, { useContext } from 'react'
import { AppContext } from '../Provider'
import Tile from './Tile'

function Tiles() {
  const { rooms, buildings, setBuilding, room, setRoom } = useContext(
    AppContext,
  )
  return (
    <div>
      {rooms.length === 0 &&
        buildings.map((building, index) => (
          <Tile key={index} text={building} id={building} func={setBuilding} />
        ))}
      {room === '' &&
        rooms.map((room, index) => (
          <Tile
            key={index}
            text={room.roomNumber}
            id={room.roomNumber}
            func={setRoom}
          />
        ))}
    </div>
  )
}
export default Tiles
