//
// Email Field Component

import React from 'react'
import { View, TextInput } from 'react-native';
import styles from './styles';

export default EmailField = ({placeholder, change, val}) =>  {
  return (
    <View style={ styles.emailFieldWrapper }>
      <TextInput
        style={ styles.emailField }
        onChangeText={change}
        placeholder={placeholder}
        value={val}
      />
    </View>
  );
}

EmailField.propTypes = {
  placeholder: React.PropTypes.string,
  val: React.PropTypes.string,
  change: React.PropTypes.func
};

EmailField.defaultProps = {
  placeholder: 'placeholder'
};
