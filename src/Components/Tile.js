import React from 'react'

const upperFirst = text => {
  return typeof text === 'string'
    ? text.charAt(0).toUpperCase() + text.slice(1)
    : text
}

const Tile = ({ text, func, id }) => (
  <div className="tile" onClick={() => func(id)}>
    <h5 className="text">{upperFirst(text)}</h5>
  </div>
)

export default Tile
