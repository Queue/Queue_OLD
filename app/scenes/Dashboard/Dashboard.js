//
// Dashboard scene

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Grid, Col } from 'react-native-easy-grid';
import styles from './styles';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Grid>

        <Col style={{backgroundColor: 'red', width: 110}}></Col>

        <Col style={{backgroundColor: '#eaeaea'}}></Col>

        <Col style={{backgroundColor: 'blue', width: 350}}></Col>

      </Grid>
    );
  }
};
