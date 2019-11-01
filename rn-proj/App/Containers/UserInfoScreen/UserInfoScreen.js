import React, { Component } from 'React'
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Animated,
  SafeAreaView,
  ScrollView
} from 'react-native'
import IconButton from '@Components/Button/IconButton'
import ScrollableImages from '@Components/ScrollableImages'
import { Colors, Metrics } from '@Themes'
import styles from './UserInfoScreenStyle'
import Modal from '@Components/Modal'
import SectionView from '@Components/SectionView'

class UserInfoScreen extends Component {
  state = {}

  render() {
    const { info, photos, associated, id } = this.props
    return (
      <Modal
        animationType="slide"
        visible={this.props.visible}
        headerTitle={''}
        headerRight={null}
        content={
          <SafeAreaView style={styles.flex}>
            <ScrollView>
              <ScrollableImages images={photos} />
              <View styles={styles.infoView}>
                <View style={styles.nameView}>
                  <Text
                    style={styles.nameText}
                  >{`${info.name}, ${info.age}`}</Text>
                </View>
                <View style={styles.aboutView}>
                  <Text style={styles.aboutViewHeader}>About Me</Text>
                  <Text style={styles.aboutText}>{info.about}</Text>
                </View>
                {!!info.desires && !!info.desires.length && (
                  <View style={styles.desiresView}>
                    <Text style={styles.aboutViewHeader}>Desires</Text>
                    <ScrollView
                      horizontal
                      style={styles.desiresTextView}
                      showsHorizontalScrollIndicator={false}
                    >
                      {info.desires.map(d => (
                        <Text key={d} style={styles.desiresText}>
                          {d}
                        </Text>
                      ))}
                    </ScrollView>
                  </View>
                )}
                {!!info.interests && !!info.interests.length && (
                  <View style={styles.desiresView}>
                    <Text style={styles.aboutViewHeader}>Desires</Text>
                    <ScrollView
                      horizontal
                      style={styles.desiresTextView}
                      showsHorizontalScrollIndicator={false}
                    >
                      {info.interests.map(d => (
                        <Text key={d} style={styles.desiresText}>
                          {d}
                        </Text>
                      ))}
                    </ScrollView>
                  </View>
                )}
              </View>
            </ScrollView>
            <View style={styles.buttonView}>
              <IconButton
                type="ent"
                name="cross"
                onPress={this.props.animateDislike}
                style={styles.cross}
                size={22}
                color={Colors.black}
              />
              <IconButton
                type="ent"
                name="chevron-down"
                onPress={this.props.closeModal}
                style={styles.info}
                size={30}
                color={Colors.yellow}
              />
              <IconButton
                type="ion"
                name="ios-heart"
                onPress={this.props.animateLike}
                style={styles.heart}
                size={22}
                color={Colors.pink}
              />
            </View>
          </SafeAreaView>
        }
      />
    )
  }
}

export default UserInfoScreen
