//
// SignIn styles.js

import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../lib/globals';

let { width, height }  = Dimensions.get('window');

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
    backgroundColor: Colors.primaryBackground
  },
  wrapper: {
    width: 250
  }
});
