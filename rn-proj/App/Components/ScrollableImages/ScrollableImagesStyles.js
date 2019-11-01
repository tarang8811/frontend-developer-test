import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '@Themes/'

const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
  scroll: {
    height: (2 * height) / 5,
    width: '100%',
    overflow: 'scroll'
  },
  icon: {
    height: (2 * height) / 5,
    width: width
  }
})
