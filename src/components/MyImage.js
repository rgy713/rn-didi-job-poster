import React, {useState} from 'react';
import {Image, View, Pressable} from 'react-native';
import profileIcon from '../assets/Images/placeholder.png';
const MyImage = ({source, size, resizeMode, style, tintColor}) => {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        ...style,
      }}>
      <Image
        resizeMode={resizeMode || 'contain'}
        source={source || profileIcon}
        style={{
          height: '100%',
          backgroundColor: 'transparent',
          width: '100%',
          tintColor: tintColor,
        }}
      />
    </View>
  );
};
export default MyImage;
