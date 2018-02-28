import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

import { TurqButton, Card, CardSection, Input, Spinner } from './common/Index';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });

    Actions.land();
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <TurqButton onPress={this.onButtonPress.bind(this)}>
        Log in
      </TurqButton>
    );
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Image style={styles.imgStyle} source={require('../img/logo.png')} alt="Frank's logo" />
        <View style={{ paddingTop: 80 }}>
          <Card>
          <Text style={styles.loginTextStyle}>Login</Text>
            <CardSection>
              <Input
                placeholder="user@gmail.com"
                label="Email:"
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
            </CardSection>

            <CardSection>
              <Input
                secureTextEntry
                placeholder="password"
                label="Password:"
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
            </CardSection>

            <Text style={styles.errorTextStyle}>
              {this.state.error}
            </Text>

            <CardSection>
              {this.renderButton()}
            </CardSection>

          </Card>
        </View>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
  loginTextStyle: {
    fontSize: 26,
    fontWeight: '400',
    alignSelf: 'center',
    paddingBottom: 20,
    paddingTop: 20,
  },
  viewStyle: {
    backgroundColor: '#123c66',
    flex: 1
  },
  imgStyle: {
    alignSelf: 'center',
    marginTop: 60,
    height: 50,
    width: 50
  }
};

export default LoginForm;
