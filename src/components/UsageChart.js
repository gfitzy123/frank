import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Data from '../data.json';
import Svg from "react-native-svg";
import {
  VictoryLine,
} from 'victory-native';
import { VictoryTheme } from "victory-core";

class UsageChart extends Component {
  render() {
    return (
      <View>
        {/* x = EndDate y = Consumption */}
        <VictoryLine
          height={140}
          width={400}
          style={{
            data: { stroke: "#02b3a4" }
          }}
          data={[
            { x: "08/19/2014", y: 414},
            { x: "10/18/2014", y: 333 },
            { x: "09/18/2014", y: 348 },
            { x: "07/17/2014", y: 327 },
            { x: "06/18/2014", y: 380 },
            { x: "05/20/2014", y: 419 },
            { x: "01/18/2014", y: 399 },
            { x: "04/17/2014", y: 316 },
            { x: "03/20/2014", y: 345 },
            { x: "11/16/2013", y: 400 },
            { x: "07/18/2015", y: 335 },
            { x: "12/16/2015", y: 311 },
            { x: "11/18/2015", y: 422 },
            { x: "01/19/2016", y: 422 },
            { x: "02/17/2016", y: 376 },
            { x: "03/18/2016", y: 325 },
            { x: "10/16/2013", y: 307 },
            { x: "01/25/2016", y: 350 },
            { x: "11/24/2015", y: 350 },
            { x: "12/24/2015", y: 350 },
            { x: "02/23/2016", y: 350 },
            { x: "03/24/2016", y: 350 },
            { x: "04/22/2016", y: 350 },
            { x: "01/04/2016", y: 1166416.8 },
            { x: "12/02/2015", y: 1974689.1 },
            { x: "02/03/2016", y: 1767388.8 },
            { x: "03/07/2016", y: 1962416 },
            { x: "04/01/2016", y: 1507978.8 },
          ]}
          x="Data.EndDate"
          // labels={(x, y) => {
          //   switch(x.slice(0, 2)) {
          //     case '01':
          //       x = 'Jan';
          //     break;
          //     case '02':
          //       x = 'Feb';
          //     break;
          //     case '03':
          //       x = 'Mar';
          //     break;
          //     case '04':
          //       x = 'Apr';
          //     break;
          //     case '05':
          //       x = 'May';
          //     break;
          //     case '06':
          //       x = 'Jun';
          //     break;
          //     case '07':
          //       x = 'Jul';
          //     break;
          //     case '08':
          //       x = 'Aug';
          //     break;
          //     case '09':
          //       x = 'Sept';
          //     break;
          //     case '10':
          //       x = 'Oct';
          //     break;
          //     case '11':
          //       x = 'Nov';
          //     break;
          //     case '12':
          //       x = 'Dec';
          //     break;
          //   }
          // }}
        />
      </View>
    );
  }
}

export default UsageChart;
