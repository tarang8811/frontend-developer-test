import { StyleSheet, Platform } from 'react-native'
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
    flexDirection: 'row',
    ...Platform.select({
      android: {
        marginTop: 30
      }
    })
  },
  locationButtonText: {
    color: Colors.snow
  },
  button: {
    width: 100,
    height: 34,
    borderWidth: 0,
    marginHorizontal: 16
    // marginTop: 20
  },
  filterButtonText: {
    color: Colors.snow
  },
  tabStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gradientStyle: {
    borderRadius: 17
  }
})
