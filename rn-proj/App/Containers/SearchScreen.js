import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native'
import I18n from '@I18n'
import { connect } from 'react-redux'
import UserActions from '@Redux/UserRedux'
import AnimatedTabs from 'react-native-animated-tabs'

import styles from './UpgradeViewStyle'
import Button from '@Components/Button'
import Card from './Card'

const { width } = Dimensions.get('window')

const PANEL_WIDTH = width - 56

class SearchScreen extends Component {
  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    return (
      <SafeAreaView style={styles.flex}>
        <View style={styles.buttonView}>
          <Button
            text={'Location'}
            onPress={() => {}}
            style={styles.button}
            textStyle={styles.locationButtonText}
          />
          <Button
            text={'Filters'}
            onPress={() => {}}
            style={styles.button}
            textStyle={styles.filterButtonText}
          />
        </View>
        <AnimatedTabs
          panelStyle={styles.mainContainer}
          panelWidth={PANEL_WIDTH}
          style={styles.tabStyle}
        >
          {this.props.userData.map(user => (
            <Card key={user.id} {...user} />
          ))}
        </AnimatedTabs>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  userData: state.users.data
})

const mapDispatchToProps = {
  getUsers: UserActions.usersRequest
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchScreen)
