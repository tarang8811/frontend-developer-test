import React, { Component } from 'react'
import { ScrollView, StyleSheet, Modal, SafeAreaView, View } from 'react-native'
import PropTypes from 'prop-types'
import { Colors, Metrics } from '@Themes'

export default class DatingAppModal extends Component {
  static defaultProps = {
    animationType: 'slide',
    visible: false,
    onRequestClose: () => {},
    contentContainerStyle: {}
  }

  static propTypes = {
    animationType: PropTypes.string,
    visible: PropTypes.bool,
    scrollable: PropTypes.bool,
    content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
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
