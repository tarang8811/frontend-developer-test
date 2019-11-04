import React, { Component } from 'react'
import { View, Animated, Easing, StyleSheet } from 'react-native'
import styles from './style'
import { Metrics } from '@Themes'

const getConfig = (toValue, duration) => ({
  toValue,
  duration,
  easing: Easing.linear,
  useNativeDriver: true
})

class RippleEffect extends Component {
  state = {
    ...Object.keys(Metrics.ripples).reduce(
      (r, key) =>
        Object.assign(r, { [key]: new Animated.Value(Metrics.ripples[key]) }),
      {}
    )
  }

  animateRipple = (startingValue, key) => {
    const reset = Animated.timing(this.state[key], getConfig(0.1, 1))
    const anim1 = Animated.timing(
      this.state[key],
      getConfig(
        Metrics.ripple_end_size,
        (Metrics.ripple_end_size - startingValue) * Metrics.ripple_time_per_size
      )
    )
    const anim2 = Animated.timing(
      this.state[key],
      getConfig(startingValue, startingValue * Metrics.ripple_time_per_size)
    )

    // Animation is done in squence from
    // start value -> final value
    // final -> 0 (immediate)
    // 0 -> start value (immediate) and then looped
    return Animated.sequence([anim1, reset, anim2])
  }

  componentDidMount() {
    const ripples = Object.keys(Metrics.ripples).map(k =>
      this.animateRipple(Metrics.ripples[k], k)
    )
    const parallel = Animated.parallel(ripples)
    Animated.loop(parallel).start()
  }

  renderRipple = key => {
    return (
      <Animated.View
        key={key}
        style={[
          styles.rippleContainer,
          { transform: [{ scale: this.state[key] }] }
        ]}
      />
    )
  }

  render() {
    return (
      <View style={StyleSheet.absoluteFill}>
        {Object.keys(Metrics.ripples).map(k => this.renderRipple(k))}
      </View>
    )
  }
}

export default RippleEffect
