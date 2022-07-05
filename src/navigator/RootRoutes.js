/* eslint-disable react-hooks/exhaustive-deps */
import NetInfo from '@react-native-community/netinfo';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useMemo, useState} from 'react';
import {Text, View, Image, StyleSheet, ActivityIndicator} from 'react-native';
import RegistrationRoutes from './RegistrationRoutes';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
import {isFunction} from 'lodash-es';
import {useDispatch, useSelector} from 'react-redux';
import {AuthContextProvider} from '../store/contexts/AuthContext';
import sInfoUtil from '../utils/sInfo.util';
import {getUserById} from '../store/actions/userActions';
import ScreensNameEnum from '../constants/ScreensNameEnum';

/*
 * This function  handles startup app functionality and here we are setting user in our local storage
 * @author Didijobs <rgy713>
 */
const profileStack = [
  ScreensNameEnum.EMAIL_SCREEN,
  ScreensNameEnum.UPDATE_USER_NAME,
  ScreensNameEnum.UPDATE_USER_LOCATION,
];
const RootRoutes = () => {
  const [hasNoInternet, setHasNoInternet] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const userNew = useSelector(state => state?.user?.user);
  const [apiCall, setApicall] = useState(true);
  const dispatch = useDispatch();

  const rootAuthContext = useMemo(
    () => ({
      signIn: async () => {
        setLoggedInUser(true);
      },
      // TODO: Do we need to clear the redux state on signOut
      signOut: async () => {
        await sInfoUtil.remove('USER_CONTEXT');
        await sInfoUtil.remove('JWT');
        setLoggedInUser(null);
      },
    }),
    [],
  );

  useEffect(() => {
    const netInfoSubscriber = NetInfo.addEventListener(state => {
      setHasNoInternet(!state.isConnected);
      if (state.isConnected) {
        console.log(!userNew && apiCall, 'Hello', userNew, apiCall);
        if (!userNew && apiCall) {
          bootstrapApp();
        }
        isFunction(netInfoSubscriber) ? netInfoSubscriber() : void 0;
      }
    });
    return () => (isFunction(netInfoSubscriber) ? netInfoSubscriber() : void 0);
  }, [loggedInUser]);

  const bootstrapApp = async () => {
    console.log('bootstrapApp', userNew);
    try {
      const storedUser = await sInfoUtil.fetch('USER_CONTEXT');
      if (storedUser) {
        setApicall(false);
        const _user = JSON.parse(storedUser);
        console.log('bootstrapApp 32', _user);
        setLoggedInUser(true);
        if (_user) {
          const updatedUser = await dispatch(getUserById());
          console.log('updatedUser');
          await sInfoUtil.save(
            'USER_CONTEXT',
            JSON.stringify(updatedUser.payload),
          );
          console.log('setInitializing', false);
          setInitializing(false);
        } else {
          setLoggedInUser(false);
          setInitializing(false);
        }
        setApicall(true);
      } else {
        console.log('setInitializing 3', false);
        setInitializing(false);
      }
    } catch (error) {
      console.error('err', error); // TODO: How to handle failure here
    }
  };
  console.log('initializing', initializing);
  if (initializing) {
    return (
      <ScreenWrapper header={false}>
        <View style={styles.container}>
          <Image
            source={require('../resources/images/logo.png')}
            style={styles.imageStyle}
            resizeMode={'contain'}
          />

          {hasNoInternet ? (
            <Text style={styles.alightCenter}>Internet connection error</Text>
          ) : (
            <ActivityIndicator size="large" color="black" />
          )}
        </View>
      </ScreenWrapper>
    );
  }

  return (
    <AuthContextProvider value={rootAuthContext}>
      <NavigationContainer>
        <RegistrationRoutes
          isAuthenticated={loggedInUser ? true : false}
          initialRoutName={
            loggedInUser && userNew ? profileStack[userNew.profileStatus] : null
          }
        />
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default RootRoutes;
const styles = StyleSheet.create({
  imageStyle: {
    width: '80%',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  alightCenter: {alignSelf: 'center'},
});
