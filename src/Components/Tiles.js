import React, { useContext } from 'react'
import { AppContext } from '../Provider'
import Tile from './Tile'
import { getBuilding, getDevice, getRoom } from '../Utils/Requests'

function Tiles() {
  const { rooms, buildings, room, setRoom, setRooms } = useContext(AppContext)
  return (
    <div>
      {rooms.length === 0 &&
        buildings.map((build, index) => (
          <Tile key={index} text={build} id={build} func={getBuilding} />
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
