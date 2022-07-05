import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import MapInput from 'library/commons/MapInput';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {routeName} from '../../navigator/routeName';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
import Button from 'library/commons/Button';
import R from 'resources/R';
import {updateUser} from '../../store/actions/userActions';
const UserLocation = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [isNextDisable, setNextDisable] = useState(false);
  const [location, setLocation] = useState(null);
  const [cordinate, setCordinate] = useState(null);

  useEffect(() => {
    if (location && cordinate) {
      setNextDisable(false);
    } else {
      setNextDisable(true);
    }
  }, [location, cordinate]);

  const handleOnSubmit = async () => {
    console.log(location, cordinate);
    //api call
    const payload = {
      location: {
        lat: cordinate?.latitude,
        long: cordinate?.longitude,
      },
    };
    await dispatch(updateUser(payload));
    navigation.navigate(routeName.workWithUs);
  };
  const onChangeAddress = addressObj => {
    setLocation(addressObj);
  };
  const onChangeCoords = coords => {
    if (coords) {
      console.log(coords);
    }
    // setLat(coords.latitude);
    // setLong(coords.longitude);
    setCordinate(coords);
    console.log(coords);
  };
  // console.log(lat, long);
  return (
    <ScreenWrapper header={true}>
      <View style={styles.container}>
        <View style={styles.inputBlock}>
          <Text style={styles.label}>
            <Text style={styles.screenTitle}>Location</Text>
          </Text>
          <View style={styles.nameContainer}>
            <MapInput
              defaultAddress={location}
              defaultCoords={cordinate}
              onChangeAddress={onChangeAddress}
              onChangeCoords={onChangeCoords}
            />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Button
            title={'Continue'}
            onPress={handleOnSubmit}
            disabled={isNextDisable}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};
export default UserLocation;

const styles = StyleSheet.create({
  label: {
    color: R.colors.PRIMARI_DARK,
    textAlign: 'center',
    fontSize: 20,
  },
  btnContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 20,
  },
  inputBlock: {
    flex: 3,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontSize: 15,
    flex: 1,
  },
  screenTitle: {
    fontFamily: R.fonts.Regular,
    fontSize: 22,
    marginBottom: 10,
  },
});
