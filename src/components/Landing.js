import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { CardSection, TurqButton, Header } from './common';
import NavBar from './NavBar';

class Landing extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Header headerText="Statistics" />
        <Text>You've logged in</Text>
        <CardSection>
        <TurqButton onPress={() => { firebase.auth().signOut(); Actions.start()}}>
          Log Out
        </TurqButton>
        </CardSection>
        <NavBar />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    backgroundColor: '#edf5fa'
  }
}

export default Landing;

