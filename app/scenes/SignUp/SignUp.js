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
import Firebase from '../../lib/firebase';

// Colors
import Colors from '../../lib/colors';

// Router Actions see ../../lib/navigation
import { Actions } from 'react-native-router-flux'

// Dismiss keyboard
import dismissKeyboard from 'react-native-dismiss-keyboard';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Focus bool
      focus: false,

      // Form fields state
      emailText: '',
      passwordText: '',
      passwordConfirmText: '',
      unfocus: true,

      // Color
      passwordConfirmColor: Colors.primaryForeground,
      passwordColor: Colors.primaryForeground
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
            console.warn(
              'ERROR' + '\n' +
              'Code: ' + error.code + '\n' +
              'Message: ' + error.message
            );
          }
        }
      );

      dismissKeyboard();

      // Reset fields state
      this.setState({
        emailText: '',
        passwordText: '',
        passwordConfirmText: ''
      });

      // TODO go to users Queue dashboard instead of 
      Actions.SignInRoute();

    } else {
      console.warn('Enter a password!');
    }
  }

  checkPassLength(text) {
    if (text.length >= 6) {
      this.setState({passwordColor: Colors.primaryForeground});
    } else {
      this.setState({passwordColor: Colors.error});
    }

    this.setState({passwordText: text});
  }

  checkConfirmPass(text) {
    if (text === this.state.passwordText) {
      this.setState({passwordConfirmColor: Colors.primaryForeground});
    } else {
      this.setState({passwordConfirmColor: Colors.error});
    }

    this.setState({passwordConfirmText: text});
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
          <PasswordField
            textColor = {this.state.passwordColor}
            placeholder = {'Password'}
            change = {this.checkPassLength.bind(this)}
            val = {this.state.passwordText}
          />
          <PasswordField
            textColor = {this.state.passwordConfirmColor}
            placeholder = {'Confirm Password'}
            edit = {this.state.unfocus}
            change = {this.checkConfirmPass.bind(this)}
            val = {this.state.passwordConfirmText}
          />
          <PrimaryButton
            name = {'Sign Up'}
            press = {this.createUser}
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
