import React from 'react'

//  Dynamic Link Population
const Link = ({ whichAdapter, whichLink }) => {
  return (
    <div>
      <h2>
        You can buy a {whichAdapter}
        adapter by clicking{' '}
        <a noreferrer noopener href={whichLink}>
          here
        </a>{' '}
      </h2>
      {whichLink.length === 2 ? (
        <h2>
          or{' '}
          <a noreferrer noopener href={whichLink[1]}>
            here
          </a>
        </h2>
      ) : null}
    </div>
  ) //return
} //component

export default Link
