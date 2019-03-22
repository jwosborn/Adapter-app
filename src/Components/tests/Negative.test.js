/* eslint-disable */
import React from 'react'
import { render } from 'react-testing-library'
import Negative from '../Negative'

describe('Negative Component Test', () => {
  test('It renders', () => {
    const { getByText } = render(
      <Negative whichLink="http://www.test.com" whichAdapter="vga" />,
    )
    expect(getByText(/^Contact Classroom Technology/)).toBeTruthy()
  })
})
