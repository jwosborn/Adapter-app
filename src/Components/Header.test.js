/* eslint-disable */
import React from 'react'
import { render } from 'react-testing-library'
import Header from './Header'

describe('Header Component Test', () => {
  test('It renders', () => {
    const { getByText } = render(<Header />)
    expect(getByText(/^Do I Need An Adapter?/)).toBeTruthy()
  })
})
