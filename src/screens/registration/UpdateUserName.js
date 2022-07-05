import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import Button from 'library/commons/Button';
import R from 'resources/R';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
import BTextInput from 'library/commons/BTextInput';
import ScreenNameEnum from '../../constants/ScreensNameEnum';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {updateUser} from '../../store/actions/userActions';
import Loader from 'library/commons/Loader';
/*
 * This function Component is used to render update user name screen
 * @author Didijobs <rgy713>
 */
const UpdateUserName = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  let {params} = props.route;
  const userNew = useSelector(state => state?.user?.user);
  const [firstName, setFirstName] = useState(userNew.firstName);
  const [lastName, setLastName] = useState(userNew.lastName);
  const [isNextDisabled, setNextDisabled] = useState(true);
  const [isLoading, setLoading] = useState(false);
  console.log(props, 'name setLastName');
  useEffect(() => {
    if (firstName && lastName) {
      setNextDisabled(false);
    } else {
      setNextDisabled(true);
    }
  }, [firstName, lastName]);
  const handleOnSubmit = async () => {
    setLoading(true);
    let payload = {
      firstName: firstName,
      lastName: lastName,
      profileStatus: 1,
    };
    await dispatch(updateUser(payload));
    if (params.edit) {
      navigation.goBack();
    } else {
      navigation.navigate(ScreenNameEnum.UPDATE_PROFILE_PICTURE);
    }

    setLoading(false);
  };

  return (
    <ScreenWrapper header={params.edit ? true : false}>
      <View style={styles.container}>
        <View style={styles.inputBlock}>
          <Text style={styles.label}>
            <Text style={styles.screenTitle}>Your Name</Text>
          </Text>
          <View style={styles.nameContainer}>
            <View style={styles.leftName}>
              <BTextInput
                autoFocus
                placeholder="First name"
                style={styles.textInput}
                value={firstName}
                onChangeText={text => {
                  setFirstName(text);
                }}
              />
            </View>
            <View style={styles.rightName}>
              <BTextInput
                style={styles.textInput}
                placeholder="Last name"
                value={lastName}
                onChangeText={text => {
                  setLastName(text);
                }}
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
export default UpdateUserName;

const styles = StyleSheet.create({
  label: {
    color: R.colors.PRIMARI_DARK,
    textAlign: 'center',
    fontSize: 20,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 50,
  },
  textInput: {
    fontFamily: R.fonts.Regular,
    fontSize: 18,
    paddingHorizontal: 10,
    width: '100%',
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
  btn: {
    paddingVertical: 10,
    textAlign: 'center',
    backgroundColor: '#E3AB1A',
    borderRadius: 35,
    marginTop: 40,
    marginHorizontal: 30,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
  leftName: {
    flex: 1,
    marginRight: 5,
  },
  rightName: {
    flex: 1,
    marginLeft: 5,
  },
  btnContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});
