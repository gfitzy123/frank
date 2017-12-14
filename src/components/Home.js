import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Button } from './common';

class Home extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <View style={styles.imgContainerStyle}>
          <Image style={styles.imgStyle} source={require('../img/logo.png')} accessbilityLabel="Frank's logo" />
        </View>
        <View style={{paddingTop: 200}}>
          <Button onPress={() => Actions.auth()}>Sign In</Button>
        </View>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#123c66',
    flex: 1
  },
  imgContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 100
  },
  imgStyle: {
    width: 100,
    height: 100
  }
}

export default Home;