//
// SignIn Scene

import React, { Component } from 'react';
import styles from './styles';
import { View, Text } from 'react-native';

// Components
import PrimaryButton from '../../components/PrimaryButton';
import EmailField from '../../components/EmailField'
import PasswordField from '../../components/PasswordField';

// Globals
import { Colors } from '../../lib/globals';

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

//<Grid style={ styles.main }>
  //<Col style={{ flex: 1, maxWidth: 260 }}>
  //</Col>
//</Grid>
