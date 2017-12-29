import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Data from '../data.json';

class UsageChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }

  check() {
    for(let i = 0; i < Data.length; i++) {
      this.setState({
        text: Data[0].TotalNewCharges
      })
    }
  }

  //Loop through json data
  //Display data from other component with chart
  //import component to file.

  render() {
    return (
      <View>
        <Text style={{ color: '#fff' }}>Chart here, yo {this.state.text}</Text>
      </View>
    );
  }
}

export default UsageChart;