import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import NavBar from './NavBar';

class AccountDetails extends Component {
  
  this.state = {
    counter: 0
  }

  setCounter() {
    //We need to set a counter for how many days until a bill is due
    let currentDate = Date.now();
    let date = new Date();
    let day = parseInt(currentDate / (1000 * 60 * 60 * 24));

    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  }

  render() {
    return (
      <View style={{ paddingTop: 25, backgroundColor: '#123c66' }}>
        <View style={styles.containerStyle}>
          <Image style={styles.logoStyle} source={require('../img/logo.png')} accessibilityLabel="Frank's logo" />
          <Text style={styles.homeTextStyle}>Home</Text>
        </View>
        <View style={styles.topViewStyle}>
          <Text style={styles.topTextStyle}>Days Until Next Payment</Text>
          <Image source={require('../img/donute.png')} accessibilityLabel="Amount of days until electric bill is due" />
        </View>
        <View style={styles.bottomViewStyle}>
          <Text>Button Components goes here.</Text>
        </View>
        <NavBar />
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
    padding: 20,
    marginBottom: 50
  },
  topTextStyle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    paddingBottom: 20
  },
  homeTextStyle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
    alignSelf: 'center',
    paddingLeft: 15,
    paddingRight: 15
  },
  logoStyle: {
    width: 35,
    height: 35
  },
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
  }
}

export default AccountDetails;