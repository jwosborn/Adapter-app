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
 *
 * You'll also notice fireEvent() pulled off of react-testing-library. 
 * This funciton will fire any DOM event, and then you can test for the changes. 
 ! In this case, you will fire a click event on a Tile, and you'll check for 
 ! the changed DOM (api call)
 */

describe('App Integration Test', () => {
  test('Building Tiles populate', () => {
    expect(true).toBeTruthy()
  })
})
