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
        {/* x= ConsumptionCharges y=TotalNewCharges */}
        <VictoryLine
          height={140}
          width={400}
          style={{
            data: { stroke: "#02b3a4" }
          }}
          data={[
            { x: 1, y: 2},
            { x: 23.9, y: 26.92 },
            { x: 19.57, y: 22.05 },
            { x: 20.55, y: 23.15 },
            { x: 20.46, y: 23.04 },
            { x: 23.52, y: 26.49 },
            { x: 26.58, y: 29.94 },
            { x: 27.74, y: 31.25 },
            { x: 20.21, y: 22.77 },
            { x: 27.35, y: 30.8 },
            { x: 23.57, y: 26.55 },
            { x: 19.13, y: 21.55 },
            { x: 18.23, y: 20.53 },
            { x: 24.32, y: 27.39 },
            { x: 26.42, y: 29.76 },
            { x: 26.19, y: 29.5 },
            { x: 20.69, y: 23.31 },
            { x: 20.02, y: 17.78 },
            { x: 22.32, y: 25.13 },
            { x: 22.32, y: 25.13 },
            { x: 2962.03, y: 18683.1 },
            { x: -353.48, y: 18376.08 },
            { x: -392.48, y: 18336.97 },
            { x: -301.6, y: 15826.58 },
          ]}
        />
      </View>
    );
  }
}

export default UsageChart;
