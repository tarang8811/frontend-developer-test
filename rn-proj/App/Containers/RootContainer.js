import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import AppNavigation from '@Navigation/AppNavigation'
import AppLoader from '@Components/AppLoader'

class RootContainer extends Component {
  render = () => (
    <View style={styles.applicationView}>
      <AppNavigation />
      <AppLoader />
    </View>
  )
}

export default RootContainer

const styles = StyleSheet.create({
  applicationView: {
    flex: 1
  }
})
