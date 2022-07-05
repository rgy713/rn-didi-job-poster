import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import config from '../config';
import ChatsStack from './ChildNavigator/ChatsStack';
import PostJobScreen from '../screens/job/PostJobScreen';
import MapScreen from '../screens/map/MapScreen';
import NotificationStack from './ChildNavigator/NotificationStack';
import JobHomeScreen from '../screens/job/JobHomeScreen';
import ProfileStack from './ChildNavigator/ProfileStack';
import ScreensNameEnum from '../constants/ScreensNameEnum';
import Chats from '../screens/chats/Chats';
const Tabs = createMaterialTopTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tabs.Navigator
      initialRouteName={ScreensNameEnum.HOME_STACK}
      tabBarPosition="bottom"
      // keyboardDismissMode
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        swipeEnabled: true,
        tabBarActiveTintColor: config.backgroundColor,
        tabBarInactiveTintColor: config.white,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        tabBarItemStyle: {
          backgroundColor: config.black,
        },
        tabBarIndicatorStyle: {backgroundColor: 'white'},
        tabBarStyle: {
          height: 60,
          backgroundColor: 'black',
          justifyContent: 'center',
        },
      }}>
      <Tabs.Screen
        name={ScreensNameEnum.HOME_STACK}
        component={JobHomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View style={styles.tabStyle}>
              <Icon name={'home'} color={color} size={25} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name={ScreensNameEnum.CHAT_STACK}
        component={Chats}
        options={{
          tabBarIcon: ({color}) => (
            <View style={styles.tabStyle}>
              <Icon name={'chat'} color={color} size={25} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name={ScreensNameEnum.POST_STACK}
        component={PostJobScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View style={styles.tabStyle}>
              <Icon name={'add'} color={color} size={25} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name={ScreensNameEnum.MAP_SCREEN}
        component={MapScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View style={styles.tabStyle}>
              <Icon name={'explore'} color={color} size={25} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name={ScreensNameEnum.NOTIFICATION_STACK}
        component={NotificationStack}
        options={{
          title: 'Notifications',
          tabBarIcon: ({color}) => (
            <View style={styles.tabStyle}>
              <Icon name={'notifications'} color={color} size={25} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name={ScreensNameEnum.PROFILE_STACK}
        component={ProfileStack}
        options={{
          title: 'Profile',
          tabBarIcon: ({color}) => (
            <View style={styles.tabStyle}>
              <Icon name={'menu'} color={color} size={25} />
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabNavigator;
const styles = StyleSheet.create({
  tabStyle: {
    // width: '100%',
    // height: 25,
    // textAlign: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignSelf: 'center',
  },
});
