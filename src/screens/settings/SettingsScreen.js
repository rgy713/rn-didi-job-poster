import React from 'react';
import {Feather} from '../../assets';
import {MyText, SafeScrollView} from '../../components';
import {Fonts} from '../../config';
import {PersonalCard} from '../../containers';
import {routeName} from '../../navigator/routeName';
import strings from '../../strings';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
const SettingsScreen = ({navigation, route}) => {
  const useAvatar = <Feather name={'chevron-right'} size={25} />;
  const options = [strings.account, strings.notifications];
  const NavTo = index => () => {
    index == 0
      ? navigation.navigate(routeName.account)
      : navigation.navigate(routeName.manageNotifications);
  };
  return (
    <ScreenWrapper>
      <SafeScrollView>
        <MyText
          style={{
            fontSize: 22,
            marginTop: 12,
            fontFamily: Fonts.Medium,
            marginBottom: 24,
          }}
          text={strings.settings}
        />
        {options.map((item, index) => (
          <PersonalCard
            key={index.toString()}
            onPress={NavTo(index)}
            title={item}
            avatar={useAvatar}
          />
        ))}
      </SafeScrollView>
    </ScreenWrapper>
  );
};

export default SettingsScreen;
