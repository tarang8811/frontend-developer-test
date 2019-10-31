import { StyleSheet } from 'react-native'
import { Colors } from '@Themes/'

export default StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: Colors.lighterGray
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonView: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  locationButtonText: {
    color: Colors.snow
  },
  button: {
    width: 120,
    height: 36,
    backgroundColor: Colors.pink,
    borderRadius: 20,
    borderWidth: 0,
    marginHorizontal: 16,
    marginTop: 20
  },
  filterButtonText: {
    color: Colors.snow
  },
  tabStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  }
})
