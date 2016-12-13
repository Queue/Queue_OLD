//
// Dashboard scene

import React, { Component } from 'react';
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
        <Col size={3} style={{backgroundColor: 'red'}}></Col>
        <Col size={4} style={{backgroundColor: 'white'}}></Col>
        <Col size={1} style={{backgroundColor: 'blue'}}></Col>
      </Grid>
    );
  }
};
