import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Animated
} from 'react-native'

const deviceWidth = Dimensions.get('window').width
const FIXED_BAR_WIDTH = 280
const BAR_SPACE = 10

class Carousel extends Component {
  animVal = new Animated.Value(0)
  itemWidth = 0

  animate = index => {
    Animated.timing(this.animVal, {
      toValue: index > 0 ? (this.itemWidth + BAR_SPACE) * index : 0,
      delay: 0,
      duration: 200
    }).start()
  }

  render() {
    this.itemWidth =
      FIXED_BAR_WIDTH / this.props.images.length -
      (this.props.images.length - 1) * BAR_SPACE

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
                  marginLeft: index === 0 ? 0 : BAR_SPACE
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

Carousel.propTypes = {}

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
    backgroundColor: '#ccc',
    overflow: 'hidden',
    height: 2,
    zIndex: 14
  },
  bar: {
    flex: 1,
    backgroundColor: '#5294d6',
    height: 2,
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 16
  }
})
