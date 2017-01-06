//
// Router Navigation

import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import {
  SignIn,
  SignUp,
  Forgot,
  Dashboard
} from '../scenes';
import Data from './data'

export default class Navigation extends Component {
  render() {
    return (
      <Router>
        <Scene key={'Root'} animation={'fade'}>
          <Scene
            key = {'SignInRoute'}
            component = {SignIn}
            hideNavBar = {true}
            direction = {'leftToRight'}
          />
          <Scene
            key = {'SignUpRoute'}
            component = {SignUp}
            hideNavBar = {true}
          />
          <Scene
            key = {'ForgotRoute'}
            component = {Forgot}
            hideNavBar = {true}
          />
          <Scene
            initial = {true}
            key = {'DashboardRoute'}
            component = {Dashboard}
            hideNavBar = {true}
            panHandlers={null}
            direction = {'vertical'}
          />
        </Scene>
      </Router>
    );
  }
};
