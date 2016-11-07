import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';
import DayItem from './src/day-item.js';
import moment from 'moment';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class ReactNative_Weekday extends Component {
  days() {
    const daysItems = [];

    for (var i = 0, l = DAYS.length; i < l; i++) {
      const day = moment().add(i, 'days').format('dddd');
      daysItems.push(
        <DayItem day={day} daysUntil={i} />
      )
    }

    return daysItems;
  }

  render() {
      return (
          <View style={styles.container}>
            {this.days()}
          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

AppRegistry.registerComponent('ReactNative_Weekday', () => ReactNative_Weekday);
