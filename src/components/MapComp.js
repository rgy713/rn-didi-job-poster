import React, {memo, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  PermissionsAndroid,
  Platform,
  View,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Marker} from 'react-native-maps';
import {MyImage} from '.';
import config from '../config';
import strings from '../strings';
import MapViewDirections from 'react-native-maps-directions';
import {getDistanceApi, imageUrl} from '../utils';
import {useSelector} from 'react-redux';
import axios from 'axios';
const initialRegion = {
  latitude: 48.8584,
  longitude: 2.2945,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};
let {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 60; //Very high zoom level
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const GOOGLE_MAPS_APIKEY = 'AIzaSyD2X9gmkFwfqntuXQcXcyMC5VUadIR4b7Y';
const MapComp = ({
  directionEnabled,
  distance,
  setDistance,
  detailPage,
  style,
  customer,
}) => {
  var watchPosition = null;
  let MapRef = useRef();
  const {user} = useSelector(state => state.auth);
  const [lastLat, setLastLat] = useState(0);
  const [lastLong, setLastLong] = useState(0);
  const [loading, setLoading] = useState(false);

  const [destination, setDestination] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });
  useEffect(() => {
    customer.status == 'Accepted'
      ? setDestination({
          latitude: parseFloat(customer?.origin_address?.lat),
          longitude: parseFloat(customer?.origin_address?.lng),
        })
      : setDestination({
          latitude: parseFloat(customer?.destination_address?.lat),
          longitude: parseFloat(customer?.destination_address?.lng),
        });
    // requestPermissions();
    return () => {
      if (watchPosition) {
        Geolocation.clearWatch(watchPosition);
        watchPosition = null;
      }
    };
  }, [customer.status]);
  // const [channel, setChannel] = useState(
  //   pusher.subscribe(`provider.${provider?.provider_id}.location`),
  // );
  // useEffect(() => {
  //   channel.bind('App\\Events\\SendLocation', (data) => {
  //     console.warn('latlng', data);
  //     setActiveData({provider: {lat: data.lat, lng: data.lng}});
  //   });
  // }, []);
  // const onRegionChangeComplete = (region) => {
  //   console.log('onRegionChangeComplete', region);
  // };
  // useEffect(() => {
  //   database()
  //     .ref('/provider/latLng/' + provider?.id)
  //     .on('value', snapshot => {
  //       // setMapRegion(snapshot.val());
  //       console.warn('sn', snapshot.val());
  //     });
  // }, []);

  const fitToCoords = position => {
    MapRef.current?.fitToCoordinates([
      {
        latitude: parseFloat(position.coords.latitude),
        longitude: parseFloat(position.coords.longitude),
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      },
      destination,
    ]);
    // MapRef.current?.fitToSuppliedMarkers([strings.user, strings.driver], false);
    // console.warn(customer.destination_address);
    setLastLat(position.coords.latitude);
    setLastLong(position.coords.longitude);
    setLoading(false);
    getMatrix(position.coords.latitude, position.coords.longitude);
  };

  const requestPermissions = async () => {
    if (watchPosition) {
      Geolocation.clearWatch(watchPosition);
      watchPosition = null;
    }
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }

    Geolocation.getCurrentPosition(
      pos => fitToCoords(pos),
      err => console.warn(err),
      {
        enableHighAccuracy: false,
        timeout: 15000,
        maximumAge: 10000,
      },
    );

    watchPosition = Geolocation.watchPosition(
      position => fitToCoords(position),
      error => console.warn('err', error),
      {
        enableHighAccuracy: false,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  };

  const getMatrix = (lat, lng) => {
    if (lat && lng && destination.latitude && destination.longitude) {
      axios
        .get(
          getDistanceApi(
            'AIzaSyD2X9gmkFwfqntuXQcXcyMC5VUadIR4b7Y',
            `${lat},${lng}`,
            `${destination.latitude},${destination.longitude}`,
          ),
        )
        .then(({data}) => {
          // console.warn('res', data.rows[0].elements[0].distance);
          // alert('haha');
          setDistance(data.rows[0]?.elements[0]?.distance);
        })
        .catch(err => {
          console.warn('Err', err);
        });
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color={config.primaryColor} />;
  }
  return (
    <View
      style={{
        height: config.window_height * 0.3,
        width: '100%',
        zIndex: 1111,
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.8)',
        alignItems: 'center',
        marginTop: 12,
        borderRadius: 12,
        overflow: 'hidden',
        ...style,
      }}>
      <MapView
        onMapReady={() => requestPermissions()}
        provider={'google'}
        style={{height: '100%', width: '100%'}}
        ref={MapRef}
        key={1}
        // initialxRegion={destination}
        showsUserLocation={true}>
        <MapViewDirections
          origin={{
            latitude: detailPage
              ? parseFloat(customer?.origin_address?.lat)
              : parseFloat(lastLat),
            longitude: detailPage
              ? parseFloat(customer?.origin_address?.lng)
              : parseFloat(lastLong),
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          strokeWidth={6}
          tappable={true}
          strokeColor={config.primaryColor}
          strokeColors={[
            config.primaryColor,
            config.activeColor,
            config.textPrimaryColor,
          ]}
          lineDashPattern={[0]}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
        />
        <Marker
          tracksViewChanges={false}
          identifier={strings.driver}
          coordinate={{
            latitude: detailPage
              ? parseFloat(customer?.origin_address?.lat)
              : parseFloat(lastLat),
            longitude: detailPage
              ? parseFloat(customer?.origin_address?.lng)
              : parseFloat(lastLong),
          }}>
          <ImageBackground
            source={config.images.profilePlaceholder}
            style={{
              width: 35,
              height: 35,
              borderRadius: 360,
              overflow: 'hidden',
            }}>
            <MyImage
              resizeMode={'cover'}
              source={{
                uri: user?.profile_picture?.includes('http')
                  ? user?.profile_picture
                  : imageUrl + user?.profile_picture,
              }}
            />
          </ImageBackground>
        </Marker>
        <Marker
          tracksViewChanges={false}
          identifier={strings.user}
          coordinate={destination}>
          <ImageBackground
            source={config.images.profilePlaceholder}
            style={{
              width: 35,
              height: 35,
              borderRadius: 360,
              overflow: 'hidden',
            }}>
            <MyImage
              resizeMode={'cover'}
              source={{
                uri: customer?.customer?.profile_picture?.includes('http')
                  ? customer?.customer?.profile_picture
                  : imageUrl + customer?.customer?.profile_picture,
              }}
            />
          </ImageBackground>
        </Marker>
      </MapView>
    </View>
  );
};
// const mapStyle = [
//   {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
//   {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
//   {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
//   {
//     featureType: 'administrative.locality',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'poi',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'poi.park',
//     elementType: 'geometry',
//     stylers: [{color: '#263c3f'}],
//   },
//   {
//     featureType: 'poi.park',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#6b9a76'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'geometry',
//     stylers: [{color: '#38414e'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'geometry.stroke',
//     stylers: [{color: '#212a37'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#9ca5b3'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry',
//     stylers: [{color: '#746855'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry.stroke',
//     stylers: [{color: '#1f2835'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#f3d19c'}],
//   },
//   {
//     featureType: 'transit',
//     elementType: 'geometry',
//     stylers: [{color: '#2f3948'}],
//   },
//   {
//     featureType: 'transit.station',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'geometry',
//     stylers: [{color: '#17263c'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#515c6d'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.stroke',
//     stylers: [{color: '#17263c'}],
//   },
// ];

export default MapComp;
