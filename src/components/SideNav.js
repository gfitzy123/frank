import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection } from './common';

class SideNav extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Text>Text goes here</Text>
        </CardSection>
        <CardSection>
          <Text>Text goes here</Text>
        </CardSection>
        <CardSection>
          <Text>Text goes here</Text>
        </CardSection>
        <CardSection>
          <Text>Text goes here</Text>
        </CardSection>
        <CardSection>
          <Text>Text goes here</Text>
        </CardSection>
      </View>
    );
  }
}

export default SideNav;