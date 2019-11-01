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
    margin: 20
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.black
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    bottom: 40
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
  },
  infoView: {
    margin: 20,
    height: 500
  },
  flex: {
    flex: 1
  },
  aboutView: {
    marginHorizontal: 20,
    marginVertical: 8
  },
  aboutText: {
    color: Colors.lightBlue,
    fontSize: 14,
    marginTop: 10
  },
  desiresText: {
    backgroundColor: Colors.pink,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    color: Colors.snow,
    alignSelf: 'flex-start',
    overflow: 'hidden',
    marginRight: 10
  },
  desiresView: {
    marginHorizontal: 20,
    marginVertical: 8,
    height: 'auto',
    flexWrap: 'wrap'
  },
  desiresTextView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10
  }
})

export default styles
