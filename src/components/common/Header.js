// Import dependencies
import React from 'react';
import { Text, View, Image } from 'react-native';

// Make component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Image source={require('../../img/profile.png')} accessibilityLabel="Profile icon" />
      <Text style={textStyle}>
        {props.headerText}
      </Text>
      <Image source={require('../../img/search.png')} accessibilityLabel="Search icon" />
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#edf5fa',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    alignContent: 'space-between',
    flexDirection: 'row',
    height: 60,
    paddingTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Export component
export { Header };