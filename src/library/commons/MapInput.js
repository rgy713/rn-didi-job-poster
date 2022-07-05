import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import R from 'resources/R';
/*
 * This function is used to create our mapInput
 * @author Didijobs <rgy713>
 */

const MapsInput = ({
  defaultAddress,
  defaultCoords,
  onChangeAddress,
  onChangeCoords,
}) => {
  // REFS
  const autPlacesRef = useRef(null);
  const mapRef = useRef(null);
  // STATE
  const [address, setAddress] = useState(defaultAddress || null);
  const [coords, setCoords] = useState(defaultCoords || null);

  // METHODS
  const animate = currPos => {
    setTimeout(() => {
      mapRef.current?.animateToRegion(currPos, 1000);
    }, 15);
  };

  // HOOKS
  useEffect(() => {
    if (coords) {
      setTimeout(() => {
        mapRef.current?.animateToRegion(coords, 1000);
      }, 15);
    }
    if (address) {
      autPlacesRef.current?.setAddressText(address);
    }
  });
  useEffect(() => {
    setTimeout(() => {
      if (defaultCoords && defaultAddress && mapRef && autPlacesRef) {
        mapRef.current.animateToRegion(defaultCoords, 1000);
        autPlacesRef.current.setAddressText(defaultAddress);
        // onChangeAddress && onChangeAddress(defaultAddress);
        // onChangeCoords && onChangeCoords(defaultCoords);
      }
    }, 1000);
  }, [defaultAddress, defaultCoords]);
  useEffect(() => {
    onChangeAddress && onChangeAddress(address);
  }, [address, onChangeAddress]);

  useEffect(() => {
    onChangeCoords && onChangeCoords(coords);
  }, [coords, onChangeCoords]);
  const onAddressSelection = (data, details) => {
    const coordinate = {
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
      latitudeDelta: 0.0122,
      longitudeDelta: 0.0061,
    };
    setAddress(data.description || data.name);
    setCoords(coordinate);
    animate(coordinate);
  };
  return (
    <View style={styles.inputContainer}>
      <GooglePlacesAutocomplete
        ref={autPlacesRef}
        placeholder={'Search for an address'}
        minLength={2}
        autoFocus={false}
        returnKeyType={'default'}
        fetchDetails={true}
        onPress={onAddressSelection}
        query={{key: 'AIzaSyCnS48j3rbqgdhum3jOuGL4l4Q5lft2Ezs', language: 'en'}}
        styles={{
          textInputContainer: styles.textInputContainer,
          textInput: styles.textInput,
          listView: styles.listView,
        }}
        enablePoweredByContainer={false}
        listViewDisplayed={false}
        nearbyPlacesAPI={'GoogleReverseGeocoding'}
      />
      <View style={styles.mapInput}>
        <MapView ref={mapRef} style={styles.mapStyle} onRegionChange={() => {}}>
          {coords && <Marker coordinate={coords} />}
        </MapView>
      </View>
    </View>
  );
};
export default MapsInput;
const styles = StyleSheet.create({
  mapInput: {
    width: '100%',
    overflow: 'hidden',
    marginTop: 70,
    borderRadius: 10,
  },
  textInputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    marginVertical: 10,
    borderRadius: 60,
    borderColor: 'black',
    height: 50,
    zIndex: 9,
    overflow: 'hidden',
  },
  textInput: {
    borderBottomColor: 'grey',
    fontSize: 14,
    paddingHorizontal: 20,
    borderRadius: 60,
  },
  listView: {
    height: 150,
    borderRadius: 10,
    zIndex: 999,
    position: 'absolute',
    top: 60,
  },
  mapStyle: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  label: {
    color: 'grey',
    textAlign: 'left',
    fontSize: 12,
    position: 'absolute',
    top: 5,
    left: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    fontFamily: R.fonts.Semi_Bold,
    zIndex: 99,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
});
