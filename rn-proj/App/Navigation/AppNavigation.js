import React from 'react'
// import IonIcon from 'react-native-vector-icons/Ionicons'
// import MIcon from 'react-native-vector-icons/MaterialIcons'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Ionicons } from '@expo/vector-icons'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { Colors } from '@Themes'

import SearchScreen from '@Containers/SearchScreen'
import ChatScreen from '@Containers/ChatScreen'
import InfoScreen from '@Containers/InfoScreen'
import SettingsScreen from '@Containers/SettingsScreen'

const iconMap = {
  Search: { type: Ionicons, name: 'md-search' },
  Chat: { type: Ionicons, name: 'ios-chatbubbles' },
  Info: { type: Ionicons, name: 'ios-information-circle-outline' },
  Settings: { type: Ionicons, name: 'ios-settings' }
}

const getNavigationOptions = ({ navigation }) => ({
  tabBarIcon: ({ focused }) => {
    const Icon = iconMap[navigation.state.routeName]
    return (
      <Icon.type
        name={Icon.name}
        size={22}
        color={focused ? Colors.pink : Colors.warmGray}
      />
    )
  }
})

const TabNavigator = createBottomTabNavigator(
  {
    Search: SearchScreen,
    Chat: ChatScreen,
    Info: InfoScreen,
    Settings: SettingsScreen
  },
  {
    defaultNavigationOptions: getNavigationOptions,
    // Put tab bar on bottom of screen on both platforms
    // tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    // Disable animation so that iOS/Android have same behaviors
    animationEnabled: false,
    // Don't show the labels
    tabBarOptions: {
      showLabel: true,
      activeTintColor: Colors.pink,
      labelStyle: {
        fontSize: 11,
        paddingBottom: 3
      },
      style: {
        paddingTop: 5,
        backgroundColor: Colors.snow,
        borderTopColor: Colors.lightGray,
        borderTopWidth: 1
      }
    }
  }
)

export default createAppContainer(TabNavigator)
