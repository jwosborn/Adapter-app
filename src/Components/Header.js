import React, { Component } from 'react'
import logo from '../Assets/SBTSlogo.jpg'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: dimgray;
`
const Title = styled.span`
  font-size: 5em;
  color: navy;
  text-shadow: 2px 2px 2px lightskyblue;
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
