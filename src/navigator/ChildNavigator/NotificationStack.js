import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import React from 'react';
import NotificationScreen from '../../screens/notifications/NotificationScreen';
import {routeName} from '../routeName';
import {screenOptions} from '../screenOptions';
const Stack = createStackNavigator();

const EarningStack = props => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={routeName.notifications}
        component={NotificationScreen}
      />
    </Stack.Navigator>
  );
};

export default EarningStack;
