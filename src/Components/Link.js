import React from 'react'
import { Amazon } from 'grommet-icons'
import styled from 'styled-components'

const Anchor = styled.a`
  color: #75c8ed;
  margin: 0 7px;
`

const Message = styled.h2`
  margin-right: 15px;
`

//  Dynamic Link Population
const Link = ({ whichAdapter, whichLink }) => {
  return (
    <div>
      <Message>
        You can buy a {whichAdapter}
        adapter by clicking
        <Anchor href={whichLink}>here</Anchor>{' '}
        <Amazon size="small" color="#6e4ba3" />
      </Message>
      {whichLink.length === 2 ? (
        <h2>
          or{' '}
          <Anchor noreferrer noopener href={whichLink[1]}>
            here
          </Anchor>
          <Amazon size="small" color="#6e4ba3" />
        </h2>
      ) : null}
    </div>
  ) //return
} //component

export default Link
