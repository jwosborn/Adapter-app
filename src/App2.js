import React, { useState, useEffect } from 'react'
import Header from './Components/Header'
import Positive from './Components/Positive'
import Negative from './Components/Negative'
import Tile from './Components/Tile'
import styled from 'styled-components'
import {
  getBuildings,
  getBuilding,
  getDevices,
  getDevice,
  getRoom,
} from './Utils/Requests'

function App2() {
  const [buildings, setBuildings] = useState([])
  const [building, setBuilding] = useState('')
  const [rooms, setRooms] = useState([])
  const [room, setRoom] = useState('')
  const [roomData, setRoomData] = useState({})
  const [device, setDevice] = useState(null)
  const [devices, setDevices] = useState([])
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

  const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    text-align: center;
    font-family: 'Nunito', sans-serif;
    background: #fff;
  `
  const TileWrapper = styled.div`
  display: block; 
  margin-top: 5vh;
  background: #FFF;
  @media (max-width: 750px) {
    display: inline-block;
    overflow-x: hidden;
    overflow-y: hidden: 
  }
`

  return (
    <Wrapper>
      <Header />
      <TileWrapper>
        {rooms.length === 0 &&
          buildings.map((building, index) => (
            <Tile
              key={index}
              text={building}
              id={building}
              func={setBuilding}
            />
          ))}
      </TileWrapper>
    </Wrapper>
  )
}
export default App2
