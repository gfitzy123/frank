import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

class NavBar extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <TouchableOpacity>
          <Image source={require('../img/home.png')} accessibilityLabel="home icon" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../img/chart.png')} accessibilityLabel="chart icon" />
        </TouchableOpacity>

        <View style={styles.arrowStyle}>
          <TouchableOpacity>
            <Image source={require('../img/arrow.png')} accessibilityLabel="arrow icon" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Image source={require('../img/map-marker.png')} accessibilityLabel="map icon" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../img/mail.png')} accessibilityLabel="mail icon" />
        </TouchableOpacity>
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
    paddingTop: 15,
    height: 50, 
    elevation: 2, 
    position: 'absolute', 
    left: 0, 
    bottom: 0, 
    right: 0
  },
  arrowStyle: {
    elevation: 4,
    bottom: 45,
    overflow: 'visible',
    position: 'relative'
  }
}

export default NavBar;