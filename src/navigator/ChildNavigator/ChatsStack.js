import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Messages from '../../screens/chats/Messages';
import Chats from '../../screens/chats/Chats';
import {routeName} from '../routeName';
import {screenOptions} from '../screenOptions';
const Stack = createStackNavigator();

const ProfileStack = ({}) => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={routeName.chats} component={Chats} />
      <Stack.Screen name={routeName.messages} component={Messages} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
