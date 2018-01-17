import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { MapHeader } from './common/Index';

class Map extends Component {
  render() {
    return (
      <View>
        <MapHeader headerText="Find Meters" />
        <Image style={styles.mapMarkerStyle} source={require('../img/map-mark.png')} />
        <Image
          source={require('../img/map-img.png')}
        />
      </View>
    );
  }
}

const styles = {
  mapMarkerStyle: {
    // elevation: 2,
    top: 100,
    left: 80,
    position: 'absolute',
  }
}

export default Map;
