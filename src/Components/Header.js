import React, { Component } from 'react'
import logo from '../Assets/SBTSlogo.jpg'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: #3a3a3a;
  padding-top: 5vh;
`
const Title = styled.span`
  margin-bottom: 5vh;
  font-family: monospace;
  font-size: 5em;
  color: #00d2ff;
  text-shadow: 2px 2px 2px dodgerblue;
`

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <img className="logo-img" src={logo} alt="SBTS Logo" />
        <Title>Do I Need An Adapter?</Title>
      </Wrapper>
    )
  }
}

export default Header
