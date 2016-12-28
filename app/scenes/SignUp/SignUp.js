//
// SignUp Scene

import React, { Component } from 'react';
import styles from './styles';
import {View,  Text} from 'react-native';

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
import Data from '../../lib/data';

// Colors
import Colors from '../../lib/colors';

// Router Actions see ../../lib/navigation
import { Actions } from 'react-native-router-flux'

// Dismiss keyboard
import dismissKeyboard from 'react-native-dismiss-keyboard';

import Common from '../../lib/common';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Focus bool
      focus: false,

      // Form fields state
      emailText: '',
      passwordText: '',
      unfocus: true,

      // Color
      emailColor: Colors.primaryForeground,
      passwordColor: Colors.primaryForeground
    };
  }

  createUser() {
    if (this.state.passwordText !== '') {

      // Create a new user
      Data.Auth.signUp(this.state.emailText, this.state.passwordText);

      dismissKeyboard();

      // Reset fields state
      this.setState({
        emailText: '',
        passwordText: ''
      });

      Actions.DashboardRoute();

    } else {
      console.warn('Enter a password!');
    }
  }

  checkEmail(text) {
    if (text.length >= 6) {
      this.setState({emailColor: Colors.primaryForeground});
    } else {
      this.setState({emailColor: Colors.error});
    }

    this.setState({emailText: text});
  }

  checkPass(text) {
    if (text.length >= 6) {
      this.setState({passwordColor: Colors.primaryForeground});
    } else {
      this.setState({passwordColor: Colors.error});
    }

    this.setState({passwordText: text});
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
            focus={this.state.focus}
            change = {this.checkEmail.bind(this)}
            val = {this.state.emailText}
          />
          <PasswordField
            textColor = {this.state.passwordColor}
            placeholder = {'Password'}
            change = {this.checkPass.bind(this)}
            val = {this.state.passwordText}
          />
          <PrimaryButton
            name = {'Sign Up'}
            press = {this.createUser.bind(this)}
          />
          <TextButton
            text={'Already have an account?'}
            size = {16}
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
