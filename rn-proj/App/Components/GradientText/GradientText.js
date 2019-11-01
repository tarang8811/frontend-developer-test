import React from 'React'
import { StyleSheet, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '@Themes'
import PropTypes from 'prop-types'

export default GradientText = ({ label, colors, gradientStyle }) => (
  <LinearGradient colors={colors} style={[styles.gradientStyle, gradientStyle]}>
    <Text key={label} style={styles.text}>
      {label}
    </Text>
  </LinearGradient>
)

GradientText.propTypes = {
  label: PropTypes.string.isRequired,
  colors: PropTypes.array,
  gradientStyle: PropTypes.object
}

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    color: Colors.snow,
    alignSelf: 'flex-start',
    overflow: 'hidden'
  },

  gradientStyle: {
    borderRadius: 12,
    marginRight: 10
  }
})
