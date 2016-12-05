//
// Home Scene

import React, { Component } from 'react';
import { View, Text} from 'react-native'

// Components
import PrimaryButton from '../../components/PrimaryButton';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>Home Scene</Text>
      </View>
    );
  }
}
