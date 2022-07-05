import React, {useState} from 'react';
import {View} from 'react-native';
import {CheckBox, MyBtn, MyText} from '../../../components';
import {PersonalCard} from '../../../containers';
import {routeName} from '../../../navigator/routeName';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
import R from 'resources/R';
const HelpSupport = ({navigation}) => {
  const [remember, setRemember] = useState(true);
  const useAvatar = <CheckBox remember={remember} setRemember={setRemember} />;
  return (
    <ScreenWrapper>
      <MyText
        style={{
          fontSize: 22,
          marginTop: 12,
          fontFamily: R.fonts.Bold,
          paddingHorizontal: 20,
        }}
        text={'Select Bank account'}
      />
      <View
        style={{
          paddingHorizontal: 20,
        }}>
        <PersonalCard
          style={{marginTop: 24}}
          title={'Virdian Valley Bank ending in ***971'}
          avatar={useAvatar}
        />
      </View>

      <MyBtn
        onPress={() => navigation.navigate(routeName.newAccount)}
        style={{
          position: 'absolute',
          bottom: 12,
          alignSelf: 'center',
          width: '80%',
        }}
        text={'Add New'}
      />
    </ScreenWrapper>
  );
};

export default HelpSupport;
