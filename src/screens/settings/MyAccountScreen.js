import React from 'react';
import {Feather} from '../../assets';
import {MyText, SafeScrollView} from '../../components';
import {Fonts} from '../../config';
import {PersonalCard} from '../../containers';
import {routeName} from '../../navigator/routeName';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
const MyAccountScreen = ({navigation, route}) => {
  const useAvatar = <Feather name={'chevron-right'} size={25} />;
  const options = ['david@email.com', '+1 123-123-1234', 'Delete account'];
  const NavTo = index => () => {
    index == 0
      ? navigation.navigate(routeName.emailVerification)
      : index == 1
      ? navigation.navigate(routeName.phoneVerification)
      : navigation.navigate(routeName.deleteAccount);
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
          text={route.name}
        />

        {options.map((item, index) => (
          <PersonalCard
            key={index.toString()}
            onPress={NavTo(index)}
            title={item}
            style={{
              marginTop: item.includes('Delete') ? 60 : 0,
            }}
            avatar={useAvatar}
          />
        ))}
      </SafeScrollView>
    </ScreenWrapper>
  );
};

export default MyAccountScreen;
