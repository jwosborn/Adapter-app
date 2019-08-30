import React, { useState, useEffect } from 'react'
import {
  getBuildings,
  getDevices,
  getDevice,
  getBuilding,
  getRoom,
} from './Utils/Requests'
export const AppContext = React.createContext()

export const AppContextProvider = ({ children }) => {
  const [buildings, setBuildings] = useState([])
  const [devices, setDevices] = useState([])
  const [building, setBuilding] = useState('')
  const [rooms, setRooms] = useState([])
  const [room, setRoom] = useState('')
  const [roomData, setRoomData] = useState({})
  const [device, setDevice] = useState(null)
  const [deviceData, setDeviceData] = useState({})
  const [roomHDMI, setRoomHDMI] = useState('')
  const [deviceHDMI, setDeviceHDMI] = useState('')
  const [roomVGA, setRoomVGA] = useState('')
  const [deviceVGA, setDeviceVGA] = useState('')
  const [adapterHDMI, setAdapterHDMI] = useState('')
  const [adapterVGA, setAdapterVGA] = useState('')
  const [linkHDMI, setLinkHDMI] = useState('')
  const [linkVGA, setLinkVGA] = useState('')

  useEffect(() => {
    getBuildings().then(res => {
      setBuildings(res.data)
    })
    getDevices().then(res => {
      setDevices(res.data)
    })
  }, [])

  function getRooms(id) {
    getBuilding(id).then(res => {
      setBuilding(id)
      setRooms(res.data)
    })
  }

  function getRoomData(id) {
    getRoom(id, building)
      .then(res => {
        setRoom(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  function getDeviceData(id) {
    getDevice(id).then(res => {
      setDevice(res.data.id)
      console.log(res.data)
    })
  }

  const context = {
    buildings,
    setBuildings,
    building,
    setBuilding,
    devices,
    setDevices,
    device,
    setDevice,
    deviceData,
    setDeviceData,
    rooms,
    setRooms,
    room,
    setRoom,
    roomData,
    setRoomData,
    roomHDMI,
    setRoomHDMI,
    roomVGA,
    setRoomVGA,
    deviceHDMI,
    setDeviceHDMI,
    deviceVGA,
    setDeviceVGA,
    adapterHDMI,
    setAdapterHDMI,
    adapterVGA,
    setAdapterVGA,
    linkHDMI,
    setLinkHDMI,
    linkVGA,
    setLinkVGA,
    getRooms,
    getRoomData,
    getDeviceData,
  }
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

export const Consumer = AppContext.Consumer
export default AppContextProvider
