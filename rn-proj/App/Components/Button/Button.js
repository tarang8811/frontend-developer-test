import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default class Button extends Component {
  static defaultProps = {
    disabled: false,
    text: '',
    children: ''
  }

  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    textStyle: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.array,
      PropTypes.object
    ]),
    onPress: PropTypes.func,
    text: PropTypes.string,
    children: PropTypes.string,
    upperCaseText: PropTypes.bool,
    disabled: PropTypes.bool,
    testID: PropTypes.string
  }

  getText() {
    const buttonText = this.props.text || this.props.children
    return this.props.upperCaseText ? buttonText.toUpperCase() : buttonText
  }

  render() {
    return (
      <TouchableOpacity
        disabled={this.props.disabled}
        style={[styles.button, this.props.style]}
        onPress={this.props.onPress}
        testID={this.props.testID}
      >
        <LinearGradient
          colors={this.props.colors}
          style={this.props.gradientStyle}
        >
          <Text style={[styles.buttonText, this.props.textStyle]}>
            {this.getText()}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 2,
    marginVertical: 10,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 12,
    marginVertical: 10
  }
})
