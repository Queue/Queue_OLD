//
// TextButton component

import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import styles from './styles';
import Colors from '../../lib/colors';

export default TextButton = ({press, text}) => {
  return (
    <TouchableHighlight
      onPress={press}
      underlayColor={Colors.primaryBackground}>
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
