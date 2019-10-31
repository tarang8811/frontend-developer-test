import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import I18n from '@I18n'
import { connect } from 'react-redux'
import UserActions from '@Redux/UserRedux'

class SearchScreen extends Component {

  componentDidMount() {
    this.props.getUsers()
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>{I18n.t('search')}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  userData: state.users.data
})

const mapDispatchToProps = {
  getUsers: UserActions.usersRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
