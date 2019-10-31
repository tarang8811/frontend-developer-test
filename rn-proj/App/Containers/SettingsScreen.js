import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import I18n from '@I18n'

export default class SettingsScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>{I18n.t("settingsScreen")}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
