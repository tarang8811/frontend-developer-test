import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

const screenWidth = width < height ? width : height
const screenHeight = width < height ? height : width

const metrics = {
  screenWidth: screenWidth,
  screenHeight: screenHeight,
  fixedBarWidth: 280,
  barSpace: 10,
  panelWidth: width - 56
}

export const isIphoneX = () => {
  const isIPhoneXSize = height == 812 || width == 812
  const isIPhoneXrSize = height == 896 || width == 896
  return (Platform.OS === 'ios' && isIPhoneXSize) || isIPhoneXrSize
}

export default metrics
