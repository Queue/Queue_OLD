//
// PasswordField Component

import React, { Component } from 'react';
import { TextInput, View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';
import Colors from '../../lib/colors';

export default class PasswordField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hide: true
    };

    // use the same styles object to add prop
    // changes so it can be controlled by state
    // in higher level components (scenes)
    styles.props = {
      color: this.props.textColor
    };
  }

  showPass() {
    return this.setState({
      hide: !this.state.hide
    });
  }

  render() {
    const EYE = '\uD83D\uDC41';

    return (
      <View>
        <TextInput
          style = {[styles.passwordField, styles.props]}
          onChangeText = {this.props.change}
          placeholder = {this.props.placeholder}
          editable = {this.props.edit}
          value = {this.props.val}
          autoCapitalize = {'none'}
          secureTextEntry = {this.state.hide}
        />
        <TouchableHighlight
          style = {styles.showTextHighlight}
          onPress = {this.showPass.bind(this)}
          underlayColor = {'transparent'}>
          <Text style={styles.showText}>{EYE}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

PasswordField.propType = {
  placeholder: React.PropTypes.string,
  change: React.PropTypes.func,
  val: React.PropTypes.string,
  textColor: React.PropTypes.string,
  secure: React.PropTypes.bool
}

PasswordField.defaultProps = {
  placeholder: 'Placeholder',
  textColor: Colors.primaryForeground,
  editable: false,
  secure: true
};
