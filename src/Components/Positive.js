import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #7873ae;
  width: 75vw;
  margin: auto;
  margin-top: 15px;
  padding: 25px 0 25px;
`
const Message = styled.h1`
  color: white;
`

const Positive = () => {
  return (
    <Wrapper>
      <Message>You're All Set!</Message>
    </Wrapper>
  )
}

export default Positive
