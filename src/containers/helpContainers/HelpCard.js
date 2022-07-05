import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import {PencilIcon} from '../../assets';
import MyText from '../../components/MyText';
import config, {Fonts} from '../../config';
import {ProfileNav} from '../../navigator/routeName';

const HelpSupport = ({item, index, arr, active, setActive, navigation}) => {
  const navTo = screenName => {
    navigation.navigate(screenName);
  };
  return (
    <Pressable
      onPress={() => {
        setActive(item);
      }}
      style={{
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: index + 1 == arr.length ? 0 : 1,
        borderColor: config.disabledColor,
        height: 50,
        paddingHorizontal: 8,
      }}>
      <View
        style={{
          borderColor: config.headingColor,
          borderRadius: 360,
          borderWidth: 1,
          width: 18,
          height: 18,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {active == item && (
          <View
            style={{
              backgroundColor: config.primaryColor,
              borderRadius: 360,
              width: 12,
              height: 12,
            }}
          />
        )}
      </View>
      <View style={{marginLeft: 18}}>
        <MyText
          style={{
            fontSize: 13,
            lineHeight: 16,
            fontFamily: Fonts.Medium,
            color: config.black,
          }}
          text={item}
        />
        <MyText
          style={{
            fontSize: 10,
            lineHeight: 13,
            color: config.black,
          }}
          text={item}
        />
      </View>
    </Pressable>
  );
};
export default HelpSupport;
