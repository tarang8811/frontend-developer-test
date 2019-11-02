import React, { Component } from 'react'
import { Image, View } from 'react-native'
import { connect } from 'react-redux'
import RippleEffect from './RippleEffect'
import styles from './style'
import { Assets } from '@Themes/'

class AppLoader extends Component {
  render() {
    if (!this.props.showLoader) return null
    return (
      <View style={[styles.gradientContainer]}>
        <RippleEffect />
        <View style={styles.logoContainer}>
          <Image source={Assets.logo} style={styles.logo} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  showLoader: state.ui.showLoader
})

export default connect(
  mapStateToProps,
  null
)(AppLoader)
