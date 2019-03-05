import React from 'react'

const upperFirst = text => {
  return typeof text === 'string'
    ? text.charAt(0).toUpperCase() + text.slice(1)
    : text
}

const Tile = ({ text, func }) => (
  <div className="tile" onClick={() => func(text)}>
    <h5 className="text">{upperFirst(text)}</h5>
  </div>
)

export default Tile
