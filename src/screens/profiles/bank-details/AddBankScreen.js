import React from 'react';
import {
  MyBtn,
  MyNativeInput,
  MyText,
  SafeScrollView,
} from '../../../components';
import {View} from 'react-native';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
import R from 'resources/R';
const HelpSupport = ({route, navigation}) => {
  return (
    <ScreenWrapper>
      <MyText
        style={{
          fontSize: 22,
          marginTop: 12,
          fontFamily: R.fonts.Bold,
          paddingHorizontal: 20,
        }}
        text={'Add Bank account'}
      />
      <View
        style={{
          width: '90%',
          paddingHorizontal: 20,
        }}>
        {[
          'Account holder’s name',
          'Bank account number',
          'Re-type Bank account number',
        ].map((item, index) => (
          <MyNativeInput
            keyboardType={index != 0 ? 'number-pad' : 'default'}
            key={index.toString()}
            placeholder={item}
          />
        ))}
      </View>
      <MyBtn
        style={{
          position: 'absolute',
          bottom: 12,
          alignSelf: 'center',
          width: '80%',
        }}
        text={'Add'}
      />
    </ScreenWrapper>
  );
};

export default HelpSupport;
