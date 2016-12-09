//
// SignUp Scene

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
import Firebase from '../../lib/firebase';

import { Actions } from 'react-native-router-flux'

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0,
      emailText: '',
      passwordText: ''
    };

    // Bind all functions
    this.pressBtn = this.pressBtn.bind(this);
    this.setEmailText = this.setEmailText.bind(this);
    this.setPasswordText = this.setPasswordText.bind(this);
    this.setPasswordConfirmText = this.setPasswordConfirmText.bind(this);
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

  setPasswordConfirmText() {
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
          <PasswordField
            placeholder = {'Confirm Password'}
            secure = {true}
            change = {this.setPasswordConfirmText()}
            val = {this.state.passwordText}
          />
          <PrimaryButton
            name={'Sign Up'}
            press={this.pressBtn()}
          />
          <TextButton
            text={'Already have an account?'}
            press={Actions.SignInRoute}
          />
          <KeyboardSpacer />
        </View>
      </View>
    );
  }

}

// end
//
