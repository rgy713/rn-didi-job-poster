import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Button from 'library/commons/Button';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
import R from 'resources/R';
const WorkWithUs = () => {
  return (
    <ScreenWrapper>
      <View style={styles.innerContainer}>
        <Text style={styles.text1}>
          You've started the process to greatness!
        </Text>
        <Text style={styles.text2}>
          Working with didijobs is an effective and simple way to make lots
          money with doing things that you are good at.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={'Download the job app'}
          backgroundColor={'#E3AB1A'}
          style={styles.button}
        />
      </View>
    </ScreenWrapper>
  );
};
export default WorkWithUs;
const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  buttonContainer: {margin: 20},
  button: {width: '100%'},
  text1: {
    fontSize: 20,
    color: R.colors.PRIMARI_DARK,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
  },
  text2: {
    color: R.colors.PRIMARI_DARK,
    fontSize: 16,
    textAlign: 'center',
    alignItems: 'center',
    top: 15,
  },
});
