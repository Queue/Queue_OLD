//
// QueueList

import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View
} from 'react-native';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import styles from './styles';
import Colors from '../../lib/colors';

export default class QueueList extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      listViewData: Array(10).fill('').map((_,i)=>`${i+1}`)
    };
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({listViewData: newData});
  }

  row(data) {
    return (
      <TouchableHighlight
        onPress = {() => console.log('You touched me')}
        style = {styles.rowFront}
        underlayColor = {Colors.primaryBackground}>
        <View>
          <Text>{data} I'm in a SwipeListView'</Text>
        </View>
      </TouchableHighlight>
    );
  }

  hiddenRow(data, secId, rowId, rowMap) {
    return (
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={() => this.deleteRow}>
          <Text style={styles.backTextWhite}>{'Delete'}</Text>
        </TouchableOpacity>
        <View style={[styles.backRightBtn, styles.backRightBtnLeft]}>
          <Text style={styles.backTextWhite}>{'Text'}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <SwipeListView
          dataSource = {this.ds.cloneWithRows(this.state.listViewData)}
          renderRow = {this.row.bind(this)}
          renderHiddenRow = {this.hiddenRow.bind(this)}
          rightOpenValue = {-150}
        />
      </View>
    );
  }
};
