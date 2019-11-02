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

import styles from './SearchScreenStyle'
import Button from '@Components/Button/Button'
import Card from '@Components/Card'
import UserInfoScreen from '@Containers/UserInfoScreen'
import { Colors } from '@Themes'

const { width } = Dimensions.get('window')

const PANEL_WIDTH = width - 56

class SearchScreen extends Component {
  state = { userData: [], visible: false, currentUser: null }
  activePanel = 0
  cardsRef = {}
  instantShowModal = true

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

  closeModal = () => {
    this.setState({ visible: false })
  }

  animateLike = () => {
    this.setState({ visible: false }, () => {
      this.cardsRef[this.state.currentUser.id].animateLike()
    })
  }

  animateDislike = () => {
    this.setState({ visible: false }, () => {
      this.cardsRef[this.state.currentUser.id].animateDislike()
    })
  }

  removeAndUpdateAnimation = (user, index) => {
    this.activePanel = index
    this.setState(
      {
        userData: this.state.userData.filter(d => d.id !== user.id)
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

  onInfo = user => () => {
    if (this.instantShowModal) {
      this.setState({ currentUser: user, visible: true })
    } else {
      setTimeout(() => {
        this.setState({ currentUser: user, visible: true })
      }, 500)
    }
  }

  onAnimateFinish = () => {
    setTimeout(() => {
      this.instantShowModal = true
    }, 300)
    this.animationRunning = false
  }

  onAnimate = activePanel => {
    this.activePanel = activePanel
    this.instantShowModal = false
    this.animationRunning = true
  }

  render() {
    return (
      <SafeAreaView style={styles.flex}>
        <View style={styles.buttonView}>
          <Button
            text={I18n.t('location')}
            onPress={() => {}}
            style={styles.button}
            gradientStyle={styles.gradientStyle}
            colors={[Colors.gradientPink, Colors.gradientPurple]}
            textStyle={styles.locationButtonText}
          />
          <Button
            text={I18n.t('filters')}
            onPress={() => {}}
            style={styles.button}
            gradientStyle={styles.gradientStyle}
            colors={[Colors.gradientPink, Colors.gradientPurple]}
            textStyle={styles.filterButtonText}
          />
        </View>
        <AnimatedTabs
          panelStyle={styles.mainContainer}
          panelWidth={PANEL_WIDTH}
          style={styles.tabStyle}
          activePanel={this.activePanel}
          onAnimate={this.onAnimate}
          onAnimateFinish={this.onAnimateFinish}
        >
          {this.state.userData.map((user, index) => (
            <Card
              ref={ref => (this.cardsRef[user.id] = ref)}
              key={user.id}
              {...user}
              onLike={this.onLike(user, index)}
              onDislike={this.onDislike(user, index)}
              onInfo={this.onInfo(user)}
            />
          ))}
        </AnimatedTabs>
        {!!this.state.currentUser && (
          <UserInfoScreen
            {...this.state.currentUser}
            animateLike={this.animateLike}
            animateDislike={this.animateDislike}
            closeModal={this.closeModal}
            visible={this.state.visible}
          />
        )}
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
