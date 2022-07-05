import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import {HomeIcon, PencilIcon} from '../../assets';
import {MyNativeInput} from '../../components';
import MyText from '../../components/MyText';
import config, {Fonts} from '../../config';
import {ProfileNav} from '../../navigator/routeName';

const HelpSupport = ({title, avatar, headingStyle, style, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        paddingHorizontal: 8,
        justifyContent: 'space-between',
        ...style,
      }}>
      <MyText
        style={{
          fontSize: 17,
          fontFamily: Fonts.Medium,
          color: config.black,
          ...headingStyle,
        }}
        text={title}
      />

      {avatar}
    </Pressable>
  );
};
export default HelpSupport;
