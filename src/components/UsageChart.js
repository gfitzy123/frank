import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Data from '../data.json';
import Svg from "react-native-svg";
import {
  VictoryLine,
  VictoryChart,
  VictoryLegend,
  VictoryLabel,
  VictoryStack,
  VictoryArea
} from 'victory-native';
import { VictoryTheme } from "victory-core";

class UsageChart extends Component {
  render() {
    return (
      <View>
        <VictoryLine
          height={140}
          interpolation={"linear"}
          style={{
            data: { stroke: "#02b3a4" }
          }}
          data={[
            { x: 1, y: 3 },
            { x: 2, y: 6 },
            { x: 6, y: 4 },
            { x: 5, y: 5 },
            { x: 5, y: 2 },
            { x: 4, y: 7 },
            { x: 7, y: 6 },
            { x: 7, y: 6 },
            // { x: 27.35, y: 30.8 },
            // { x: 23.57, y: 26.55 },
            // { x: 19.13, y: 21.55 },
            // { x: 18.23, y: 20.53 },
            // { x: 24.32, y: 27.39 },
            // { x: 26.42, y: 29.76 },
            // { x: 26.19, y: 29.5 },
            // { x: 20.69, y: 23.31 },
            // { x: 20.02, y: 17.78 },
            // { x: 22.32, y: 25.13 },
            // { x: 22.32, y: 25.13 },
          ]}
        />
      </View>
    );
  }
}

export default UsageChart;
