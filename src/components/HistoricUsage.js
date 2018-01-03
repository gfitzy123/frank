import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import UsageChart from './UsageChart';

class HistoricUsage extends Component {
  render() {
    return(
      <View>
        <View style={{ paddingTop: 25, backgroundColor: '#123c66' }}>
          <View style={styles.topViewStyle}>
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
            <View>
            <View style={styles.slideContainerStyle}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.slideTextStyle}>
                  <Text>Functional box slides go here.</Text>
                </View>

                <View style={styles.slideTextStyle}>
                  <Text>Functional box slides go here.</Text>
                </View>

                <View style={styles.slideTextStyle}>
                  <Text>Functional box slides go here.</Text>
                </View>
              </ScrollView>
            </View>
            </View>
        </View>
      </View>
      <View style={{ backgroundColor: '#f8fcff', flex: 1 }}>
        <View>
          <View style={styles.lineStyle} />
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
    paddingBottom: 40
  },
  bottomViewStyle: {
    backgroundColor: '#f8fcff',
    padding: 20,
    marginBottom: 40
  },
  slideTextStyle: {
    backgroundColor: '#fff',
    padding: 20,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10
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
  slideContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: 70,
    elevation: 2,
  },
  lineStyle:{
    borderWidth: 0.6,
    borderColor: '#e2e0e0',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 45,
    elevation: 1,
    position: 'relative'
  }
}

export default HistoricUsage;
