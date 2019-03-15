import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #27d4b6;
  width: 75vw;
  margin: auto;
  margin-top: 15px;
  padding: 25px 0 25px;
`

const Positive = () => {
  return (
    <Wrapper>
      <h1>You're All Set!</h1>
    </Wrapper>
  )
}

export default Positive
