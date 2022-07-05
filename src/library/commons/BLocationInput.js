import React, {useState, useEffect, useRef} from 'react';
import {PermissionsAndroid} from 'react-native';
import {
  View,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  KeyboardAvoidingView,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Geocoder from 'react-native-geocoding';
Geocoder.init('AIzaSyCueXXbZriqE8vfG8jjErLS033xHwxE6ko');
import Geolocation from '@react-native-community/geolocation';
import R from 'resources/R';
import Button from './Button';
/*
 * This function is used to create our textInput for Location
 * @author Didijobs <rgy713>
 */
const BLocationInput = ({
  defaultAddress,
  defaultCoords,
  onChangeAddress,
  onChangeCoords,
  getCoords,
}) => {
  // REFS
  const autPlacesRef = useRef(null);
  // STATE
  const [address, setAddress] = useState(defaultAddress || null);
  const [coords, setCoords] = useState(defaultCoords || null);
  const [expand, setExpand] = useState(false);
  const [locationType, setLocationtype] = useState(true);
  // HOOKS
  useEffect(() => {
    if (address && autPlacesRef && autPlacesRef.current) {
      autPlacesRef.current?.setAddressText(address);
    }
  });
  useEffect(() => {
    setTimeout(() => {
      if (
        defaultCoords &&
        defaultAddress &&
        autPlacesRef &&
        autPlacesRef.current
      ) {
        autPlacesRef.current.setAddressText(defaultAddress);
      }
    }, 1000);
  }, [defaultAddress, defaultCoords]);
  useEffect(() => {
    onChangeAddress && onChangeAddress(address);
  }, [address, onChangeAddress]);

  useEffect(() => {
    onChangeCoords && onChangeCoords({coords, address});
  }, [address, coords, onChangeCoords]);
  const onAddressSelection = (data, details) => {
    const coordinate = {
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
      latitudeDelta: 0.0122,
      longitudeDelta: 0.0061,
    };
    setAddress(data.description || data.name);
    setCoords(coordinate);
  };
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (!expand) {
      setLocationtype(false);
    }
    setExpand(!expand);
  };
  const setCurrentLocation = () => {
    locationType(true);
    Geolocation.getCurrentPosition(
      async position => {
        Geocoder.from(
          parseFloat(position.coords.latitude),
          parseFloat(position.coords.longitude),
        )
          .then(json => {
            var addressComponent =
              json.results.length > 2
                ? json.results[2].formatted_address
                : json.results[0].formatted_address;
            if (autPlacesRef) {
              autPlacesRef.current?.setAddressText(addressComponent);
            }
            onChangeAddress && onChangeAddress(addressComponent);
            onChangeCoords &&
              onChangeCoords({
                coords: {
                  latitude: parseFloat(position.coords.latitude),
                  longitude: parseFloat(position.coords.longitude),
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0922,
                },
                address: addressComponent,
              });
          })
          .catch(error => console.warn(error));
      },
      error => {
        console.log(error);
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 1000,
      },
    );
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{zIndex: 999}}>
      <View style={styles.inputContainer}>
        {!expand && (
          <View style={styles.grid}>
            <Button
              title={'Come to me'}
              backgroundColor={
                locationType ? R.colors.SECONDARY : R.colors.PRIMARY_LIGHT
              }
              textColor={locationType ? R.colors.WHITE : R.colors.SECONDARY}
              onPress={setCurrentLocation}
            />
          </View>
        )}
        <View style={styles.grid}>
          {!expand && (
            <Button
              title={'Job Location'}
              onPress={() => toggleExpand()}
              backgroundColor={
                !locationType ? R.colors.SECONDARY : R.colors.PRIMARY_LIGHT
              }
              textColor={!locationType ? R.colors.WHITE : R.colors.SECONDARY}
            />
          )}
          {expand && (
            <GooglePlacesAutocomplete
              ref={autPlacesRef}
              placeholder={'Search for an address'}
              minLength={2}
              // autoFocus={false}
              // returnKeyType={'default'}
              fetchDetails={true}
              textInputProps={{
                placeholderTextColor: R.colors.WHITE,
                returnKeyType: 'search',
              }}
              onPress={onAddressSelection}
              query={{
                key: 'AIzaSyCnS48j3rbqgdhum3jOuGL4l4Q5lft2Ezs',
                language: 'en',
              }}
              styles={{
                textInputContainer: styles.textInputContainer,
                textInput: styles.textInput,
                listView: styles.listView,
                predefinedPlacesDescription: {color: '#FFF'},
              }}
              enablePoweredByContainer={false}
              listViewDisplayed={false}
              nearbyPlacesAPI={'GoogleReverseGeocoding'}
            />
          )}

          {expand && (
            <Button
              layout={'circle'}
              icon={'close'}
              onPress={() => toggleExpand()}
              backgroundColor={R.colors.primary}
              buttonStyle={styles.closeBtn}
            />
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default BLocationInput;
const styles = StyleSheet.create({
  grid: {flex: 1},
  textInputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeBtn: {
    position: 'absolute',
    right: 10,
    top: 12,
    zIndex: 90,
  },
  textInput: {
    borderBottomColor: 'grey',
    fontSize: 14,
    paddingHorizontal: 20,
    borderRadius: 60,
    backgroundColor: R.colors.SECONDARY,
    color: R.colors.WHITE,
    paddingVertical: 10,
    height: 55,
  },
  listView: {
    height: 150,
    borderRadius: 10,
    zIndex: 999,
    position: 'absolute',
    top: 60,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    paddingHorizontal: 10,
  },
  inputContainer: {
    width: '100%',
    zIndex: 999,
    flexDirection: 'row',
    minHeight: 60,
    marginVertical: 0,
  },
});
