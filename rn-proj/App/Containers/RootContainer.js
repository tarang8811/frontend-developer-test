import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import AppNavigation from '@Navigation/AppNavigation'

class RootContainer extends Component {
  render = () => (
    <View style={styles.applicationView}>
      <AppNavigation />
      {/* {this.props.showSplashScreen && (
        <SplashScreen onDone={this.props.hideSplashScreen} />
      )} */}
    </View>
  )
}

export default RootContainer

const styles = StyleSheet.create({
  applicationView: {
    flex: 1
  },
});

