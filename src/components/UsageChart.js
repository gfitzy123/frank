import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Data from '../data.json';
import Svg from "react-native-svg";
import {
  VictoryLine,
  VictoryChart,
  VictoryLegend
} from 'victory-native';
import { VictoryTheme } from "victory-core";

class UsageChart extends Component {
  render() {
    return (
      <View>
        <VictoryChart
          height={120}
          // standalone={false}
        >
          <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc"}
            }}
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 7 }
            ]}
          />
          {/* <VictoryLine
            height={100} width={200}
            style={{ data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc"}
            }}
            data={[
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
            ]}
          /> */}
          {/* <VictoryScatter
            style={{ data: { fill: "black" } }}
            data={[
              { x: 15, y: 20 },
              { x: 25, y: 30 },
              { x: 35, y: 65 },
              { x: 40, y: 50 },
              { x: 45, y: 40 },
              { x: 50, y: 30 }
            ]}
          /> */}
        </VictoryChart>
      </View>
    );
  }
}

export default UsageChart;
