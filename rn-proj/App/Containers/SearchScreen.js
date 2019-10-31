import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SearchScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Open up Search.js to start working on your app!</Text>
      </View>
    )
  }
}

export default SearchScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
