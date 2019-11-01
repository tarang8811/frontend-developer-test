import React, { Component } from 'React'
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Button
} from 'react-native'
import styles from './ScrollableImagesStyles'

class ScrollableImages extends Component {
  render() {
    return (
      <ScrollView style={styles.scroll}>
        {this.props.images.map(i => (
          <Image
            style={styles.icon}
            source={{
              uri: this.props.images[i].url,
              cache: 'force-cache'
            }}
            resizeMode="cover"
          />
        ))}
      </ScrollView>
    )
  }
}

export default ScrollableImages
