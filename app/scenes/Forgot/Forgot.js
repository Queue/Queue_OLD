//
// Forgot Scene

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

export default class Forgot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailText: ''
    };
  }

  resetPassword() {
    let email = this.state.emailText;

    if (email !== '' && Common.validateEmail(email)) {

      Data.Auth.resetPassEmail(email);

      dismissKeyboard();
      Actions.SignInRoute();

    } else {
      Common.error('Error', 'Enter your email');
    }
  }

  render() {
    let email = this.state.emailText;

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
            change = {(text) => this.setState({emailText: text})}
            val = {email}
          />
          <PrimaryButton
            name = {'Reset Password'}
            press = {this.resetPassword.bind(this)}
          />
          <TextButton
            size = {16}
            text = {'Back↵ '}
            press = {Actions.SignInRoute}
          />
          <KeyboardSpacer />
        </View>
      </View>
    );
  }

}

// end
//
