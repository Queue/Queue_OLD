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

// Globals
import {
  Colors,
  Firebase
} from '../../lib';

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
    this.setState({num: this.state.num + 1});
  }

  setEmailText() {
    return (text) => this.setState({emailText: text});
  }

  setPasswordText() {
    return (text) => this.setState({passwordText: text});
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.wrapper }>
          <Text
            style={ styles.headerText }>
            Queue
          </Text>
          <EmailField
            placeholder={'Email'}
            change={this.setEmailText()}
            val={this.state.emailText}
          />
          <PasswordField
            placeholder={'Password'}
            change={this.setPasswordText()}
            val={this.state.passwordText}
          />
          <PrimaryButton
            name={'Sign In'}
            press={this.pressBtn}
          />
          <TextButton
            text={'Dont have an account?'}
            press={this.pressBtn}
          />
        </View>
      </View>
    );
  }

}

// end
//
