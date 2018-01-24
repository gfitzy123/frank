import React, { Component } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import NavBar from './NavBar';
// import { Input, CardSection } from './common/Index';

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
            <View style={{ marginBottom: 300 }}>
              <View style={styles.chatBoxStyle}>
                <Text style={styles.supportTextStyle}>Hey, I'm Sandra. How can I help you today?</Text>
              </View>
              <Text style={styles.supportNameStyle}>Sandra Duquet, <Text>{ currentMonth + ' ' + currentDay + ', ' + currentYear}</Text></Text>
            </View>
        </View>

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
    marginLeft: 65,
    borderRadius: 15,
    borderColor: '#ddd'
  },
  lineStyle:{
    borderWidth: 0.6,
    borderColor: '#e2e2e2',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10
  },
  supportNameStyle: {
    fontSize: 10,
    fontWeight: '300',
    alignSelf: 'flex-end',
    marginRight: 70,
    marginTop: 10,
    backgroundColor: 'transparent'
  },
  supportTextStyle: {
    fontSize: 12
  },
  chatBoxStyle: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginTop: 30,
    marginRight: 70,
    backgroundColor: '#e0ecff',
    borderRadius: 20,
    padding: 20
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
}

export default ChatSupport;
