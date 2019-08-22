import React from 'react'
import AppContextProvider from './Provider'
import Header from './Components/Header'
// import Positive from './Components/Positive'
// import Negative from './Components/Negative'
import Tiles from './Components/Tiles'
import styled from 'styled-components'

function App2() {
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
      <AppContextProvider>
        <TileWrapper>
          <Tiles />
          {/* {!room &&
            rooms.map((room, index) => (
              <Tile
                key={index}
                text={room.roomNumber}
                id={room.roomNumber}
                func={setRoom}
              />
            ))} */}
        </TileWrapper>
      </AppContextProvider>
    </Wrapper>
  )
}
export default App2
