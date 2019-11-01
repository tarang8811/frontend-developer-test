import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, StyleSheet } from 'react-native'
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
  Entypo
} from '@expo/vector-icons'
import { omit } from 'ramda'
import { Colors } from '@Themes'

const IconMap = {
  fa: FontAwesome,
  material: MaterialCommunityIcons,
  ion: Ionicons,
  ent: Entypo
}

export default class IconButton extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    name: PropTypes.string.isRequired
  }

  render() {
    const BaseIcon = IconMap[this.props.type] || Ionicons
    return (
      <TouchableOpacity
        style={[styles.button, this.props.style]}
        onPress={this.props.onPress}
        testID={this.props.testID}
      >
        <BaseIcon {...omit(['onPress', 'type', 'style'], this.props)} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    minHeight: 44,
    minWidth: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 22,
    backgroundColor: Colors.snow,
    elevation: 6,
    shadowColor: Colors.lightGray,
    shadowOffset: {
      width: 4,
      height: 4
    },
    shadowRadius: 10,
    shadowOpacity: 1.0,
    marginHorizontal: 20
  }
})
