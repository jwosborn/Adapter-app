import React, { Component } from 'react'

//  Dynamic Link Population
class Link extends Component {
  render() {
    return (
      <div>
        <h2>
          You can buy an {adapterName1} adapter by clicking{' '}
          <a rel="noopener noreferrer" target="_blank" href={adapterLinkHDMI}>
            here
          </a>
        </h2>
      </div>
    )
  }
}

export default Link
