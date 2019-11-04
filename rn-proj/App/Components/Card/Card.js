import React, { Component } from 'React'
import { Text, View, Animated } from 'react-native'
import IconButton from '@Components/Button/IconButton'
import styles from './CardStyles'
import TapableImages from '@Components/TapableImages'
import { Colors } from '@Themes'
import { Ionicons, Entypo } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const getConfig = (toValue, delay, duration) => ({
  toValue,
  delay,
  duration,
  useNativeDriver: true
})

class Card extends Component {
  viewOpacity = new Animated.Value(1)
  heartIconOpacity = new Animated.Value(0)
  crossIconOpacity = new Animated.Value(0)

  animateLike = () => {
    Animated.timing(this.heartIconOpacity, getConfig(1, 200, 500)).start(() => {
      this.onLike()
    })
  }

  animateDislike = () => {
    Animated.timing(this.crossIconOpacity, getConfig(1, 200, 500)).start(() => {
      this.onDislike()
    })
  }

  onLike = () => {
    Animated.timing(this.viewOpacity, getConfig(0, 300, 500)).start(() => {
      this.props.onLike()
    })
  }

  onDislike = () => {
    Animated.timing(this.viewOpacity, getConfig(0, 200, 500)).start(() => {
      this.props.onDislike()
    })
  }

  render() {
    const { info, photos, associated } = this.props
    return (
      <Animated.View
        key={info.name}
        style={[styles.container, { opacity: this.viewOpacity }]}
      >
        <TapableImages images={photos} />
        <LinearGradient
          colors={[Colors.gradientPink, Colors.gradientPurple]}
          style={styles.sexualityTextView}
        >
          <Ionicons
            name="ios-heart"
            onPress={() => {}}
            size={16}
            color={Colors.snow}
            style={styles.sexualityIcon}
          />
          <Text style={styles.sexualityText}>{info.sexuality}</Text>
        </LinearGradient>
        <View style={styles.nameView}>
          <Text style={styles.nameText}>
            {!!associated
              ? `${info.name}, ${info.age} & ${associated.name}, ${associated.age}`
              : `${info.name}, ${info.age}`}
          </Text>
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
          style={[styles.bigIconView, { opacity: this.heartIconOpacity }]}
        >
          <Ionicons name="ios-heart" size={100} color={Colors.snow} />
        </Animated.View>
        <Animated.View
          style={[styles.bigIconView, { opacity: this.crossIconOpacity }]}
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
