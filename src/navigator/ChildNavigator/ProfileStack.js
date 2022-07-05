import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import MyAccountScreen from '../../screens/settings/MyAccountScreen';
import DeleteAccountScreen from '../../screens/settings/DeleteAccountScreen';
import Notifications from '../../screens/settings/Notifications';
import VerifyEmailScreen from '../../screens/registration/VerifyEmailScreen';
import EmailOtpScreen from '../../screens/registration/EmailOtpScreen';
import LogInScreen from '../../screens/registration/LogInScreen';
import SettingsScreen from '../../screens/settings/SettingsScreen';
import HelpScreen from '../../screens/profiles/HelpScreen';
import MySkillScreen from '../../screens/myskills/MySkillScreen';
import AllJobsScreen from '../../screens/profiles/AllJobsScreen';
import AddBankScreen from '../../screens/profiles/bank-details/AddBankScreen';
// import ListBankScreen from '../../screens/profiles/bank-details/ListBankScreen';
import SelectACardScreen from '../../screens/payment/SelectACardScreen';
import UserProfileScreen from '../../screens/profiles/UserProfileScreen';
import ProfileScreen from '../../screens/profiles/ProfileScreen';
import {routeName} from '../routeName';
import {screenOptions} from '../screenOptions';
import WorkWithUs from '../../screens/profiles/WorkWithUs';
import UserLocation from '../../screens/profiles/UserLocation';
const Stack = createStackNavigator();

const ProfileStack = ({}) => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={routeName.profile} component={ProfileScreen} />
      <Stack.Screen
        name={routeName.userProfile}
        component={UserProfileScreen}
      />
      <Stack.Screen
        name={routeName.bankDetails}
        component={SelectACardScreen}
      />
      <Stack.Screen name={routeName.newAccount} component={AddBankScreen} />
      <Stack.Screen name={routeName.allJobs} component={AllJobsScreen} />
      <Stack.Screen name={routeName.mySkills} component={MySkillScreen} />
      <Stack.Screen name={routeName.help} component={HelpScreen} />
      <Stack.Screen name={routeName.settings} component={SettingsScreen} />
      <Stack.Screen name={routeName.account} component={MyAccountScreen} />
      <Stack.Screen
        name={routeName.emailVerification}
        component={VerifyEmailScreen}
      />
      <Stack.Screen
        name={routeName.phoneVerification}
        component={LogInScreen}
      />
      <Stack.Screen name={routeName.enterOtp} component={EmailOtpScreen} />
      <Stack.Screen
        name={routeName.manageNotifications}
        component={Notifications}
      />
      <Stack.Screen
        name={routeName.deleteAccount}
        component={DeleteAccountScreen}
      />
      <Stack.Screen name={routeName.workWithUs} component={WorkWithUs} />
      <Stack.Screen name={routeName.UserLocation} component={UserLocation} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
