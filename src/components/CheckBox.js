import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {Entypo} from '../assets';
import config, {Fonts} from '../config';
export default ({remember, title, style, setRemember}) => {
  return (
    <Pressable
      onPress={() => {
        setRemember(!remember);
      }}
      style={{flexDirection: 'row', alignItems: 'center', ...style}}>
      <View
        style={{
          height: 17,
          width: 17,
          backgroundColor: remember ? config.activeColor : config.disabledColor,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
        }}>
        {remember && <Entypo name={'check'} size={15} color={config.white} />}
      </View>
      <Text
        style={{
          marginLeft: 6,
          top: 1,
          fontFamily: Fonts.Regular,
          fontSize: 11,
          textDecorationLine: 'underline',
          color: config.primaryColor,
        }}>
        {title}
      </Text>
    </Pressable>
  );
};
