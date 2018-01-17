import React, { Component } from 'react';
import { View, Image } from 'react-native';

class Map extends Component {
  render() {
    return (
      <View>
        <Image
          source={require('../img/map-img.png')}
        />
      </View>
    );
  }
}

export default Map;
