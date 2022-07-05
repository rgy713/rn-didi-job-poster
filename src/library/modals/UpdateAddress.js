/* eslint-disable no-shadow */
import React, {useState, FunctionComponent, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Button from 'library/commons/Button';
import R from 'resources/R';
import BTextInput from 'library/commons/BTextInput';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, RootDispatch} from '../../store/app.store';
import ValidationHelper from '../../Helper/ValidationHelper';
import MapInput from 'library/commons/MapInput';
// import {
//   updateUserAddress,
//   addUserAddress,
// } from '../../store/slices/user/user.slice';

const UpdateAddress = ({
  isVisible,
  onModalClose,
  address,
}) => {
  const dispatch = useDispatch();

  const [errors, setError] = useState({
    name: '',
    address: '',
    primaryMobile: '',
  });

  const [addressUpdate, setAddressUpdate] = useState(address?.address || null);
  const [cordinate, setCordinate] = useState(address?.coords || null);
  const [isSaveDisabled, setSaveDisabled] = useState(true);

  const validate = () => {
    let valid = true;
    var errors = {
      name: '',
      primaryMobile: '',
      address: '',
    };
    if (!addressUpdate) {
      errors.address = 'Name Cannot be empty';
      valid = false;
    }
    if (valid) {
      setSaveDisabled(true);
    } else {
      setSaveDisabled(false);
    }
    setError(errors);
  };

  useEffect(validate, [addressUpdate, name, primaryMobile]);
  const handleSaveAddress = () => {
    dispatch(
      addUserAddress({
        name: name,
        title: 'Home',
        address: addressUpdate,
        coords: cordinate,
        phone: primaryMobile,
      }),
    );
    setAddressUpdate(null);
    setCordinate(null);
    onModalClose(false);
  };
  const onChangeAddress = (addressObj: any) => {
    setAddressUpdate(addressObj);
  };
  const onChangeCoords = (coords: any) => {
    setCordinate(coords);
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          onModalClose(!isVisible);
        }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <View />
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.innerContainer}>
              <Text style={styles.modalHeaderText}>Update Address</Text>

              <BTextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Name"
                label={'Name'}
                isError={errors.name === '' ? false : true}
                errorMessage={errors.name}
              />
              <BTextInput
                style={styles.input}
                onChangeText={setPrimaryMobile}
                placeholder="10-digit mobile number"
                label={'Primary Mobile'}
                isError={errors.primaryMobile === '' ? false : true}
                errorMessage={errors.primaryMobile}
                keyboardType={'number-pad'}
                value={primaryMobile}
              />
              <MapInput
                defaultAddress={addressUpdate}
                defaultCoords={cordinate}
                onChangeAddress={onChangeAddress}
                onChangeCoords={onChangeCoords}
              />
              <Button
                disabled={isSaveDisabled}
                onPress={handleSaveAddress}
                title={'Save'}
              />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
};
export default UpdateAddress;

const styles = StyleSheet.create({
  modalHeaderText: {
    fontFamily: R.fonts.LatoBold,
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    borderBottomColor: 'grey',
    fontSize: 14,
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.42)',
  },
  saveAddress: {
    marginVertical: 10,
    color: '#009E7F',
    textAlign: 'center',
    fontSize: 20,
  },
  innerContainer: {
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: 'white',
    elevation: 5,
    borderTopEndRadius: 10,
    borderBottomStartRadius: 10,
  },
});
