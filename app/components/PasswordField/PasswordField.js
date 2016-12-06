//
// PasswordField Component

import React from 'react';
import styles from './styles';
import { TextInput, View } from 'react-native';

export default PasswordField = ({placeholder, change, val}) =>  {
  return (
    <View style={styles.passwordField}>
      <TextInput
        onChangeText={change}
        placeholder={placeholder}
        value={val}
      />
    </View>
  );
}