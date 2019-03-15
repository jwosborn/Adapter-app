import React from 'react'
import Link from './Link'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #a71d1d;
  width: 85vw;
  margin: auto;
`
const Title = styled.h1`
  color: white;
`
const Contact = styled.h2`
  color: white;
`

const Negative = ({ whichLink, whichAdapter }) => {
  return (
    <Wrapper>
      <Title>
        You'll need a
        <br />
        {whichAdapter}
        <br />
        Adapter
      </Title>
      <Contact>
        Contact Classroom Technology at 502-897-4007 or email us by clicking{' '}
        <a href="mailto:classroomtechnology@sbts.edu">here</a>
      </Contact>
      <Link whichAdapter={whichAdapter} whichLink={whichLink} />
    </Wrapper>
  )
}

export default Negative
