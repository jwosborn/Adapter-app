/* eslint-disable */
import React from 'react'
import { render, wait, fireEvent } from 'react-testing-library'
import App from './App'

/*
 * This is an integration test. An integration test is where large parts
 * of the app are tested at once. You want to focus on 'moving parts'
 * 
 * The first test should check to see if the Building Tiles render in the DOM.
 * 
 * Becuase these tiles are rendered asyncronously, you have to use a special
 * helper function called wait(), which is a part of react-testing-library.
 ! This function allows async to complete before running a test. 
 */

describe('App Integration Test', () => {
  test('Building Tiles populate', () => {
    expect(true).toBeTruthy()
  })
})
