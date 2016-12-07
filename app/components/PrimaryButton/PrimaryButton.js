//
// Btn component file

import React from 'react'
import styles from './styles';

// Custom simple button with wrapper
import Button from 'react-native-button';

export default PrimaryBtn = ({name, press}) => {
  return (
    <Button
      onPress={press}
      containerStyle={styles.btnContainer}
      style={styles.primaryBtn}>
      {name}
    </Button>
  );
};
