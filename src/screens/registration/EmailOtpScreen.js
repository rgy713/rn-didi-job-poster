/* eslint-disable react/jsx-no-duplicate-props */
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import Button from 'library/commons/Button';
import R from 'resources/R';
import ScreenNameEnum from '../../constants/ScreensNameEnum';
import {useNavigation} from '@react-navigation/native';
import AuthenticationApi from 'datalib/services/user.api';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
import Loader from 'library/commons/Loader';

/*
 * This function Component is used to render EmailOtpScreen
 * @author Didijobs <rgy713>
 */
const EmailOtpScreen = props => {
  const navigation = useNavigation();
  const [OTP, setOTP] = useState('');
  const [email] = useState(props.route.params.email || null);

  const [otpArray, setOtpArray] = useState(['', '', '', '', '', '']);
  const [isLoading, setLoading] = useState(false);
  const [isNextDisabled, setNextDisabled] = useState(true);
  const firstTextInputRef = useRef(null);
  const secondTextInputRef = useRef(null);
  const thirdTextInputRef = useRef(null);
  const fourthTextInputRef = useRef(null);
  const fifthTextInputRef = useRef(null);
  const sixthTextInputRef = useRef(null);
  useEffect(() => {
    const res = otpArray.join('');
    setOTP(res);
    if (res.length === 6) {
      setNextDisabled(false);
    } else {
      setNextDisabled(true);
    }
  }, [otpArray]);

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
  const handleOnSubmit = async () => {
    setLoading(true);
    //api call
    const res = await new AuthenticationApi().verifyEmailOTP(email, OTP);
    if (res) {
      setLoading(false);
      navigation.navigate(ScreenNameEnum.UPDATE_USER_NAME, {edit: false});
    } else {
      setLoading(false);
      Alert.alert('Error', 'Invalid OTP', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      setLoading(false);
    }
    setLoading(false);
  };
  const handleGenerateOtp = () => {
    setLoading(true);
    setNextDisabled(false);
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.inputBlock}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              <Text style={styles.screenTitle}>Verify email</Text>
            </Text>
            <Text style={styles.tagline}>
              <Text>we sent a code to {email}</Text>
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
                  autoFocus
                  style={styles.otpInput}
                  ref={textInputRef}
                  value={otpArray[index]}
                  onKeyPress={onOtpKeyPress(index)}
                  onChangeText={onOtpChange(index)}
                  keyboardType={'numeric'}
                  maxLength={1}
                  autoFocus={index === 0 ? true : false}
                  refCallback={refCallback(textInputRef)}
                  key={index}
                  placeholder={`0`}
                  placeholderTextColor={'#7D7D7D'}
                  autoComplete={'tel'}
                />
              ))}
            </View>
            <View style={styles.resetContainer}>
              <Pressable onPress={handleGenerateOtp}>
                <Text style={styles.pressableText}>Resend code</Text>
              </Pressable>
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
export default EmailOtpScreen;

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
  btnContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  screenTitle: {
    fontFamily: R.fonts.Bold,
    fontSize: 22,
  },
});
