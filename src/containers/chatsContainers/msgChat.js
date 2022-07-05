/* eslint-disable react-native/no-inline-styles */
import moment from 'moment';
import React, {memo} from 'react';
import {Text, View, Pressable} from 'react-native';
import config, {Fonts} from '../../config';

const MsgChat = ({navigation, item, usrId}) => {
  return (
    <View
      style={{
        alignItems: usrId == item?.sender_type_id ? 'flex-end' : 'flex-start',
        width: '100%',
      }}>
      <View
        style={{
          width: '70%',
          paddingHorizontal: 20,
        }}>
        <Text
          style={{
            borderRadius: 20,
            paddingVertical: 12,
            paddingHorizontal: 20,
            overflow: 'hidden',
            backgroundColor:
              item.sender_type_id == usrId
                ? config.textPrimaryColor
                : config.backgroundColor,
            fontSize: 12,
            color: item.sender_type_id == usrId ? config.white : config.black,
          }}>
          {item.sender_type_id == usrId
            ? 'Sure, 1 sec'
            : 'Hey, could you work for me? I am verified and I really like you skills'}
        </Text>
        <Text
          style={{
            fontSize: 9,
            alignSelf: 'flex-end',
            color: config.headingColor,
            fontFamily: Fonts.Semi_Bold,
            marginTop: 4,
          }}>
          {moment(new Date()).format('LT')}
        </Text>
      </View>
    </View>
  );
};
export default MsgChat;
