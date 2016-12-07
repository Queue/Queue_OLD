//
// SignIn styles.js

import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../lib';

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
  },
  headerText: {
    fontSize: 100,
    fontFamily: 'airstream',
    marginBottom: -20,
    color: Colors.primaryForeground,
    textAlign: 'center'
  }
});
