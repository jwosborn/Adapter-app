import React, { useContext } from 'react'
import { AppContext } from '../Provider'
import Tile from './Tile'
import { getBuilding, getDevice, getRoom } from '../Utils/Requests'

function Tiles() {
  const {
    rooms,
    buildings,
    room,
    roomData,
    getRooms,
    device,
    devices,
    setDevice,
    getRoomData,
  } = useContext(AppContext)
  return (
    <div>
      {rooms.length === 0 &&
        buildings.map((build, index) => (
          <Tile key={index} text={build} id={build} func={getRooms} />
        ))}
      {room === '' &&
        rooms.map((room, index) => (
          <Tile
            key={index}
            text={room.roomNumber}
            id={room.roomNumber}
            func={getRoomData}
          />
        ))}
      {room &&
        !device &&
        devices.map((dev, index) => (
          <Tile key={index} id={dev.id} text={dev.name} func={setDevice} />
        ))}
      {console.log(room)}
    </div>
  )
}
export default Tiles
