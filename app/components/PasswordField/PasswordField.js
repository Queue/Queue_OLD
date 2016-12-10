//
// PasswordField Component

import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './styles';
import Colors from '../../lib/colors';

export default PasswordField = ({change, val, textColor, placeholder, edit}) =>  {

  // use the same styles object to add prop
  // changes so it can be controlled by state
  // in higher level components (scenes)
  styles.props = {
    color: textColor
  };

  return (
    <TextInput
      style = {[styles.passwordField, styles.props]}
      onChangeText = {change}
      placeholder = {placeholder}
      editable = {edit}
      value = {val}
      autoCapitalize = {'none'}
      secureTextEntry = {true}
    />
  );
}

PasswordField.propType = {
  placeholder: React.PropTypes.string,
  change: React.PropTypes.func,
  val: React.PropTypes.string,
  textColor: React.PropTypes.string
}

PasswordField.defaultProps = {
  placeholder: 'Placeholder',
  textColor: Colors.primaryForeground,
  editable: false
};
