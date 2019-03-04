import React, { Component } from 'react'
import axios from 'axios'

class Select extends Component {
  componentDidMount() {
    axios
      .get('http://localhost:4000/buildings')
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <div className="Choice-parent">
        <div>
          <label htmlFor="Room-List" className="label-text">
            Choose Your Classroom:
          </label>
          <br />
          <select
            className="Room-list"
            id="Room-list"
            onChange={e => this.props.roomLogic(e)}
          >
            <option disabled selected>
              Choose Your Classroom
            </option>
            {/* {
              buildings.map(x => (
                <option>
                  {x}
                </option>
              ))
            } */}
          </select>
        </div>
        <div>
          <label htmlFor="Device-List" className="label-text">
            Choose Your Device:
          </label>
          <br />
          <select
            className="Device-list"
            onChange={e => this.props.getDeviceTarget(e)}
          >
            <option disabled selected>
              Choose Your Device
            </option>
            {this.props.deviceList.map(op => (
              <option key={op.name} value={op.name}>
                {op.name}
              </option>
            ))}
          </select>
          <button className="submit" onClick={this.connections}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}
export default Select
