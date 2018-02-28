import React, { Component } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { CardSection, Button } from './common/Index';

class Home extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Image
          style={{
            flex: 1,
            position: 'absolute',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
          }}
          source={{ uri: 'https://lh3.googleusercontent.com/-rAN3iNbA-g8/WmZDJwbUMRI/AAAAAAAABC8/dvx6BPX0cMEH_SQkN9HAdqvWkSuJn5IvQCL0BGAYYCw/h321/2018-01-22.gif' }}
          >
          <View style={styles.imgContainerStyle}>
            <Image style={styles.imgStyle} source={require('../img/logo.png')} accessbilityLabel="Frank's logo" />
          </View>
          <Text style={styles.sloganStyle}>FRANK SOLUTIONS FOR COMMERCIAL ENERGY</Text>
          <View style={{ paddingTop: 100 }}>
            <Button onPress={() => Actions.auth()}>Sign In</Button>
          </View>
        </Image>
      </View>
    );
  }
}


const styles = {
  viewStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  imgContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imgStyle: {
    width: 100,
    height: 100,
  },
  sloganStyle: {
    marginTop: 150,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '800',
    backgroundColor: 'transparent'
  }
}

export default Home;
