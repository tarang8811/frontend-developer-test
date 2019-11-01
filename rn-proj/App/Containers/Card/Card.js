import React, { Component } from 'React'
import { Image, Text, TouchableOpacity, View, Animated } from 'react-native'
import IconButton from '@Components/Button/IconButton'
import styles from './CardStyles'
import TapableImages from '@Components/TapableImages'
import { Colors } from '@Themes'
import { Ionicons, Entypo } from '@expo/vector-icons'

class Card extends Component {
  state = {
    viewOpacity: new Animated.Value(1),
    heartIconOpacity: new Animated.Value(0),
    crossIconOpacity: new Animated.Value(0)
  }

  animateLike = () => {
    Animated.timing(this.state.heartIconOpacity, {
      toValue: 1,
      delay: 200,
      duration: 500
    }).start(() => {
      this.onLike()
    })
  }

  animateDislike = () => {
    Animated.timing(this.state.crossIconOpacity, {
      toValue: 1,
      delay: 200,
      duration: 500
    }).start(() => {
      this.onDislike()
    })
  }

  onLike = () => {
    Animated.timing(this.state.viewOpacity, {
      toValue: 0,
      delay: 300,
      duration: 500
    }).start(() => {
      this.props.onLike()
    })
  }

  onDislike = () => {
    Animated.timing(this.state.viewOpacity, {
      toValue: 0,
      delay: 300,
      duration: 500
    }).start(() => {
      this.props.onDislike()
    })
  }

  render() {
    const { info, photos } = this.props
    return (
      <Animated.View
        key={info.name}
        style={[styles.container, { opacity: this.state.viewOpacity }]}
      >
        <TapableImages images={photos} />
        <View style={styles.sexualityTextView}>
          <Ionicons
            name="ios-heart"
            onPress={() => {}}
            size={16}
            color={Colors.snow}
            style={styles.sexualityIcon}
          />
          <Text style={styles.sexualityText}>{info.sexuality}</Text>
        </View>
        <View style={styles.nameView}>
          <Text style={styles.nameText}>{`${info.name}, ${info.age}`}</Text>
        </View>
        <View style={styles.aboutView}>
          <Text style={styles.aboutText}>{photos.length}</Text>
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
            onPress={this.props.onInfo}
            style={styles.info}
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
        <Animated.View
          style={[styles.bigIconView, { opacity: this.state.heartIconOpacity }]}
        >
          <Ionicons name="ios-heart" size={100} color={Colors.snow} />
        </Animated.View>
        <Animated.View
          style={[styles.bigIconView, { opacity: this.state.crossIconOpacity }]}
        >
          <Entypo
            name="cross"
            size={100}
            color={Colors.snow}
            style={styles.bigHeartIcon}
          />
        </Animated.View>
      </Animated.View>
    )
  }
}

export default Card
