import {View} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import config from '../config';

const OnlineIndicator = props => {
  return <View style={styles.online} />;
};

const styles = StyleSheet.create({
  online: {
    height: 8,
    width: 8,
    backgroundColor: config.activeColor,
    borderRadius: 10,
    marginRight: 5,
  },
});

export default OnlineIndicator;
