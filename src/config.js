import {Dimensions, StyleSheet} from 'react-native';
import strings from './strings';

export const Fonts = {
  Light: 'Inter-Light',
  Regular: 'Inter-Regular',
  Medium: 'Inter-Medium',
  Bold: 'Inter-Bold',
  Semi_Bold: 'Inter-SemiBold',
};
const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 120,
  },
  emailContainer: {
    // height: 110,
  },
  emailBg: {
    // height: 110,
    alignSelf: 'center',
    opacity: 0.07,
  },
  email: {
    // height: 100,
    alignSelf: 'center',
    position: 'absolute',
  },
  linearGradient: {
    width: '100%',
    position: 'relative',
    height: 30,
    top: -55,
    zIndex: -100,
  },
});

const config = {
  base_url: 'http://192.168.2.222/legalspace/public/',
  api_url: () => config.base_url + 'api/',
  images_url: () => config.base_url + '',
  services: {},
  gradientColors: () => [config.primaryColor, '#096899'],
  window_width: Dimensions.get('window').width,
  window_height: Dimensions.get('window').height,
  app_name: 'Daja',
  primaryColor: '#E3AB1A',
  androidColor: '#c66600',
  starColor: '#FFC107',
  red: '#D90900',
  textPrimaryColor: '#3366FF',
  darkBlue: '#1730B1',
  activeColor: '#4BD530',
  backgroundColor: '#f9f9f9',
  disabledColor: '#e6e6e6',
  white: '#fff',
  black: '#000',
  headingColor: '#acacac',
  images: {
    splash: require('./assets/Images/splash.png'),
    home: require('./assets/Images/home.png'),
    bell: require('./assets/Images/bell.png'),
    burger: require('./assets/Images/burger.png'),
    compass: require('./assets/Images/compass.png'),
    placeholder: require('./assets/Images/placeholder.png'),
    profilePlaceholder: require('./assets/Images/profile.png'),
    man: require('./assets/Images/man.png'),
  },
  // loadingComponent: (title, navigation, back = false) => (
  //   <Container>
  //     <MyHeader title={title} navigation={navigation} back={back} />
  //     <View
  //       style={{
  //         flex: 1,
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //       }}>
  //       <Spinner size="large" color={config.textPrimaryColor} />
  //     </View>
  //   </Container>
  // ),
  styles,
  copyrightLine: () =>
    strings.Copyright +
    ' ' +
    new Date().getFullYear() +
    ' ' +
    config.app_name +
    ' Inc.',
  isEmail: email => {
    // return true;
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  },
};

export default config;
