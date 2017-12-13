import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { CardSection, TurqButton } from './common';

class Landing extends Component {
  render() {
    return (
      <View style={{ paddingTop: 40 }}>
        <Text>You've logged in</Text>
        <CardSection>
        <TurqButton onPress={() => { firebase.auth().signOut(); Actions.start()}}>
          Log Out
        </TurqButton>
        </CardSection>
      </View>
    );
  }
}

export default Landing;