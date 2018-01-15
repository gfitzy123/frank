import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Data from '../data.json';
import Svg from "react-native-svg";
import {
  VictoryBar,
  VictoryChart,
  VictoryScatter,
  VictoryLegend
} from 'victory-native';
import { VictoryTheme } from "victory-core";

class UsageChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }


  render() {
    return (
      <View>
        <VictoryChart polar theme={VictoryTheme.material}>
          <VictoryBar
            style={{ data: { fill: "tomato", opacity: 0.5 } }}
            data={[
              { x: 15, y: 20, label: 1, fill: "red" },
              { x: 25, y: 30, label: 2, fill: "orange" },
              { x: 35, y: 65, label: 3, fill: "gold" },
              { x: 40, y: 50, label: 4, fill: "blue" },
              { x: 45, y: 40, label: 5, fill: "cyan" },
              { x: 50, y: 30, label: 6, fill: "green" }
            ]}
          />
          <VictoryScatter
            style={{ data: { fill: "black" } }}
            data={[
              { x: 15, y: 20 },
              { x: 25, y: 30 },
              { x: 35, y: 65 },
              { x: 40, y: 50 },
              { x: 45, y: 40 },
              { x: 50, y: 30 }
            ]}
          />
        </VictoryChart>
      </View>
    );
  }
}

export default UsageChart;
