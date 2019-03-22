import React from 'react'
import Link from './Link'
import styled from 'styled-components'
import { MailOption } from 'grommet-icons'

const Wrapper = styled.div`
  background-color: #c8c7d5;
  width: 85vw;
  margin: auto;
`
const Title = styled.h1`
  color: #6e4ba3;
  text-shadow: 2px 2px 2px gray;
`
const Contact = styled.h2`
  color: #6e4ba3;
`
const Anchor = styled.a`
  color: #4ea4d5;
  margin-right: 7px;
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
        <Anchor href="mailto:classroomtechnology@sbts.edu">here</Anchor>
        <MailOption size="small" />
      </Contact>
      <Link whichAdapter={whichAdapter} whichLink={whichLink} />
    </Wrapper>
  )
}

export default Negative
