import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class ChatSupport extends Component {
  render() {
    return (
      <View style={{ paddingTop: 25 }}>
        <Text style={styles.titleStyle}>Support</Text>
        <Image
          style={styles.imgStyle}
          source={{ uri: 'https://amylynnjorgensen.files.wordpress.com/2013/10/amy-profile.jpg' }}
        />
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center'
  },
  imgStyle: {
    height: 40,
    width: 40,
    borderRadius: 20
  }
}

export default ChatSupport;
