import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { MapHeader } from './common/Index';

class Map extends Component {
  render() {
    return (
      <View>
        <MapHeader headerText="Find Meters" />
        <Image
          source={require('../img/map-img.png')}
        />
      </View>
    );
  }
}

export default Map;
