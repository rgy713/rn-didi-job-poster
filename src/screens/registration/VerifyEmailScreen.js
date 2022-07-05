import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import Button from 'library/commons/Button';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
import {useNavigation} from '@react-navigation/native';
import BTextInput from 'library/commons/BTextInput';
import R from 'resources/R';
import ScreenNameEnum from '../../constants/ScreensNameEnum';
import AuthenticationApi from 'datalib/services/user.api';
import Loader from 'library/commons/Loader';
/*
 * This function Component is used to render Verify email otp screen 
 * @author Didijobs <rgy713>
 */
const VerifyEmailScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isNextDisable, setNextDisable] = useState(true);

  const handleGenerateOtp = async () => {
    setLoading(true);
    const res = await new AuthenticationApi().generateEmailOtp(email);
    console.log(res);
    if (res) {
      setLoading(false);
      navigation.navigate(ScreenNameEnum.EMAIL_OTP_SCREEN, {email});
    } else {
      setError('Error in sending email');
      setLoading(false);
    }
  };
  useEffect(() => {
    if (validateEmail(email)) {
      setNextDisable(false);
    } else {
      setNextDisable(true);
    }
  }, [email]);
  function validateEmail(_email) {
    return (
      _email &&
      _email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
    );
  }

  return (
    <ScreenWrapper header={true}>
      <View style={styles.container}>
        <View style={styles.inputBlock}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              <Text style={styles.screenTitle}>Verify your email</Text>
            </Text>
            <Text style={styles.tagline}>
              <Text>We'll send you a code to verify your email</Text>
            </Text>
            <View style={styles.emailContainer}>
              <BTextInput
                autoFocus
                placeholder="Email address"
                value={email}
                onChangeText={text => {
                  setEmail(text);
                }}
                autoComplete={'email'}
                style={styles.textInput}
              />
              {error && <Text style={styles.error}>{error}</Text>}
            </View>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Button
            title={'Continue'}
            onPress={handleGenerateOtp}
            disabled={isNextDisable}
          />
        </View>
      </View>
      <Loader loading={isLoading} />
    </ScreenWrapper>
  );
};
export default VerifyEmailScreen;

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

  textInput: {
    fontFamily: R.fonts.Regular,
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '100%',
  },
  emailContainer: {
    width: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
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
