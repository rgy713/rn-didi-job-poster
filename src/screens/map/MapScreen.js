import React, {useRef} from 'react';
import {View, Pressable, StyleSheet, Text} from 'react-native';
import BottomBar from 'library/commons/BottomBar';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
/*
 * This function Component is used to render Map screen
 * @author Didijobs <rgy713>
 */
export default function MapScreen() {
  const mapRef = useRef(null);
  return (
    <ScreenWrapper header={false}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <BottomBar title={'Distance: 2 miles'} />
        </View>
        <View style={styles.mapContainer}>
          <MapView
            ref={mapRef}
            style={styles.mapStyle}
            onRegionChange={() => {}}></MapView>
        </View>
      </View>
    </ScreenWrapper>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  topBar: {flex: 0.4, borderWidth: 2},
  mapContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
