//
// SignIn Scene

import React, { Component } from 'react';
import styles from './styles';
import { View, Text } from 'react-native';

// Components
import {
  PrimaryButton,
  EmailField,
  PasswordField
} from '../../components';

// Globals
import { Colors, Creds } from '../../lib';

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
    return ({text}) => this.setState({emailText: text});
  }

  setPasswordText() {
    return ({text}) => this.setState({passwordText: text});
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.wrapper }>
          <Text
            style={{
              fontSize: 100,
              fontFamily: 'airstream',
              marginBottom: -20,
              color: Colors.primaryForeground,
              textAlign: 'center'
            }}>
            Queue
          </Text>
          <EmailField
            placeholder={'Email'}
            change={this.setEmailText}
            val={this.state.emailText}
          />
          <PasswordField
            placeholder={'Password'}
            change={this.setPasswordText}
            val={this.state.passwordText}
          />
          <PrimaryButton
            name={'Sign In'}
            press={this.pressBtn}
          />
        </View>
      </View>
    );
  }
}
