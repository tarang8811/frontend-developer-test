import React, { PureComponent } from 'react'
import { AppLoading } from 'expo'
import Main from '@Containers/Main'
import * as Font from 'expo-font'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { Asset } from 'expo-asset'
import { Assets } from '@Themes'

class App extends PureComponent {
  state = {
    isLoadingComplete: false
  }

  cacheFonts = fonts => {
    return fonts.map(font => Font.loadAsync(font))
  }

  loadResourcesAsync = async () => {
    /* eslint-disable global-require */
    const fontAssets = this.cacheFonts([Entypo.font, Ionicons.font])
    return Promise.all([
      Asset.fromModule(Assets.logo).downloadAsync(),
      fontAssets
    ])
  }

  handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error) // eslint-disable-line no-console
  }

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }

  render() {
    const { isLoadingComplete } = this.state
    const { skipTest } = this.props // required so that app loading is not called when running tests

    if (!isLoadingComplete && !skipTest) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      )
    }

    return <Main />
  }
}

export default App
