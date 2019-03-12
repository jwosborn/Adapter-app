import React from 'react'

//  Dynamic Link Population
const Link = ({ whichAdapter, whichLink, deviceData, roomData }) => {
  return (
    <div>
      <h2>
        You can buy a
        {whichAdapter(
          roomData.hasHDMI,
          deviceData.hasHDMI,
          roomData.hasVGA,
          deviceData.hasVGA,
        )}
        adapter by clicking{' '}
        <a
          noreferrer
          noopener
          href={whichLink(
            roomData.hasHDMI,
            deviceData.hasHDMI,
            roomData.hasVGA,
            deviceData.hasVGA,
          )}
        >
          here
        </a>
        {whichLink.length >= 2 ? (
          <a noreferrer noopener href={whichLink[1]}>
            or here
          </a>
        ) : null}
      </h2>
    </div>
  ) //return
} //component

export default Link
