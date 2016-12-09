//
// PasswordField Component

import React from 'react';
import styles from './styles';
import { TextInput, View } from 'react-native';

export default PasswordField = ({placeholder, change, val}) =>  {
  return (
    <TextInput
      style={ styles.passwordField }
      onChangeText={change}
      placeholder={placeholder}
      value={val}
    />
  );
}
