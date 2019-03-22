/* eslint-disable */
import React from 'react'
import { render } from 'react-testing-library'
import Positive from '../Positive'

describe('Header Component Test', () => {
  test('It renders', () => {
    const { getByText } = render(<Positive />)
    expect(getByText(/^You're All Set!/)).toBeTruthy()
  })
})
