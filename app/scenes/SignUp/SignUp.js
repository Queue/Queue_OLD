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
      // Form fields state
      emailText: '',
      passwordText: '',

      // Color
      emailColor: Colors.primaryForeground,
      passwordColor: Colors.primaryForeground
    };
  }

  createUser() {
    let email = this.state.emailText,
        password = this.state.passwordText;

    if (!Common.validateEmail(email)) {
      return Common.error('Error', 'Enter a valid email.');
    }

    if (password === '' || password.length < 8) {
      Common.error('Error', 'Enter a valid password.\n(Eight characters or more)');
    } else {
      // Create a new user
      Data.Auth.signUp(email, password);

      dismissKeyboard();

      // Reset fields state
      this.setState({
        emailText: '',
        passwordText: ''
      });

      Actions.DashboardRoute();
    }
  }

  checkEmail(text) {
    if (Common.validateEmail(text)) {
      this.setState({emailColor: Colors.primaryForeground});
    } else {
      this.setState({emailColor: Colors.warning});
    }

    this.setState({emailText: text});
  }

  checkPass(text) {
    if (text.length >= 8) {
      this.setState({passwordColor: Colors.primaryForeground});
    } else {
      this.setState({passwordColor: Colors.warning});
    }

    this.setState({passwordText: text});
  }

  render() {
    let email = this.state.emailText,
        password = this.state.passwordText,
        emailColor = this.state.emailColor,
        passColor = this.state.passwordColor;

    return (
      <View style = {styles.container}>
        <View style = {styles.wrapper}>
          <Text
            style = {styles.brand}>
            Queue
          </Text>
          <EmailField
            textColor = {emailColor}
            placeholder = {'Email'}
            change = {this.checkEmail.bind(this)}
            val = {email}
          />
          <PasswordField
            textColor = {passColor}
            placeholder = {'Password'}
            change = {this.checkPass.bind(this)}
            val = {password}
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
