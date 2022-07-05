/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, Alert} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from 'library/commons/Button';
import BTextInput from 'library/commons/BTextInput';
import Loader from 'library/commons/Loader';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
import ScreenNameEnum from '../../constants/ScreensNameEnum';

import R from 'resources/R';
import AuthApi from 'datalib/services/authentication.api';
/*
 * This function Component is used to render Login Screen
 * @author Didijobs <rgy713>
 */
const LogInScreen = () => {
  const navigation = useNavigation();

  const [OTP, setOTP] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isNextDisabled, setNextDisabled] = useState(true);

  useEffect(() => {
    if (mobileNumber.length === 10 && validMobileNumber()) {
      setNextDisabled(false);
    } else {
      setNextDisabled(true);
    }
  }, [mobileNumber]);

  const handleOnSubmit = async () => {
    setLoading(true);
    const res = await new AuthApi().register({
      phone: mobileNumber,
      userType: 2,
    });
    console.log('res', res);
    if (res) {
      setLoading(false);
      navigation.navigate(ScreenNameEnum.OTP_SCREEN, {mobileNumber});
    } else {
      console.log('dsdsd');
    }
  };
  const validMobileNumber = () => {
    return mobileNumber.length >= 10 && !isNaN(parseInt(mobileNumber, 10))
      ? true
      : false;
  };
  return (
    <ScreenWrapper header={true}>
      <View style={styles.container}>
        <View style={styles.inputBlock}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              <Text style={styles.screenTitle}>Verify your mobile</Text>
            </Text>
            <Text style={styles.tagline}>
              <Text>We'll send you a code to verify your phone</Text>
            </Text>
            <View style={styles.mobileContainer}>
              <BTextInput
                autoFocus
                placeholder="Phone Number"
                value={mobileNumber}
                onChangeText={text => {
                  setMobileNumber(text);
                }}
                keyboardType={'number-pad'}
                maxLength={15}
                style={styles.textInput}
                autoComplete={'tel'}
              />
            </View>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Button
            title={'Continue'}
            onPress={handleOnSubmit}
            disabled={isNextDisabled}
          />
        </View>
      </View>
      <Loader loading={isLoading} />
    </ScreenWrapper>
  );
};
export default LogInScreen;

const styles = StyleSheet.create({
  label: {
    color: R.colors.PRIMARI_DARK,
    textAlign: 'center',
    fontSize: 20,
    display: 'flex',
    flexDirection: 'column',
    fontFamily: R.fonts.Medium,
    paddingVertical: 20,
  },
  input: {
    fontSize: 20,
    marginBottom: 20,
    marginTop: 20,
    marginHorizontal: 60,
    borderRadius: 46,
    borderWidth: 0.5,
    paddingLeft: 10,
  },
  imageBlock: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: 200,
    alignSelf: 'center',
    marginVertical: 50,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  inputBlock: {
    flex: 3,
    justifyContent: 'center',
  },
  pressableText: {
    color: '#3366FF',
    fontSize: 16,
    justifyContent: 'space-between',
    fontFamily: R.fonts.Regular,
  },
  tagline: {
    color: R.colors.PRIMARI_DARK,
    textAlign: 'center',
    fontSize: 12,
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 30,
  },
  btn: {
    textAlign: 'center',
    backgroundColor: '#E3AB1A',
    paddingVertical: 20,
    borderRadius: 35,
    marginTop: 40,
    marginHorizontal: 30,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  inputContainer: {
    paddingVertical: 20,
  },
  otpInput: {
    borderBottomWidth: 1,
    width: 35,
    padding: 10,
    textAlign: 'center',
    marginHorizontal: 5,
    marginBottom: 10,
    fontFamily: R.fonts.Bold,
    fontSize: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  textInput: {
    fontFamily: R.fonts.Regular,
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%',
  },
  screenTitle: {
    fontFamily: R.fonts.Bold,
    fontSize: 22,
  },
  mobileContainer: {
    width: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btnContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});
