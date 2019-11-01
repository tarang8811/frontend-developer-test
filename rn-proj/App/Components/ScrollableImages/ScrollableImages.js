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
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {this.props.images.map(i => (
          <Image
            style={styles.icon}
            source={{
              uri: i.url,
              cache: 'force-cache'
            }}
            key={i.url}
            resizeMode="cover"
          />
        ))}
      </ScrollView>
    )
  }
}

export default ScrollableImages
