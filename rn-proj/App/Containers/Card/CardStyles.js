import { StyleSheet, Dimensions } from 'react-native'

import { Colors } from '@Themes'

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    height: (2 * height) / 3,
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
  pricingContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 77,
    width: 232,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.lightGray
  },
  sexualityTextView: {
    backgroundColor: Colors.pink,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 25,
    alignSelf: 'center',
    width: 'auto',
    marginTop: 20,
    marginBottom: 10
  },
  sexualityText: {
    color: Colors.snow
  },
  nameView: {
    alignItems: 'center',
    marginVertical: 10
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black
  },
  aboutView: {
    alignItems: 'center'
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
    justifyContent: 'center'
  }
})

export default styles
