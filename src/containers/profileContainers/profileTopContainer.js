import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {Camera, UserHeader} from '../../components';
import MyText from '../../components/MyText';
import config, {Fonts} from '../../config';
import {imageUrl} from '../../utils';
const Render = ({
  navigation,
  truckSide,
  editable,
  normal,
  route,
  screenName,
  set_vehicle_picture,
  vehicle_picture,
  userData,
  setUserData,
}) => {
  const {user} = useSelector(state => state.auth);
  return (
    <>
      {normal ? null : (
        <UserHeader title={screenName || route.name} navigation={navigation} />
      )}
      <View
        style={
          normal
            ? {marginTop: 12, alignItems: 'center'}
            : {top: -50, alignItems: 'center', zIndex: 21121111}
        }>
        <Camera
          editable={false}
          profile={truckSide ? vehicle_picture : userData.profile_picture}
          setProfile={profile => {
            if (truckSide) {
              set_vehicle_picture(profile);
            } else {
              setUserData({
                ...userData,
                profile_picture: profile,
              });
            }
          }}
          pickerCam
          style={{
            width: 110,
            height: 110,
          }}
          editable={editable}
        />
        <MyText
          style={{
            color: config.black,
            fontFamily: Fonts.Bold,
            fontSize: 24,
            marginTop: 12,
            lineHeight: 29,
          }}
          text={
            truckSide
              ? user?.vehicle_brand
              : userData?.first_name + ' ' + userData?.last_name
          }
        />
        <MyText
          style={{
            color: config.black,
            lineHeight: 15,
            fontSize: 14,
          }}
          text={truckSide ? user?.vehicle_model + ' Model' : userData?.role}
        />
      </View>
    </>
  );
};

export default Render;
