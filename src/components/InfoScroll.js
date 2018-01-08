import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

class InfoScroll extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {this.props.children}
        </ScrollView>
      </View>
    );
  }
}

export default InfoScroll;
