import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Button } from './common';

class Home extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Image source="../img/logo.svg" alt="" />
       <View style={{paddingTop: 270}}>
          <Button onPress={() => Actions.auth()}>Sign Up</Button>
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
}

export default Home;