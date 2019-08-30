import React from 'react'
import { test } from 'jest'
import { getBuildings } from '../buildings'

test('buildings populate', () => {
  return getBuildings().then(list => {
    expect(list).toContain('norton', 'cooke', 'carver', 'library', 'rankin')
  })
})
