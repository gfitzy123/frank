import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { MapHeader } from './common/Index';

class Map extends Component {
  render() {
    return (
      <View>
        <MapHeader headerText="Find Meters" />
        <Image
          style={{ width: 450, height: 700 }}
          source={require('../img/MapHolder.png')}
        />
      </View>
    );
  }
}

const styles = {
  markerOneStyle: {
    top: 110,
    left: 90,
    position: 'absolute',
  },
  markerTwoStyle: {
    top: 200,
    left: 300,
    position: 'absolute',
  },
  markerThreeStyle: {
    top: 340,
    left: 270,
    position: 'absolute',
  },
  markerFourStyle: {
    top: 280,
    left: 100,
    position: 'absolute',
  },
  meterDetailContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginLeft: 5,
    marginRight: 5,
    // marginTop: -400,
    borderRadius: 10,
    // position: 'absolute',
  }
}

export default Map;
