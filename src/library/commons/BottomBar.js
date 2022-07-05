import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
      /*
   * This component is the bottom bar 
   * @author Didijobs <rgy713>
   */
export default function BottomBar(title) {
  return (
    <View style={styles.candidatesCount}>
      <Text style={styles.candidatesCountText}>{`${title.title}`}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  candidatesCount: {
    width: '100%',
    backgroundColor: '#0F172A',
    height: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  candidatesCountText: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
  },
});
