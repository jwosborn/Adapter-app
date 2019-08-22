import React, { useContext } from 'react'
import { AppContext } from '../Provider'
import Tile from './Tile'

function Tiles() {
  const context = useContext(AppContext)
  return (
    <div>
      {context.rooms.length === 0 &&
        context.buildings.map((building, index) => (
          <Tile
            key={index}
            text={building}
            id={building}
            func={context.setBuilding}
          />
        ))}
      {context.room === '' &&
        context.rooms.map((room, index) => (
          <Tile
            key={index}
            text={room.roomNumber}
            id={room.roomNumber}
            func={context.setRoom}
          />
        ))}
    </div>
  )
}
export default Tiles
