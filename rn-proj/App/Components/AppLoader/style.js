import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '@Themes'

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  logoContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  logo: {
    width: 52
  },
  logoText: {
    height: 25,
    width: 180
  },
  world: {
    width: Metrics.screenWidth
  },
  whiteRipple: {
    backgroundColor: Colors.snow
  },
  rippleContainer: {
    position: 'absolute',
    backgroundColor: Colors.gradientPurpleAlpha,
    left: Metrics.screenWidth / 2 - 10,
    top: Metrics.screenHeight / 2 - 10,
    height: 20,
    width: 20,
    borderRadius: 10
  },
  absoluteContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  gradientContainer: {
    position: 'absolute',
    zIndex: 1033,
    height: '100%',
    width: '100%',
    overflow: 'visible',
    margin: 'auto',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: Colors.whisper
  },
  logo: {
    height: 50,
    width: 50,
    borderRadius: 25
  }
})
