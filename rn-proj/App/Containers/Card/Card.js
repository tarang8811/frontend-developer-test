import React from 'React'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import styles from './CardStyles'
import TapableImages from './TapableImages'

const Plan = ({ info, desires, interests, photos }) => {
  return (
    <View key={info.name} style={styles.container}>
      <TapableImages images={photos} />
      <View style={styles.sexualityTextView}>
        <Text style={styles.sexualityText}>{info.sexuality}</Text>
      </View>
      <View style={styles.nameView}>
        <Text style={styles.nameText}>{info.name}</Text>
      </View>
      <View style={styles.aboutView}>
        <Text style={styles.aboutText}>{info.about}</Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity>
          <Ionicons name="md-checkmark-circle" size={32} color="green" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="md-checkmark-circle" size={32} color="green" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="md-checkmark-circle" size={32} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Plan
