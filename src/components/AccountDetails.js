import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class AccountDetails extends Component {
  render() {
    return (
      <View style={{ paddingTop: 25, backgroundColor: '#123c66' }}>
        <View style={styles.containerStyle}>
          <Image style={styles.logoStyle} source={require('../img/logo.png')} accessibilityLabel="Frank's logo" />
          <Text style={styles.homeTextStyle}>Home</Text>
        </View>
        <View style={styles.topViewStyle}>
          <Text style={styles.topTextStyle}>Days Until Next Payment</Text>
        </View>
        <View style={styles.bottomViewStyle}>
          <Text>Button Components goes here.</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  topViewStyle: {
    backgroundColor: '#123c66',
    paddingTop: 3,
    paddingBottom: 20,
    alignItems: 'center'
  },
  bottomViewStyle: {
    backgroundColor: '#f8fcff',
    padding: 20
  },
  topTextStyle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700'
  },
  homeTextStyle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'center'
  },
  logoStyle: {
    width: 35,
    height: 35
  },
  containerStyle: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row'
  }
}

export default AccountDetails;