//
// TextButton component

import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import styles from './styles';

export default TextButton = ({press, text}) => {
  return (
    <TouchableHighlight onPress={press}>
      <Text style={ styles.textButton }>{text}</Text>
    </TouchableHighlight>
  );
};

TextButton.propTypes = {
  press: React.PropTypes.func,
  text: React.PropTypes.string
};

TextButton.defaultProps = {
  text: 'Add Text'
}
