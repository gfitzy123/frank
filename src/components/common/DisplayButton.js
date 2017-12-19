import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const DisplayButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;


  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
    >
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#111',
    fontSize: 12,
    fontWeight: '400',
    padding: 0
  },
  buttonStyle: {
    borderRadius: 10,
    backgroundColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: .5,
    padding: 18
  }
}

export { DisplayButton };