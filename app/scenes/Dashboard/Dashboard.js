//
// Dashboard scene

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Grid, Col } from 'react-native-easy-grid';
import Layout from '../../lib/layout';
import Colors from '../../lib/colors';

// components
import { TextButton } from '../../components';

// Router Actions see ../../lib/navigation
import { Actions } from 'react-native-router-flux'

import Data from '../../lib/data';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {num: 0};
  }

  // test purposes only
  ping() {
    this.setState({num: this.state.num + 1});
    // run react-native log-ios to see logs
    console.log(this.state.num);
    //console.warn(JSON.stringify(Data.firebase.auth().currentUser));
  }

  render() {
    return (
      <Grid>

        <Col style={styles.navMenu}>
          <View style={Layout.container}>
            <TextButton
              styles = {styles.logOutButton}
              size={77}
              text = {'Q'}
              press = {this.ping.bind(this)} />
          </View>
        </Col>
        <Col style={styles.actionArea}>
          <View style={Layout.container}>
            <TextButton
              styles = {styles.logOutButton}
              text = {'Log Out'}
              press = {Actions.SignInRoute} />
          </View>
        </Col>
        <Col style={styles.queueList}></Col>

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
    maxWidth: 130
  },
  actionArea: {
    borderRightWidth: 1,
    borderColor: Colors.primaryBackground,
  },
  queueList: {
    maxWidth: 320
  }
});
