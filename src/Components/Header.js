import React, { Component } from 'react'
import logo from '../Assets/SBTSlogo.jpg'
import styled from 'styled-components'
import { Connectivity } from 'grommet-icons'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row
  justify-content: space-between;
  background: #f8f9f7;
  padding-top: 5vh;
`
const Title = styled.span`
  margin: auto;
  margin-bottom: 5vh;
  font-family: 'Nunito';
  font-size: 5em;
  color: #6e4ba3;
  text-shadow: 2px 2px 2px gray;
  @media (max-width: 750px) {
    margin: auto;
  }
`

const Logo = styled.img`
  position: relative;
  left: 2.5vw;
  height: 100px;
  width: 100px;
  opacity: 0.75;
  border-radius: 10px 10px 10px 10px;
  @media (max-width: 750px) {
    display: none;
  }
`

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Logo src={logo} alt="SBTS Logo" />
        <Title>Do I Need An Adapter?</Title>
      </Wrapper>
    )
  }
}

export default Header
