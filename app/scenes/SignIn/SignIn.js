//
// SignIn Scene

import React, { Component } from 'react';
import styles from './styles';

// RN
import {
  View,
  Text
} from 'react-native';

// Components
import {
  PrimaryButton,
  EmailField,
  PasswordField,
  TextButton
} from '../../components';

import Common from '../../lib/common';
import Data from '../../lib/data';

// So the keyboard doesnt get in the way
import KeyboardSpacer from 'react-native-keyboard-spacer';

// dissmiss the keayboard
import dismissKeyboard from 'react-native-dismiss-keyboard';

// Router
import { Actions } from 'react-native-router-flux';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailText: '',
      passwordText: ''
    };
  }

  signInUser() {
    let email = this.state.emailText,
        password = this.state.passwordText;

    if (password !== '' && Common.validateEmail(email)) {
      // sign in user
      let value = Data.Auth.signIn(email, password);
      console.warn(value);

      dismissKeyboard();

      // Reset fields state
      this.setState({
        emailText: '',
        passwordText: ''
      });

      if (Data.Auth.user()) {
        Actions.DashboardRoute();
      } else {
        Common.error('Error', 'Incorrect email and password.');
      }

    } else {
      Common.error('Error', 'Check your email and password.');
    }
  }

  render() {
    let email = this.state.emailText,
        password = this.state.passwordText;

    return (
      <View style = {styles.container}>
        <View style = {styles.wrapper}>
          <Text
            style = {styles.brand}>
            Queue
          </Text>
          <EmailField
            placeholder = {'Email'}
            change = {(text) => this.setState({emailText: text})}
            val = {email}
          />
          <PasswordField
            placeholder = {'Password'}
            secure = {true}
            change = {(text) => this.setState({passwordText: text})}
            val = {password}
          />
          <PrimaryButton
            name = {'Sign In'}
            press = {this.signInUser.bind(this)}
          />
          <TextButton
            text = {'Dont have an account?'}
            press = {Actions.SignUpRoute}
            size = {16}
          />
          <TextButton
            text = {'Forgot your password?'}
            press = {Actions.ForgotRoute}
            size = {12}
          />
          <KeyboardSpacer />
        </View>
      </View>
    );
  }

}

// end
//
