import React from 'react';
import { View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Landing from './components/Landing';

const RouterComponent = () => {
  return (
 
    <Router>
        <Scene key="start">
          <Scene key="home" component={Home} title="Home" hideNavBar initial />
        </Scene>

        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Login / Sign up" hideNavBar />
        </Scene>

        <Scene key="land">
          <Scene key="landing" component={Landing} title="Statistics" hideNavBar initial />
        </Scene>
    </Router>

  );
};

export default RouterComponent;