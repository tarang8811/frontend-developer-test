import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  LayoutAnimation
} from 'react-native'
import I18n from '@I18n'
import { connect } from 'react-redux'
import UserActions from '@Redux/UserRedux'
import AnimatedTabs from 'react-native-animated-tabs'

import styles from './UpgradeViewStyle'
import Button from '@Components/Button/Button'
import Card from './Card'
import UserInfoScreen from './UserInfoScreen/UserInfoScreen'

const { width } = Dimensions.get('window')

const PANEL_WIDTH = width - 56

class SearchScreen extends Component {
  state = { userData: [], activePanel: 0 }
  tabRef = null

  componentDidMount() {
    this.props.getUsers()
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.userData !== this.props.userData &&
      nextProps.userData.length
    ) {
      this.setState({ userData: nextProps.userData })
    }
  }

  showLikeAnimation = () => {}

  showDislikeAnimation = () => {}

  removeAndUpdateAnimation = (user, index) => {
    this.setState(
      {
        userData: this.state.userData.filter(d => d.id !== user.id),
        activePanel: index
      },
      () => {
        var CustomLayoutSpring = {
          duration: 400,
          create: {
            type: LayoutAnimation.Types.spring,
            property: LayoutAnimation.Properties.scaleXY,
            springDamping: 0.7
          },
          update: {
            type: LayoutAnimation.Types.spring,
            springDamping: 0.7
          }
        }
        LayoutAnimation.configureNext(CustomLayoutSpring)
      }
    )
  }

  onLike = (user, index) => () => {
    this.removeAndUpdateAnimation(user, index)
  }

  onDislike = (user, index) => () => {
    this.removeAndUpdateAnimation(user, index)
  }

  onInfo = user => () => {}

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
          ref={ref => (this.tabRef = ref)}
          panelStyle={styles.mainContainer}
          panelWidth={PANEL_WIDTH}
          style={styles.tabStyle}
          activePanel={this.state.activePanel}
        >
          {this.state.userData.map((user, index) => (
            <Card
              key={user.id}
              {...user}
              onLike={this.onLike(user, index)}
              onDislike={this.onDislike(user, index)}
              onInfo={this.onInfo(index)}
            />
          ))}
        </AnimatedTabs>
        <UserInfoScreen />
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
