import React from 'react'
import { Consumer } from '../Provider'
import Tile from './Tile'

function Tiles() {
  return (
    <Consumer>
      {context => {
        return (
          <div>
            {context.buildings.map((building, index) => (
              <Tile
                key={index}
                text={building}
                id={building}
                func={context.setBuilding}
              />
            ))}
          </div>
        )
      }}
    </Consumer>
  )
}
export default Tiles
