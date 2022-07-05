import React from 'react';
import {View, Text,  StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import R from 'resources/R';
/*
 * This function is used to create rating component
 * @author Didijobs <rgy713>
 */
export default function Rating() {
  const star = [1, 2, 3, 4, 5];
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.innerContainer}>
        {star.map(item => {
          return (
            <View style={styles.star}>
              <Icon name="star" size={20} color="#FFAA00" />
            </View>
          );
        })}
      </View>
      <Text style={styles.description}>
        Saddie was great to work with, she did the job with great success.
      </Text>
      <Text style={styles.description}>10/02/2022</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 140,
  },
  star: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  description: {
    fontSize: R.fontSize.S,
    color: '#475569',
    fontFamily: R.fonts.Regular,
  },
});
