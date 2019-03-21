/* eslint-disable */
import React from 'react'
import { render } from 'react-testing-library'
import Link from './Link'

describe('Link Component Test', () => {
  test('It renders', () => {
    const { getByText } = render(
      <Link whichAdapter="hdmi" whichLink="http://www.test.com" />,
    )
    expect(getByText(/^You can buy a hdmi/)).toBeTruthy()
  })
})
