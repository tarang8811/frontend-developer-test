import React, { Component } from 'React'
import { Image, Text, TouchableOpacity, View, Animated } from 'react-native'
import IconButton from '@Components/Button/IconButton'
import styles from './CardStyles'
import TapableImages from './TapableImages'
import { Colors } from '@Themes'
import { Ionicons, Entypo } from '@expo/vector-icons'

class UserInfoScreen extends Component {
  state = {}

  render() {
    const { info, photos, associated, id } = this.props

    return (
      <Modal
        animationType="slide"
        visible
        onRequestClose={this.props.onRequestClose}
        headerTitle={''}
        headerRight={null}
        content={
          <>
            <ScrollableImages images={photos} />
            <View style={styles.nameView}>
              <Text style={styles.nameText}>{`${info.name}, ${info.age}`}</Text>
            </View>
            <View style={styles.aboutView}>
              <Text style={styles.aboutText}>{info.about}</Text>
            </View>
            <View style={styles.buttonView}>
              <IconButton
                type="ent"
                name="cross"
                onPress={this.animateDislike}
                style={styles.cross}
                size={22}
                color={Colors.black}
              />
              <IconButton
                type="ion"
                name="ios-information-circle-outline"
                onPress={info}
                style={this.onInfo}
                size={30}
                color={Colors.yellow}
              />
              <IconButton
                type="ion"
                name="ios-heart"
                onPress={this.animateLike}
                style={styles.heart}
                size={22}
                color={Colors.pink}
              />
            </View>
          </>
        }
      />
    )
  }
}

export default UserInfoScreen
