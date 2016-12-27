//
// PasswordField styles.js

import { StyleSheet } from 'react-native';
import Colors from '../../lib/colors';
import Fonts from '../../lib/fonts';

const inputHeight = 40;

export default styles = StyleSheet.create({
  passwordField: {
    fontFamily: Fonts.content,
    color: Colors.primaryForeground,
    margin: 10,
    paddingLeft: 15,
    paddingRight: 15,
    height: inputHeight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    backgroundColor: 'white',
    zIndex: 1
  },
  showText: {
    color: Colors.primaryForeground
  },
  showTextHighlight: {
    position: 'absolute',
    right: 20,
    top: (inputHeight / 2),
    zIndex: 9999,
    backgroundColor: 'transparent'
  }
});
