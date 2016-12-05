//
// PrimaryButton styles.js

import { StyleSheet } from 'react-native';
import { Colors } from '../../lib/globals';

export default styles = StyleSheet.create({
  primaryBtn: {
    fontSize: 20,
    fontWeight: "300",
    color: Colors.primaryForeground
  },
  btnContainer: {
    padding: 8,
    margin: 15,
    marginTop: 25,
    overflow:'hidden',
    borderWidth: 1,
    borderColor: Colors.primaryForeground,
    borderRadius: 4
  }
});
