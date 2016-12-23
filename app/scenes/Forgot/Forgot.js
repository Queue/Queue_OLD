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
    if (this.state.emailText !== '') {

      let auth = Data.firebase.auth();
      let emailAddress = this.state.emailText;

      auth.sendPasswordResetEmail(emailAddress).then(() => {
        // Email sent.
      }, (error) => {
        // An error happened.
      });

      dismissKeyboard();
      Actions.SignInRoute();

    } else {
      console.warn('Enter your email');
    }
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
            change = {(text) => this.setState({emailText: text})}
            val = {this.state.emailText}
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
