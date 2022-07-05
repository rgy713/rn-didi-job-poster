/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
import {View, StyleSheet, Image} from 'react-native';
import Button from 'library/commons/Button';
import ScreenNameEnum from '../../constants/ScreensNameEnum';
import {useSelector} from 'react-redux';
/*
 * This function Component is used to render  splash screen
 * @author Didijobs <rgy713>
 */
const SplashScreen = () => {
  const navigation = useNavigation();
  const user = useSelector(state => state?.user?.user);
  const handleOnPress = () => {
    navigation.navigate(ScreenNameEnum.LOGIN_SCREEN);
  };

  useEffect(() => {
    console.log('useEffect', user);
    if (user) {
      if (user.emailVerifyStatus === '0') {
        navigation.navigate(ScreenNameEnum.EMAIL_SCREEN);
      } else if (user.profileStatus === '0') {
        navigation.navigate(ScreenNameEnum.UPDATE_USER_NAME);
      } else {
        navigation.navigate(ScreenNameEnum.JOB_HOME_SCREEN);
      }
    }
  }, [user]);
  return (
    <ScreenWrapper header={false}>
      <View style={styles.container}>
        <Image
          source={require('../../resources/images/logo.png')}
          style={styles.imageStyle}
          resizeMode={'contain'}
        />
      </View>
      {!user ? (
        <View style={styles.btncontainer}>
          <Button title={'Get started'} onPress={handleOnPress} />
        </View>
      ) : null}
    </ScreenWrapper>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  imageStyle: {
    width: '80%',
  },
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  btncontainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
