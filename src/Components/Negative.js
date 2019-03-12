import React from 'react'
import Link from './Link'

const Negative = ({ whichLink, whichAdapter, roomData, deviceData }) => {
  return (
    <div id="adapter">
      <h1>
        You'll need a
        <br />
        {whichAdapter(
          roomData.hasHDMI,
          deviceData.hasHDMI,
          roomData.hasVGA,
          deviceData.hasVGA,
        )}
        <br />
        Adapter
      </h1>
      <h2>
        Contact Classroom Technology at 502-897-4007 or email us by clicking{' '}
        <a href="mailto:classroomtechnology@sbts.edu">here</a>
      </h2>
      <Link
        whichAdapter={whichAdapter}
        deviceData={deviceData}
        roomData={roomData}
        whichLink={whichLink}
      />
    </div>
  )
}

export default Negative
