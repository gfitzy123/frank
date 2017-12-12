import React from 'react';
import { View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Home from './components/Home';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
  
        <Scene key="start">
          <Scene key="home" component={Home} initial />
        </Scene>

        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Login / Sign up" />
        </Scene>
 
    </Router>
  );
};

export default RouterComponent;