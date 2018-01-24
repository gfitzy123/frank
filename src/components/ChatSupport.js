import React, { Component } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import NavBar from './NavBar';

class ChatSupport extends Component {
  render() {
    //get today's date
    let date = new Date().toDateString();
    let currentMonth = date.slice(3, 7);
    let currentDay = date.slice(7, 10);
    let currentYear = date.slice(10, 15);

    return (
      <View style={{ paddingTop: 25 }}>
        <Text style={styles.titleStyle}>Support</Text>
        <View style={styles.lineStyle} />
          <View style={styles.containerStyle}>
            <Image
              style={styles.imgStyle}
              source={{ uri: 'https://amylynnjorgensen.files.wordpress.com/2013/10/amy-profile.jpg' }}
            />
            <View style={styles.chatBoxStyle}>
              <Text style={styles.supportTextStyle}>Hey, I'm Sandra. How can I help you today?</Text>
            </View>
          </View>
          <Text writingDirection="ltr" style={styles.supportNameStyle}>Sandra Duquet, <Text>{ currentMonth + ' ' + currentDay + ', ' + currentYear}</Text></Text>
        {/* <NavBar /> */}
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
    height: 50,
    width: 50,
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 20
  },
  lineStyle:{
    borderWidth: 0.6,
    borderColor: '#e2e2e2',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
  },
  supportNameStyle: {
    fontSize: 10,
    fontWeight: '200',
    alignSelf: 'flex-end',
    marginRight: 25
  },
  supportTextStyle: {
    fontSize: 12,
    fontWeight: '500',
    alignSelf: 'flex-end'
  },
  chatBoxStyle: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginTop: 10,
    backgroundColor: '#e0ecff',
    borderRadius: 20,
    padding: 10
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
}

export default ChatSupport;
