import ScreensNameEnum from './ScreensNameEnum';
import R from 'resources/R';
const drawerRoutes = [
  {
    title: 'Home',
    screen: ScreensNameEnum.JOB_HOME_SCREEN,
    icon: R.icons.HomeCleaning,
    loginType: 'customer',
  },
  {
    title: 'My Jobs',
    screen: ScreensNameEnum.ALL_JOBS_SCREEN,
    icon: R.icons.HomeCleaning,
    loginType: 'delivery',
  },
  {
    title: 'Maps',
    screen: ScreensNameEnum.MAP_SCREEN,
    icon: R.icons.CartIcon,
    loginType: 'customer',
  },
  {
    title: 'Messages',
    screen: ScreensNameEnum.CHAT_SCREEN,
    icon: R.icons.OrderIcon,
    loginType: 'customer',
  },
  {
    title: 'Payment Methods',
    screen: ScreensNameEnum.SELECT_A_CARD_SCREEN,
    icon: R.icons.OrderIcon,
    loginType: 'customer',
  },
  {
    title: 'Help',
    screen: ScreensNameEnum.HELP_SCREEN,
    icon: R.icons.OrderIcon,
    loginType: 'customer',
  },
  {
    title: 'Settings',
    screen: ScreensNameEnum.SETTINGS_SCREEN,
    icon: R.icons.UserAvatar,
    loginType: 'customer',
  },
];

export default drawerRoutes;
