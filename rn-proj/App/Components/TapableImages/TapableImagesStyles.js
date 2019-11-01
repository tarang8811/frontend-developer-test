import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '@Themes/'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
  scroll: {
    height: (2 * height) / 5,
    width: '100%',
    alignItems: 'center',
    overflow: 'hidden',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
  },
  icon: {
    height: (2 * height) / 5,
    width: '100%'
  },
  prevStyle: {
    position: 'absolute',
    left: 0,
    height: (2 * height) / 5,
    zIndex: 10,
    width: '50%'
  },
  nextStyle: {
    position: 'absolute',
    right: 0,
    height: (2 * height) / 5,
    zIndex: 10,
    width: '50%'
  }
})
