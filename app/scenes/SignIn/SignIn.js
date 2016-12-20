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

// So the keyboard doesnt get in the way
import KeyboardSpacer from 'react-native-keyboard-spacer';

// Data
//import Firebase from '../../lib/firebase';

// Router
import { Actions } from 'react-native-router-flux';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0,
      emailText: '',
      passwordText: ''
    };

    this.pressBtn = this.pressBtn.bind(this);
    this.setEmailText = this.setEmailText.bind(this);
    this.setPasswordText = this.setPasswordText.bind(this);
  }

  pressBtn() {
    return () => this.setState({num: this.state.num + 1});
  }

  setEmailText() {
    return (text) => this.setState({emailText: text});
  }

  setPasswordText() {
    return (text) => this.setState({passwordText: text});
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.wrapper}>
          <Text
            style = {styles.brand}>
            Queue
          </Text>
          <EmailField
            placeholder = {'Email'}
            change = {this.setEmailText()}
            val = {this.state.emailText}
          />
          <PasswordField
            placeholder = {'Password'}
            secure = {true}
            change = {this.setPasswordText()}
            val = {this.state.passwordText}
          />
          <PrimaryButton
            name = {'Sign In'}
            press = {Actions.DashboardRoute}
          />
          <TextButton
            text = {'Dont have an account?'}
            press = {Actions.SignUpRoute}
            size = {18}
          />
          <TextButton
            text = {'Forgot your password?'}
            press = {Actions.SignUpRoute}
          />
          <KeyboardSpacer />
        </View>
      </View>
    );
  }

}

// end
//
