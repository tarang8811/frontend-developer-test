import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

const screenWidth = width < height ? width : height
const screenHeight = width < height ? height : width

const metrics = {
  screenWidth: screenWidth,
  screenHeight: screenHeight,
  fixedBarWidth: 280,
  barSpace: 10,
  panelWidth: width - 56,
  ripple_end_size: 15,
  ripple_time_per_size: 300,
  ripples: {
    size1: 1.5,
    size2: 3.5,
    size3: 5,
    size4: 8.5,
    size5: 12
  }
}

export const isIphoneX = () => {
  const isIPhoneXSize = height == 812 || width == 812
  const isIPhoneXrSize = height == 896 || width == 896
  return (Platform.OS === 'ios' && isIPhoneXSize) || isIPhoneXrSize
}

export default metrics
