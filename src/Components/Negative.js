import React from 'react'

const Negative = ({ ishidden, getDeviceAdapter, getAdapterLink }) => {
  if (ishidden === false) {
    return (
      <div id="adapter">
        <h1>
          You'll need a
          <br />
          {getDeviceAdapter()}
          <br />
          Adapter
        </h1>
        <h2>
          Contact Classroom Technology at 502-897-4007 or email us by clicking{' '}
          <a href="mailto:classroomtechnology@sbts.edu">here</a>
        </h2>
        {getAdapterLink()}
      </div>
    )
  }
  return null
}

export default Negative
