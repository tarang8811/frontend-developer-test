import React, { Component } from 'React'
import { Image, TouchableOpacity, View } from 'react-native'
import styles from './TapableImagesStyles'
import Carousel from '@Components/Carousel'
import PropTypes from 'prop-types'

class TapableImages extends Component {
  static defaultProps = {
    images: []
  }

  static propTypes = {
    images: PropTypes.array.isRequired
  }

  state = { index: 0 }
  images = []
  cref = null

  next = () => {
    const nextState = this.state.index + 1
    if (this.props.images.length > nextState) {
      this.setState({ index: nextState })
      this.cref.animate(nextState)
    }
  }

  prev = () => {
    const nextState = this.state.index - 1
    if (nextState >= 0) {
      this.setState({ index: nextState })
      this.cref.animate(nextState)
    }
  }

  render() {
    return (
      <View style={styles.scroll}>
        <Image
          style={styles.icon}
          source={{
            uri: this.props.images[this.state.index].url,
            cache: 'force-cache'
          }}
          resizeMode="cover"
        />
        <TouchableOpacity style={styles.prevStyle} onPress={this.prev} />
        <TouchableOpacity style={styles.nextStyle} onPress={this.next} />
        <Carousel ref={ref => (this.cref = ref)} images={this.props.images} />
      </View>
    )
  }
}

export default TapableImages
