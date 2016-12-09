//
// PasswordField Component

import React from 'react';
import styles from './styles';
import { TextInput, View } from 'react-native';

export default PasswordField = ({placeholder, change, val, secure}) =>  {
  return (
    <TextInput
      style = {styles.passwordField }
      secureTextEntry = {secure}
      onChangeText = {change}
      placeholder = {placeholder}
      value={val}
    />
  );
}
