import React from 'react'
import Link from './Link'

const Negative = ({ whichLink, whichAdapter }) => {
  return (
    <div id="adapter">
      <h1>
        You'll need a
        <br />
        {whichAdapter}
        <br />
        Adapter
      </h1>
      <h2>
        Contact Classroom Technology at 502-897-4007 or email us by clicking{' '}
        <a href="mailto:classroomtechnology@sbts.edu">here</a>
      </h2>
      <Link whichAdapter={whichAdapter} whichLink={whichLink} />
    </div>
  )
}

export default Negative
