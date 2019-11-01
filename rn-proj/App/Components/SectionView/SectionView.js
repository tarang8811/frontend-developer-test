import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const SectionView = ({ label, style, childrenStyle, children }) => (
  <View style={[styles.container, style]}>
    {!!label && <Text>{label}</Text>}
    <View style={[styles.childrenContainer, childrenStyle]}>{children}</View>
  </View>
)

SectionView.propTypes = {}

export default SectionView

const styles = StyleSheet.create({
  // container: {
  //   flex: 1
  // },
  // childrenContainer: {
  //   flex: 1
  // }
})
