import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  Modal,
  SafeAreaView,
  Text,
  View
} from 'react-native'
import PropTypes from 'prop-types'

import IconButton from '@Components/Button/IconButton'
import I18n from '@I18n'
import { Colors, Metrics } from '@Themes'

export default class DatingAppModal extends Component {
  static defaultProps = {
    animationType: 'slide',
    visible: false,
    headerTitle: I18n.t('choose').toUpperCase(),
    onClose: () => {},
    onRequestClose: () => {},
    headerRight: <View />,
    contentContainerStyle: {}
  }

  static propTypes = {
    animationType: PropTypes.string,
    headerTitle: PropTypes.string,
    visible: PropTypes.bool,
    scrollable: PropTypes.bool,
    content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    headerRight: PropTypes.object,
    onRequestClose: PropTypes.func,
    contentContainerStyle: PropTypes.object
  }

  render = () => (
    <Modal
      animationType={this.props.animationType}
      transparent
      visible={this.props.visible}
      onRequestClose={this.props.onRequestClose}
    >
      <SafeAreaView style={styles.viewContainer}>
        <View style={styles.headerWrap}>
          <IconButton
            type="material"
            name="keyboard-arrow-left"
            onPress={this.props.onRequestClose}
            style={styles.onClose}
            size={36}
            color={Colors.lightBlack}
          />
          <Text style={styles.headerText}>
            {this.props.headerTitle.toUpperCase()}
          </Text>
          {this.props.headerRight}
        </View>
        {this.props.scrollable ? (
          <ScrollView
            style={[styles.contentContainer, this.props.contentContainerStyle]}
            showsVerticalScrollIndicator={false}
          >
            {this.props.content}
          </ScrollView>
        ) : (
          <View
            style={[styles.contentContainer, this.props.contentContainerStyle]}
          >
            {this.props.content}
          </View>
        )}
      </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    backgroundColor: Colors.snow
  },
  contentContainer: {
    flex: 1
  },
  onClose: {
    zIndex: 3
  },
  headerWrap: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 16
  },
  headerText: {
    fontSize: 17,
    color: Colors.black,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1
  }
})
