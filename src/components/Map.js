import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { MapHeader } from './common/Index';

class Map extends Component {
  render() {
    return (
      <View>
        <MapHeader headerText="Find Meters" />
        <Image style={styles.markerOneStyle} source={require('../img/map-mark.png')} />
        <Image style={styles.markerTwoStyle} source={require('../img/map-mark.png')} />
        <Image
          source={require('../img/map-img.png')}
        />
      </View>
    );
  }
}

const styles = {
  markerOneStyle: {
    // elevation: 2,
    top: 110,
    left: 90,
    position: 'absolute',
  },
  markerTwoStyle: {
    // elevation: 2,
    top: 200,
    left: 300,
    position: 'absolute',
  }
}

export default Map;
