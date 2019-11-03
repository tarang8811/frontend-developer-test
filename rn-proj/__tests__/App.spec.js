import 'react-native'
import React from 'react'
import { create } from 'react-test-renderer'

import App from '../App'

jest.mock('@Containers/Main', () => 'Main')

describe('App', () => {
  it('renders correctly', () => {
    const tree = create(<App skipTest />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
