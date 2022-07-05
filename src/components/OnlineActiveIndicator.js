import {View} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import config from '../config';
import strings from '../strings';
import MyText from './MyText';
import OnlineIndicator from './OnlineIndicator';

const OnlineActiveIndicator = props => {
  return (
    <View style={styles.container}>
      <OnlineIndicator />
      <MyText text={strings.active} style={styles.active} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  active: {
    color: config.activeColor,
  },
});

export default OnlineActiveIndicator;
