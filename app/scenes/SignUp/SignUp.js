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
      emailText: '',
      passwordText: '',
      passwordConfirmText: ''
    };

    // Bind all functions
    this.createUser = this.createUser.bind(this);
  }

  createUser() {
    if (this.state.passwordText !== '' && this.state.passwordText === this.state.passwordConfirmText ) {
        // Create a new user
        Firebase.auth().createUserWithEmailAndPassword(this.state.emailText, this.state.passwordText).catch(
          (error) => {
            if (error) {
              console.error(
                'ERROR' + '\n' +
                'Code: ' + error.code + '\n' +
                'Message: ' + error.message
              );
            }
          }
        );
    } else {
      console.warn('Enter a password!');
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
            change = { (text) => this.setState({emailText: text}) }
            val = {this.state.emailText}
          />
          <PasswordField
            placeholder = {'Password'}
            secure = {true}
            change = { (text) => this.setState({passwordText: text}) }
            val = {this.state.passwordText}
          />
          <PasswordField
            placeholder = {'Confirm Password'}
            secure = {true}
            change = { (text) => this.setState({passwordConfirmText: text}) }
            val = {this.state.passwordConfirmText}
          />
          <PrimaryButton
            name={'Sign Up'}
            press={this.createUser}
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
