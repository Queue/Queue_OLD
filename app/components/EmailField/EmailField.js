//
// Email Field Component

import React from 'react'
import styles from './styles';
import { TextInput, View } from 'react-native';

export default EmailField = ({placeholder, change, val}) =>  {
  return (
    <View style={styles.emailField}>
      <TextInput
        onChangeText={change}
        placeholder={placeholder}
        value={val}
      />
    </View>
  );
}
