import { StyleSheet, Dimensions } from 'react-native'

import { Colors } from '@Themes'

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    height: (7 * height) / 10,
    borderRadius: 12,
    backgroundColor: Colors.snow,
    elevation: 3,
    shadowColor: Colors.lightGray,
    shadowOffset: {
      width: 4,
      height: 4
    },
    shadowRadius: 10,
    shadowOpacity: 1.0
  },
  sexualityTextView: {
    backgroundColor: Colors.pink,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 25,
    alignSelf: 'center',
    width: 'auto',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  sexualityIcon: {
    marginRight: 6,
    marginTop: 2
  },
  sexualityText: {
    color: Colors.snow
  },
  nameView: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 4
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black
  },
  aboutView: {
    alignItems: 'center',
    height: height / 20
  },
  aboutText: {
    paddingHorizontal: 16,
    color: Colors.lightBlue,
    fontSize: 14
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    height: height / 10
  },
  info: {
    height: 60,
    width: 60,
    borderRadius: 30
  },
  bigIconView: {
    height: 200,
    width: 200,
    position: 'absolute',
    zIndex: 1000,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: '30%'
  },
  bigHeartIcon: {
    flex: 1
  }
})

export default styles
