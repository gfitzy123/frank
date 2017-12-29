import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import UsageChart from './UsageChart';

class HistoricUsage extends Component {
  render() {
    return(
      <View style={{ paddingTop: 25, backgroundColor: '#123c66' }}>
        <View>
          <View style={styles.containerStyle}>
            <Image source={require("../img/logo.png")} accessibilityLabel="Frank's logo" style={styles.logoStyle} />
            <Text style={styles.usageTextStyle}>Historical Usage</Text>
          </View>
          <View>
            <Text style={styles.shopTitleStyle}>John's Bicycle Shop</Text>
            <Text style={styles.subTitleStyle}>5 Minute Usage: 10 kWh</Text>
            <Text style={styles.subTitleStyle}>Last Month's Usage: 325 kWh</Text>
            <UsageChart />
          </View>
          <View style={styles.bottomViewStyle}>
            <Text>Functional box slides go here.</Text>
          </View>
          <View>
            <Text>More account details here in slideable box form</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  topViewStyle: {
    backgroundColor: '#123c66',
    paddingTop: 3,
    paddingBottom: 20,
    alignItems: 'center'
  },
  bottomViewStyle: {
    backgroundColor: '#f8fcff',
    padding: 20,
    marginBottom: 40,
    borderRadius: 15
  },
  usageTextStyle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
    alignSelf: 'center',
    paddingLeft: 15,
    paddingRight: 15
  },
  logoStyle: {
    width: 35,
    height: 35
  },
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  shopTitleStyle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '300',
    textAlign: 'left',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 22,
    paddingBottom: 8
  },
  subTitleStyle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '300',
    textAlign: 'left',
    paddingLeft: 15,
    paddingRight: 15
  },
}

export default HistoricUsage;