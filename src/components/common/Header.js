// Import dependencies
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

// Make component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  function onProfilePress() {
    return (
        <View style={{ flex: 2 }}>
          <Text>Pop!</Text>
        </View>
    );
  };

  return (
    <View style={viewStyle}>
      <TouchableOpacity>
        <Image source={require('../../img/profile.png')} accessibilityLabel="Profile icon" onPress={onProfilePress()} />
      </TouchableOpacity>
      <Text style={textStyle}>
        {props.headerText}
      </Text>
      <TouchableOpacity>
        <Image source={require('../../img/search.png')} accessibilityLabel="Search icon" />
      </TouchableOpacity>
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