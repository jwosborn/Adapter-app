import React, { Component } from 'react'

//  Dynamic Link Population
class Link extends Component {
  render() {
    return (
      <div>
        <h2>
          You can buy an {this.props.adapterName1} adapter by clicking{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={this.props.adapterLink1}
          >
            here
          </a>
        </h2>
        {this.props.twoAdapters ? (
          <h2>
            You can also buy an {this.props.adapterName2} adapter by clicking{' '}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={this.props.adapterLink2}
            >
              here
            </a>
          </h2>
        ) : null}
      </div>
    )
  }
}

export default Link
