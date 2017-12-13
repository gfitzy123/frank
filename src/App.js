import React, { Component } from 'react';
import firebase from 'firebase';
import Router from './Router';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDR4xlUKgav_oWmHTnzFchF6Y6Ddbn52yM",
      authDomain: "frank-ba8b3.firebaseapp.com",
      databaseURL: "https://frank-ba8b3.firebaseio.com",
      projectId: "frank-ba8b3",
      storageBucket: "",
      messagingSenderId: "1097302905279"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    return (
      <Router />
    );
  }
}

export default App;