import React, { Component } from 'react'
import logo from '../Assets/SBTSlogo.jpg'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: linear-gradient(lightgray, darkgray);
`

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <img className="logo-img" src={logo} alt="SBTS Logo" />
        <span className="app-title">Do I Need An Adapter?</span>
      </Wrapper>
    )
  }
}

export default Header
