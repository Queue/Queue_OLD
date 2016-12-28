//
// Dashboard scene

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Grid, Col } from 'react-native-easy-grid';
import Layout from '../../lib/layout';
import Colors from '../../lib/colors';

// components
import { TextButton, QueueList } from '../../components';

// Router Actions see ../../lib/navigation
import { Actions } from 'react-native-router-flux'

import Data from '../../lib/data';
import Fonts from '../../lib/fonts';

import * as firebase from 'firebase';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {num: 0};
  }

  // test purposes only
  ping() {
    console.log(Data.Auth.user().providerData[0].uid);
  }

  render() {
    return (
      <Grid>

        <Col style={styles.navMenu}>
          <View style={Layout.container}>
            <TextButton
              styles = {styles.logOutButton}
              font = {Fonts.brand}
              size={100}
              text = {'Q'}
              press = {this.ping.bind(this)} />
          </View>
        </Col>

        <Col style={styles.actionArea}>
          <View style={Layout.container}>
          </View>
        </Col>

        <Col style={styles.queueList}>
          <QueueList />
        </Col>

      </Grid>
    );
  }
};

const styles = StyleSheet.create({
  default: {
    backgroundColor: 'white'
  },
  logOutButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  navMenu: {
    borderRightWidth: 1,
    borderColor: Colors.primaryBackground,
    maxWidth: 110
  },
  actionArea: {
    borderRightWidth: 1,
    borderColor: Colors.primaryBackground,
    minWidth: 525
  },
  queueList: {
  }
});
