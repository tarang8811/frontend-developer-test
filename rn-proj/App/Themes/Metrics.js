import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

const screenWidth = width < height ? width : height
const screenHeight = width < height ? height : width

const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: screenWidth,
  screenHeight: screenHeight,
  androidTabHeight: 80,
  isIOS: Platform.OS === 'ios',
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  buttonRadius: 4,
  loader: {
    small: Platform.OS === 'ios' ? 'small' : 12
  },
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  }
}

export default metrics
