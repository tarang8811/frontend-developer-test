import React from 'React'
import { Text, View, SafeAreaView, ScrollView } from 'react-native'
import IconButton from '@Components/Button/IconButton'
import ScrollableImages from '@Components/ScrollableImages'
import { Colors, isIphoneX } from '@Themes'
import styles from './UserInfoScreenStyle'
import Modal from '@Components/Modal'
import GradientText from '@Components/GradientText'
import I18n from '@I18n'

const TagsView = ({ header, data }) => {
  if (!!data && !!data.length) {
    return (
      <View style={styles.desiresView}>
        <Text style={styles.aboutViewHeader}>{header}</Text>
        <ScrollView
          horizontal
          style={styles.desiresTextView}
          showsHorizontalScrollIndicator={false}
        >
          {data.map(d => (
            <GradientText
              colors={[Colors.gradientPink, Colors.gradientPurple]}
              label={d}
              gradientStyle={styles.gradientStyle}
            />
          ))}
        </ScrollView>
      </View>
    )
  }
  return null
}
const UserInfoScreen = ({
  info,
  photos,
  associated,
  visible,
  animateDislike,
  closeModal,
  animateLike
}) => (
  <Modal
    animationType="slide"
    visible={visible}
    headerTitle={''}
    headerRight={null}
    content={
      <SafeAreaView style={styles.flex}>
        <ScrollView>
          <ScrollableImages images={photos} />
          <View styles={styles.infoView}>
            <View style={styles.nameView}>
              <Text style={styles.nameText}>
                {!!associated
                  ? `${info.name}, ${info.age} & ${associated.name}, ${associated.age}`
                  : `${info.name}, ${info.age}`}
              </Text>
            </View>
            <View style={styles.aboutView}>
              <Text style={styles.aboutViewHeader}>{I18n.t('aboutMe')}</Text>
              <Text style={styles.aboutText}>{info.about}</Text>
            </View>
            <TagsView header={I18n.t('desires')} data={info.desires} />
            <TagsView header={I18n.t('interests')} data={info.interests} />
          </View>
        </ScrollView>
        <View
          // special condition for iphoneX and above
          style={[styles.buttonView, isIphoneX() ? { bottom: 40 } : {}]}
        >
          <IconButton
            type="ent"
            name="cross"
            onPress={animateDislike}
            style={styles.cross}
            size={22}
            color={Colors.black}
          />
          <IconButton
            type="ent"
            name="chevron-down"
            onPress={closeModal}
            style={styles.info}
            size={22}
            color={Colors.yellow}
          />
          <IconButton
            type="ion"
            name="ios-heart"
            onPress={animateLike}
            style={styles.heart}
            size={22}
            color={Colors.pink}
          />
        </View>
      </SafeAreaView>
    }
  />
)

export default UserInfoScreen
