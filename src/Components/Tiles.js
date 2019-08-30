import React, { useContext } from 'react'
import { AppContext } from '../Provider'
import Tile from './Tile'

function Tiles() {
  const {
    rooms,
    buildings,
    room,
    getRooms,
    device,
    devices,
    getRoomData,
    roomData,
    getDeviceData,
    deviceData,
    adapterCheck,
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
      {console.log(room)}
      {room &&
        !device &&
        devices.map((dev, index) => (
          <Tile key={index} id={dev.id} text={dev.name} func={getDeviceData} />
        ))}

      {adapterCheck(
        roomData.hasHDMI,
        deviceData.hasHDMI,
        roomData.hasVGA,
        deviceData.hasVGA,
      )
        ? console.log(true)
        : console.log(
            roomData.hasHDMI,
            deviceData.hasHDMI,
            roomData.hasVGA,
            deviceData.hasVGA,
          )}
    </div>
  )
}
export default Tiles
