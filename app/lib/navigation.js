//
// Router Navigation

import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

// Scenes
import {
  SignIn,
  SignUp,
  Dashboard
} from '../scenes';

export default Navigation = () => {
  return (
    <Router>
      <Scene key={'Root'} animation={'fade'}>
        <Scene
          initial = {true}
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
          key = {'DashboardRoute'}
          component = {Dashboard}
          hideNavBar = {true}
          direction = {'vertical'}
        />
      </Scene>
    </Router>
  );
};
