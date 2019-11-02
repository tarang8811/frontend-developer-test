import React, { Component } from 'react'
import { Provider } from 'react-redux'
import '../I18n/I18n'
import RootContainer from './RootContainer'
import createStore from '@Redux'

const { store } = createStore()

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

export default Main
