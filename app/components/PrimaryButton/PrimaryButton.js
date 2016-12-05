//
// Btn component file

import React from 'react'
import styles from './styles';
import { View } from 'react-native';

// Custom simple button with wrapper
import Button from 'react-native-button';

export default PrimaryBtn = ({name, press}) => {
  return (
    <View>
      <Button
        onPress={press}
        containerStyle={styles.btnContainer}
        style={styles.primaryBtn}>
        {name}
      </Button>
    </View>
  );
};
