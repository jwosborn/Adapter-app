import React, { Component } from 'react'

const upperFirst = text => {
  return typeof text === 'string'
    ? text.charAt(0).toUpperCase() + text.slice(1)
    : text
}

const Tile = ({ building, func }) => (
  <div className="tile" onClick={() => func(building)}>
    <h5 className="text">{upperFirst(building)}</h5>
  </div>
)

export default Tile
