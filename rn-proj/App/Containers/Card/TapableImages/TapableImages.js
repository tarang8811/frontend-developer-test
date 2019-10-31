import React, { Component } from 'React'
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Button
} from 'react-native'
import styles from './TapableImagesStyles'

class TapableImages extends Component {
  state = { index: 0 }
  images = []

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
      </View>
    )
  }
}

export default TapableImages
