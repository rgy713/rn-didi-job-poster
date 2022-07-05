import React, {useState, useEffect, useRef, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from 'library/commons/Button';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
import R from 'resources/R';
import AuthApi from 'datalib/services/authentication.api';
import Loader from 'library/commons/Loader';
import {AuthContext} from '../../store/contexts/AuthContext';
/*
 * This function Component is used to render Otp Screen
 * @author Didijobs <rgy713>
 */
const OtpScreen = props => {
  const authContext = useContext(AuthContext);

  const navigation = useNavigation();
  const [mobileNumber, setMobileNumber] = useState(
    props.route.params.mobileNumber,
  );
  const [otpArray, setOtpArray] = useState(['', '', '', '', '', '']);
  const [isLoading, setLoading] = useState(false);
  const [isNextDisabled, setNextDisabled] = useState(true);
  const [otp, setOTP] = useState();

  const firstTextInputRef = useRef(null);
  const secondTextInputRef = useRef(null);
  const thirdTextInputRef = useRef(null);
  const fourthTextInputRef = useRef(null);
  const fifthTextInputRef = useRef(null);
  const sixthTextInputRef = useRef(null);

  useEffect(() => {
    const OTP = otpArray.join('');
    setOTP(OTP);

    if (OTP.length === 6) {
      setNextDisabled(false);
    } else {
      setNextDisabled(true);
    }
  }, [otpArray]);
  // const validMobileNumber = () => {
  //   return mobileNumber.length === 10 && !isNaN(parseInt(mobileNumber, 10))
  //     ? true
  //     : false;
  // };

  const resendOtp = async () => {
    console.log(mobileNumber);
    const res = await new AuthApi().register({
      phone: mobileNumber,
      userType: 1,
    });
    //Message to sent otp
  };

  const handleVerifyOtp = async () => {
    try {
      setLoading(true);
      const res = await new AuthApi().verifyMobileOtp(mobileNumber, otp);
      if (res) {
        authContext.signIn();
      } else {
        setLoading(false);
        Alert.alert('Error', 'Invalid OTP', [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      }
    } catch (e) {
      setLoading(false);
    }
  };
  const onOtpChange = index => {
    return value => {
      if (isNaN(Number(value))) {
        // do nothing when a non digit is pressed
        return;
      }
      const otpArrayCopy = otpArray.concat();
      otpArrayCopy[index] = value;
      setOtpArray(otpArrayCopy);

      // auto focus to next InputText if value is not blank
      if (value !== '') {
        if (index === 0) {
          secondTextInputRef.current.focus();
        } else if (index === 1) {
          thirdTextInputRef.current.focus();
        } else if (index === 2) {
          fourthTextInputRef.current.focus();
        } else if (index === 3) {
          fifthTextInputRef.current.focus();
        } else if (index === 4) {
          sixthTextInputRef.current.focus();
        }
      }
    };
  };

  // only backspace key press event is fired on Android
  // to have consistency, using this event just to detect backspace key press and
  // onOtpChange for other digits press
  const onOtpKeyPress = index => {
    return ({nativeEvent: {key: value}}) => {
      // auto focus to previous InputText if value is blank and existing value is also blank
      if (value === 'Backspace' && otpArray[index] === '') {
        if (index === 1) {
          firstTextInputRef.current.focus();
        } else if (index === 2) {
          secondTextInputRef.current.focus();
        } else if (index === 3) {
          thirdTextInputRef.current.focus();
        } else if (index === 4) {
          fourthTextInputRef.current.focus();
        } else if (index === 5) {
          fifthTextInputRef.current.focus();
        }
        /*
         * clear the focused text box as well only on Android because on mweb onOtpChange will be also called
         * doing this thing for us
         * todo check this behaviour on ios
         */
        if (index > 0) {
          const otpArrayCopy = otpArray.concat();
          otpArrayCopy[index - 1] = ''; // clear the previous box which will be in focus
          setOtpArray(otpArrayCopy);
        }
      }
    };
  };
  const refCallback = textInputRef => node => {
    textInputRef.current = node;
  };
  console.log(isLoading);
  return (
    <ScreenWrapper header={true}>
      <View style={styles.container}>
        <View style={styles.inputBlock}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              <Text style={styles.screenTitle}>Enter security code</Text>
            </Text>
            <Text style={styles.tagline}>
              <Text>we have sent a code to {mobileNumber}</Text>
            </Text>
            <View style={styles.otpContainer}>
              {[
                firstTextInputRef,
                secondTextInputRef,
                thirdTextInputRef,
                fourthTextInputRef,
                fifthTextInputRef,
                sixthTextInputRef,
              ].map((textInputRef, index) => (
                <TextInput
                  style={styles.otpInput}
                  ref={textInputRef}
                  value={otpArray[index]}
                  onKeyPress={onOtpKeyPress(index)}
                  onChangeText={onOtpChange(index)}
                  keyboardType={'numeric'}
                  maxLength={1}
                  autoFocus={index === 0 ? true : undefined}
                  refCallback={refCallback(textInputRef)}
                  key={index}
                  // placeholder={`0`}
                  placeholderTextColor={'#7D7D7D'}
                  autoComplete={Platform.OS === 'android' ? 'sms-otp' : 'off'}
                />
              ))}
            </View>
            <View style={styles.resetContainer}>
              <Pressable onPress={resendOtp}>
                <Text style={styles.pressableText}>Resend code</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Button
            title={'Continue'}
            onPress={handleVerifyOtp}
            disabled={isNextDisabled}
          />
        </View>
      </View>
      <Loader loading={isLoading} />
    </ScreenWrapper>
  );
};
export default OtpScreen;

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
    paddingBottom: 20,
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
    borderBottomWidth: 5,
    borderColor: '#7D7D7D',
    color: '#000',
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
  screenTitle: {
    fontFamily: R.fonts.Bold,
    fontSize: 22,
  },
});
