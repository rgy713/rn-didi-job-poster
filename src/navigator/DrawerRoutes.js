import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ScreensNameEnum from '../constants/ScreensNameEnum';
import DrawerWrapper from 'library/wrapper/DrawerWrapper';

import UpdateUserName from '../screens/registration/UpdateUserName';
import UpdateProfilePicture from '../screens/registration/UpdateProfilePicture';
import MyJobScreen from '../screens/job/MyJobScreen';
import PostJobScreen from '../screens/job/PostJobScreen';
import AddCardScreen from '../screens/job/AddCardScreen';
import ViewCandidateScreen from '../screens/job/ViewCandidateScreen';
import PaymentOverviewScreen from '../screens/payment/PaymentOverviewScreen';
import UserExperience from '../screens/job/UserExperience';
import SelectACardScreen from '../screens/payment/SelectACardScreen';
import PaymentStatus from '../screens/payment/PaymentStatus';
import CandidateScreen from '../screens/job/CandidateScreen';
import OpenJobScreen from '../screens/job/OpenJobScreen';
import MapScreen from '../screens/map/MapScreen';
import BottomTabNavigator from './BottomTabNavigator';
import JobHistoryScreen from '../screens/job/JobHistoryScreen';
import Messages from '../screens/chats/Messages';
import UserLocation from '../screens/profiles/UserLocation';
import WorkWithUs from '../screens/profiles/WorkWithUs';
import AllJobsScreen from '../screens/profiles/AllJobsScreen';
import ChatScreen from '../screens/chats/Chats';
import HelpScreen from '../screens/profiles/HelpScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator
      initialRouteName={ScreensNameEnum.JOB_HOME_SCREEN}
      drawerContent={props => <DrawerWrapper {...props} />}>
      <Drawer.Screen
        component={AppFlow}
        name={ScreensNameEnum.JOB_HOME_SCREEN}
      />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();
function AppFlow() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        component={SplashScreen}
        name={ScreensNameEnum.GET_STARTED}
      />
      <Stack.Screen
        component={VerifyEmailScreen}
        name={ScreensNameEnum.EMAIL_SCREEN}
      />
      <Stack.Screen
        component={EmailOtpScreen}
        name={ScreensNameEnum.EMAIL_OTP_SCREEN}
      />
      <Stack.Screen
        component={UpdateUserName}
        name={ScreensNameEnum.UPDATE_USER_NAME}
      />

      <Stack.Screen
        component={UpdateProfilePicture}
        name={ScreensNameEnum.UPDATE_PROFILE_PICTURE}
      />
      <Stack.Screen
        component={BottomTabNavigator}
        name={ScreensNameEnum.JOB_HOME_SCREEN}
      />
      <Stack.Screen
        component={Messages}
        name={ScreensNameEnum.MESSAGE_SCREEN}
      />
      <Stack.Screen
        component={MyJobScreen}
        name={ScreensNameEnum.MY_JOBS_SCREEN}
      />
      <Stack.Screen component={PostJobScreen} name={ScreensNameEnum.POST_JOB} />
      <Stack.Screen
        component={PostJobScreen}
        name={ScreensNameEnum.EDIT_POST_JOB}
      />
      <Stack.Screen component={AddCardScreen} name={ScreensNameEnum.ADD_CARD} />
      <Stack.Screen
        component={ViewCandidateScreen}
        name={ScreensNameEnum.VIEW_CANDIDATE}
      />
      <Stack.Screen
        component={PaymentOverviewScreen}
        name={ScreensNameEnum.PAYMENT_OVERVIEW}
      />
      <Stack.Screen
        component={UserExperience}
        name={ScreensNameEnum.JOB_RATING}
      />
      <Stack.Screen
        component={SelectACardScreen}
        name={ScreensNameEnum.SELECT_A_CARD_SCREEN}
      />
      <Stack.Screen
        component={PaymentStatus}
        name={ScreensNameEnum.PAYMENT_STATUS}
      />
      <Stack.Screen
        component={CandidateScreen}
        name={ScreensNameEnum.CANDIDATE_SCREEN}
      />
      <Stack.Screen
        component={OpenJobScreen}
        name={ScreensNameEnum.OPEN_JOB_SCREEN}
      />
      <Stack.Screen component={MapScreen} name={ScreensNameEnum.MAP_SCREEN} />
      <Stack.Screen
        component={JobHistoryScreen}
        name={ScreensNameEnum.JOB_HISTORY_SCREEN}
      />
      <Stack.Screen
        component={UserLocation}
        name={ScreensNameEnum.USER_LOCATION}
      />
      <Stack.Screen
        component={WorkWithUs}
        name={ScreensNameEnum.WORK_WITH_US}
      />
      <Stack.Screen
        component={AllJobsScreen}
        name={ScreensNameEnum.ALL_JOBS_SCREEN}
      />
      <Stack.Screen component={ChatScreen} name={ScreensNameEnum.CHAT_SCREEN} />
      <Stack.Screen component={HelpScreen} name={ScreensNameEnum.HELP_SCREEN} />
      <Stack.Screen
        component={SettingsScreen}
        name={ScreensNameEnum.SETTINGS_SCREEN}
      />
    </Stack.Navigator>
  );
}
