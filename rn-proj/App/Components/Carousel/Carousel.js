import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Animated } from 'react-native'
import { Metrics, Colors } from '@Themes'

class Carousel extends Component {
  animVal = new Animated.Value(0)
  itemWidth = 0

  constructor(props) {
    super(props)
    this.itemWidth =
      Metrics.fixedBarWidth / this.props.images.length -
      (this.props.images.length - 1) * Metrics.barSpace
  }

  animate = index => {
    Animated.timing(this.animVal, {
      toValue: index > 0 ? (this.itemWidth + Metrics.barSpace) * index : 0,
      delay: 0,
      duration: 200
    }).start()
  }

  render() {
    if (this.props.images.length == 1) return null
    return (
      <View style={styles.barContainer}>
        {this.props.images.map((i, index) => {
          return (
            <View
              key={`bar${index}`}
              style={[
                styles.track,
                {
                  width: this.itemWidth,
                  marginLeft: index === 0 ? 0 : Metrics.barSpace
                }
              ]}
            ></View>
          )
        })}
        <Animated.View
          style={[
            styles.bar,
            {
              width: this.itemWidth,
              transform: [{ translateX: this.animVal }]
            }
          ]}
        />
      </View>
    )
  }
}

Carousel.propTypes = {
  images: PropTypes.array
}

export default Carousel

const styles = StyleSheet.create({
  barContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 12,
    top: 20,
    flexDirection: 'row'
  },
  track: {
    backgroundColor: Colors.carouselTrack,
    overflow: 'hidden',
    height: 2,
    zIndex: 14
  },
  bar: {
    flex: 1,
    backgroundColor: Colors.gradientPurple,
    height: 2,
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 16
  }
})
