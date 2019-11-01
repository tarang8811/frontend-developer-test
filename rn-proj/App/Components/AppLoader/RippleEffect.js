import React, { Component } from 'react'
import { View, Animated, Easing, StyleSheet } from 'react-native'
import styles from './style'

const END_SIZE = 15
const TIME_PER_SIZE = 300

const RIPPLES = {
  size1: 1.5,
  size2: 3.5,
  size3: 5,
  size4: 8.5,
  size5: 12
}

const getConfig = (toValue, duration) => ({
  toValue,
  duration,
  easing: Easing.linear,
  useNativeDriver: true
})

class RippleEffect extends Component {
  state = {
    ...Object.keys(RIPPLES).reduce(
      (r, key) => Object.assign(r, { [key]: new Animated.Value(RIPPLES[key]) }),
      {}
    )
  }

  animateRipple = (startingValue, key) => {
    const reset = Animated.timing(this.state[key], getConfig(0.1, 1))
    const anim1 = Animated.timing(
      this.state[key],
      getConfig(END_SIZE, (END_SIZE - startingValue) * TIME_PER_SIZE)
    )
    const anim2 = Animated.timing(
      this.state[key],
      getConfig(startingValue, startingValue * TIME_PER_SIZE)
    )

    // Animation is done in squence from
    // start value -> final value
    // final -> 0 (immediate)
    // 0 -> start value (immediate) and then looped
    return Animated.sequence([anim1, reset, anim2])
  }

  componentDidMount() {
    const ripples = Object.keys(RIPPLES).map(k =>
      this.animateRipple(RIPPLES[k], k)
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
        {Object.keys(RIPPLES).map(k => this.renderRipple(k))}
      </View>
    )
  }
}

export default RippleEffect
