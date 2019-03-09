import React from 'react'
import Link from './Link'

const Negative = ({ ishidden, getDeviceAdapter, deviceData }) => {
  if (ishidden === false) {
    return (
      <div id="adapter">
        <h1>
          You'll need a
          <br />
          {getDeviceAdapter(deviceData.adapterHDMI, deviceData.adapterVGA)}
          <br />
          Adapter
        </h1>
        <h2>
          Contact Classroom Technology at 502-897-4007 or email us by clicking{' '}
          <a href="mailto:classroomtechnology@sbts.edu">here</a>
        </h2>
        {/* <Link 
          adapterName1={''}
          adapterName2={''}
          twoAdapters={bool}
          adapterLink1={''}
          adapterLink2={''}
        /> */}
      </div>
    )
  }
  return null
}

export default Negative
