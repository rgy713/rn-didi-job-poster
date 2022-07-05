import React from 'react';
import {View} from 'react-native';
import {StyleSheet, Dimensions} from 'react-native';
import MyText from './MyText';
import PropTypes from 'prop-types';

const MyHeader = ({title}) => {
  return (
    <View style={styles.header}>
      <View style={styles.left}></View>
      <View style={styles.center}>
        <MyText text={title} />
      </View>
      <View style={styles.right}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('window').width,
  },
  left: {
    width: '15%',
  },
  center: {
    width: '70%',
  },
  right: {
    width: '15%',
  },
});

MyHeader.propTypes = {
  title: PropTypes.string.isRequired,
  back: PropTypes.bool,
  navigation: PropTypes.object.isRequired,
};

export default MyHeader;
