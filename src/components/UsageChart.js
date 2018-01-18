import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Data from '../data.json';
import Svg from "react-native-svg";
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis
} from 'victory-native';
import { VictoryTheme } from "victory-core";

class UsageChart extends Component {
  constructor(props) {
    super(props);
  }

  _getFirstLetterOfMonth(x) {
    let check = x.slice(0, 2);

    switch(check) {
      case '01':
        x = 'Jan';
      break;
      case '02':
        x = 'Feb';
      break;
      case '03':
        x = 'Mar';
      break;
      case '04':
        x = 'Apr';
      break;
      case '05':
        x = 'May';
      break;
      case '06':
        x = 'Jun';
      break;
      case '07':
        x = 'Jul';
      break;
      case '08':
        x = 'Aug';
      break;
      case '09':
        x = 'Sept';
      break;
      case '10':
        x = 'Oct';
      break;
      case '11':
        x = 'Nov';
      break;
      case '12':
        x = 'Dec';
      break;
    }
    return x;
  }

  render() {
    return (
      <View>
        {/* x = EndDate y = Consumption */}
        <VictoryChart
          domain={[0, 1]}
          style={{ domain: { fontSize: 10, fill: '#fff' } }}
          height={140}
          width={350}
        >
          <VictoryLine
            style={{
              data: { stroke: "#02b3a4" },
            }}

            data={[
              { x: this._getFirstLetterOfMonth("08/19/2014"), y: 414},
              { x: this._getFirstLetterOfMonth("10/18/2014"), y: 333 },
              { x: this._getFirstLetterOfMonth("09/18/2014"), y: 348 },
              { x: this._getFirstLetterOfMonth("07/17/2014"), y: 327 },
              { x: this._getFirstLetterOfMonth("06/18/2014"), y: 380 },
              { x: this._getFirstLetterOfMonth("05/20/2014"), y: 419 },
              { x: this._getFirstLetterOfMonth("01/18/2014"), y: 399 },
              { x: this._getFirstLetterOfMonth("04/17/2014"), y: 316 },
              { x: this._getFirstLetterOfMonth("03/20/2014"), y: 345 },
              { x: this._getFirstLetterOfMonth("11/16/2013"), y: 400 },
              { x: this._getFirstLetterOfMonth("07/18/2015"), y: 335 },
              { x: this._getFirstLetterOfMonth("12/16/2015"), y: 311 },
              { x: this._getFirstLetterOfMonth("11/18/2015"), y: 422 },
              { x: this._getFirstLetterOfMonth("01/19/2016"), y: 422 },
              { x: this._getFirstLetterOfMonth("02/17/2016"), y: 376 },
              { x: this._getFirstLetterOfMonth("03/18/2016"), y: 325 },
              { x: this._getFirstLetterOfMonth("10/16/2013"), y: 307 },
              { x: this._getFirstLetterOfMonth("01/25/2016"), y: 350 },
              { x: this._getFirstLetterOfMonth("11/24/2015"), y: 350 },
              { x: this._getFirstLetterOfMonth("12/24/2015"), y: 350 },
              { x: this._getFirstLetterOfMonth("02/23/2016"), y: 350 },
              { x: this._getFirstLetterOfMonth("03/24/2016"), y: 350 },
              { x: this._getFirstLetterOfMonth("04/22/2016"), y: 350 },
              { x: this._getFirstLetterOfMonth("01/04/2016"), y: 1166416.8 },
              { x: this._getFirstLetterOfMonth("12/02/2015"), y: 1974689.1 },
              { x: this._getFirstLetterOfMonth("02/03/2016"), y: 1767388.8 },
              { x: this._getFirstLetterOfMonth("03/07/2016"), y: 1962416 },
              { x: this._getFirstLetterOfMonth("04/01/2016"), y: 1507978.8 },
            ]}
            // interpolation="cardinal"
          />
        </VictoryChart>
      </View>
    );
  }
}

export default UsageChart;
