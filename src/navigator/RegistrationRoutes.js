import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import React from 'react';
// import {useSelector, useDispatch} from 'react-redux';
import ScreensNameEnum from '../constants/ScreensNameEnum';
import LoginScreen from '../screens/registration/LogInScreen';
import SplashScreen from '../screens/registration/SplashScreen';
import OtpScreen from '../screens/registration/OtpScreen';
import EmailOtpScreen from '../screens/registration/EmailOtpScreen';
import VerifyEmailScreen from '../screens/registration/VerifyEmailScreen';
import DrawerRoutes from './DrawerRoutes';
const RegistrationStack = createStackNavigator();
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
// TODO: Can we use Options Hierarchy...or atleast stop repeatation like headerShown: false
/*
 * Here we handle the navigation of screens in authenticated user case and also for unauthenticated user also
 * @author Didijobs <rgy713>
 */
const RegistrationRoutes = ({isAuthenticated, initialRoutName}) => {
  // const [currentJob, setCurrentJob] = React.useState(null);
  // useEffect(() => {
  //   getCurrentJob;
  // }, []);
  // function getCurrentJob() {
  // const currentJob = useSelector(state => state?.job.currentJob);
  // setCurrentJob(currentJob);
  // console.log(currentJob, 'Inside RegistrationRoutes');
  // }
  return (
    <RegistrationStack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}
      initialRouteName={
        initialRoutName && !isAuthenticated
          ? initialRoutName
          : ScreensNameEnum.GET_STARTED
      }>
      {!isAuthenticated ? (
        <>
          <RegistrationStack.Screen
            component={SplashScreen}
            name={ScreensNameEnum.GET_STARTED}
          />
          <RegistrationStack.Screen
            component={LoginScreen}
            name={ScreensNameEnum.LOGIN_SCREEN}
            options={{headerShown: false}}
          />
          <RegistrationStack.Screen
            component={OtpScreen}
            name={ScreensNameEnum.OTP_SCREEN}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <>
          <RegistrationStack.Screen
            component={DrawerRoutes}
            name={ScreensNameEnum.OTP_SCREEN}
            options={{headerShown: false}}
          />
        </>
      )}
    </RegistrationStack.Navigator>
  );
};

export default RegistrationRoutes;
