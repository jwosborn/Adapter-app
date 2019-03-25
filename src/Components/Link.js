import React from 'react'
import { Amazon } from 'grommet-icons'
import styled from 'styled-components'

const Anchor = styled.a`
  color: #337ab7;
  margin: 0 5px;
`

const Message = styled.h2`
  margin-right: 15px;
  color: #fff;
`

//  Dynamic Link Population
const Link = ({ whichAdapter, whichLink }) => {
  return (
    <div>
      <Message>
        You can buy a {whichAdapter}
        adapter by clicking
        <Anchor href={whichLink}>here</Anchor>{' '}
        <Amazon size="small" color="#337ab7" />
      </Message>
      {whichLink.length === 2 ? (
        <Message>
          or{' '}
          <Anchor noreferrer noopener href={whichLink[1]}>
            here
          </Anchor>
          <Amazon size="small" color="#337ab7" />
        </Message>
      ) : null}
    </div>
  ) //return
} //component

export default Link
