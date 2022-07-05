import React from 'react';
import {Pressable, View} from 'react-native';
import {ChevronRight, HelpIcon, KeyIcon, UserIcon} from '../../assets';
import MyText from '../../components/MyText';
import config, {Fonts} from '../../config';
import {authNav, ProfileNav} from '../../navigator/routeName';
import strings from '../../strings';
const Render = ({navigation, route}) => {
  const navTo = screenName => {
    navigation.navigate(screenName);
  };
  const iconProps = {
    size: 14,
    color: config.white,
    style: {
      backgroundColor: config.primaryColor,
      width: 30,
      height: 30,
      textAlign: 'center',
      textAlignVertical: 'center',
      borderRadius: 360,
    },
  };
  return (
    <Pressable
      onPress={() => navigation.navigate(authNav.changePassword)}
      style={{
        width: '90%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderColor: config.disabledColor,
        height: 70,
        paddingHorizontal: 8,
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
        <KeyIcon {...iconProps} />
        <View>
          <MyText
            style={{
              marginLeft: 12,
              fontFamily: Fonts.Medium,
              fontSize: 13,
              color: config.black,
            }}
            text={strings.change_password}
          />
          <MyText
            style={{
              marginLeft: 12,
              fontSize: 11,
              color: config.black,
              width: config.window_width * 0.6,
            }}
            text={strings.useAStrongPassword}
          />
        </View>
      </View>
      <ChevronRight color={config.black} size={18} />
    </Pressable>
  );
};

export default Render;
