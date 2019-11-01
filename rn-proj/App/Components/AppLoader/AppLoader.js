import React, { Component } from 'react'
import { Image, View, Animated } from 'react-native'
import { connect } from 'react-redux'
import RippleEffect from './RippleEffect'
import styles from './style'
import { Colors } from '@Themes/'

class AppLoader extends Component {
  render() {
    if (!this.props.showLoader) return null
    return (
      <View style={[styles.gradientContainer]}>
        <RippleEffect />
        <View style={styles.logoContainer}>
          <Image
            source={require('../../../assets/feeld-logo.png')}
            style={{ height: 50, width: 50, borderRadius: 25 }}
          />
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
