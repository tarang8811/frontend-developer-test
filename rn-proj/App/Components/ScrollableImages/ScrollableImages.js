import React from 'React'
import { Image, ScrollView } from 'react-native'
import styles from './ScrollableImagesStyles'
import PropTypes from 'prop-types'

export default ScrollableImages = ({ images }) => (
  <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
    {images.map(i => (
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

ScrollableImages.propTypes = {
  images: PropTypes.array.isRequired
}
