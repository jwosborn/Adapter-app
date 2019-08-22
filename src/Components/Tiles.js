import React from 'react'
import { Consumer } from '../Provider'
import Tile from './Tile'

function Tiles() {
  return (
    <Consumer>
      {context => {
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
              context.rooms.map(
                (room,
                index => (
                  <Tile
                    key={index}
                    text={room}
                    id={room}
                    func={context.setRoom}
                  />
                )),
              )}
          </div>
        )
      }}
    </Consumer>
  )
}
export default Tiles
