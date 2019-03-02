import React, { Component } from 'react'

const upperFirst = text => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

const Tile = ({ building, func }) => (
  <div className="tile" onClick={() => func(building)}>
    <h5 className="text">{upperFirst(building)}</h5>
  </div>
)

export default Tile
