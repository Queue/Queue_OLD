//
// TextButton component

import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import styles from './styles';
import Colors from '../../lib/colors';

export default TextButton = ({press, text, size}) => {

  // Set font size defaults to 14
  styles.size = {
    fontSize: size
  }

  return (
    <TouchableHighlight
      onPress = {press}
      underlayColor = {Colors.primaryBackground}>
      <Text style = {[styles.textButton, styles.size]}>{text}</Text>
    </TouchableHighlight>
  );
};

TextButton.propTypes = {
  press: React.PropTypes.func,
  text: React.PropTypes.string,
  size: React.PropTypes.number
};

TextButton.defaultProps = {
  text: 'Add Text',
  size: 14
}
