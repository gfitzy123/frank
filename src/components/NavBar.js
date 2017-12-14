import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class NavBar extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Image source={require('../img/home.png')} accessibilityLabel="home icon" />
        <Image source={require('../img/chart.png')} accessibilityLabel="chart icon" />
        
        <View>
          <Image source={require('../img/arrow.png')} accessibilityLabel="arrow icon" />
        </View>

        <Image source={require('../img/map-marker.png')} accessibilityLabel="map icon" />
        <Image source={require('../img/mail.png')} accessibilityLabel="mail icon" />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#edf5fa',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    alignContent: 'space-between',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.7,
    paddingTop: 10,
    height: 50, 
    elevation: 2, 
    position: 'absolute', 
    left: 0, 
    bottom: 0, 
    right: 0,
  }
}

export default NavBar;