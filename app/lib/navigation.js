//
// Router Navigation

import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';

// Scenes
import {
  SignIn,
  SignUp,
  Forgot,
  Dashboard
} from '../scenes';
import Data from './data'

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signInBool: true,
      dashboardBool: false
    };
  }

  componentWillMount() {
    console.log(Data.Auth.user())
    if (Data.Auth.user()) {
      this.setState({
        signInBool: false,
        dashboardBool: true
      });
    } else {
    this.setState({
        signInBool: true,
        dashboardBool: false
      });
    }
  }

  render() {
    let signInBool = this.state.signInBool,
        dashboardBool = this.state.dashboardBool;

    return (
      <Router>
        <Scene key={'Root'} animation={'fade'}>
          <Scene
            initial = {signInBool}
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
            initial = {dashboardBool}
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
