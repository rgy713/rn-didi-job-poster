// App.js

import React, {useState} from 'react';
import {StyleSheet, Modal, FlatList, Text, View, Pressable} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import ImageView from 'react-native-image-viewing';
import ImageChild from './MyImage';
import {FontAwesome, Entypo, VideoIcon} from '../assets';
import config, {Fonts} from '../config';
import {MyText} from '.';
import strings from '../strings';
import {imageUrl} from '../utils';

const OpenGallery = (fromCamera, setProfile, setShowModal) => {
  fromCamera
    ? ImageCropPicker.openCamera({
        width: 300,
        height: 400,
        // compressImageQuality: 0.5,
      }).then(image => {
        setShowModal(false);
        setProfile(image);
      })
    : ImageCropPicker.openPicker({
        width: 300,
        height: 400,
        multiple: false,
        cropping: true,
        // compressImageQuality: 0.5,
      }).then(image => {
        setShowModal(false);
        setProfile(image);
      });
};
const CameraPciker = ({
  profile,
  setProfile,
  style,
  editable,
  single,
  video,
  ImageStyle,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const profileImage = profile?.path || profile;
  return (
    <View
      style={{
        borderWidth: 2,
        height: 120,
        borderRadius: 360,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: config.primaryColor,
        backgroundColor: '#fff',
        ...style,
      }}>
      <ImageView
        images={[
          {
            uri: profileImage,
          },
        ]}
        imageIndex={0}
        visible={imageVisible}
        onRequestClose={() => setImageVisible(false)}
      />
      <Modal
        animationType="fade"
        transparent={true}
        onRequestClose={() => {
          setShowModal(false);
        }}
        visible={showModal}>
        <Pressable
          onPress={() => {
            setShowModal(false);
          }}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              width: '80%',
              borderRadius: 8,
              elevation: 2,
              paddingBottom: 12,
              backgroundColor: '#fff',
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 15,
                textAlign: 'center',
                fontFamily: Fonts.Bold,
                marginVertical: 12,
              }}>
              Select Options...
            </Text>
            <FlatList
              data={
                video
                  ? ['Take Photo', 'From Library', 'Take Video', 'Cancel']
                  : ['Take Photo', 'From Library', 'Cancel']
              }
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index, separators}) => (
                <Pressable
                  style={{
                    backgroundColor: config.primaryColor,
                    marginTop: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 40,
                    borderRadius: 4,
                    width: '90%',
                    alignSelf: 'center',
                  }}
                  onPress={() => {
                    index == 0
                      ? OpenGallery(
                          true,
                          setProfile,
                          setShowModal,
                          single,
                          video,
                        )
                      : index == 1
                      ? OpenGallery(
                          false,
                          setProfile,
                          setShowModal,
                          single,
                          video,
                        )
                      : video && index == 2
                      ? OpenVideo(setProfile, setShowModal, single)
                      : setShowModal(false);
                  }}>
                  <Text style={{color: config.white}}>{item}</Text>
                </Pressable>
              )}
            />
          </View>
        </Pressable>
      </Modal>
      <Pressable
        onPress={() => {
          profile ? setImageVisible(true) : null;
        }}
        style={{
          width: '100%',
          justifyContent: 'center',
          flexDirection: 'row',
          borderRadius: 360,
          overflow: 'hidden',
          alignItems: 'center',
          height: '100%',
          ...ImageStyle,
        }}>
        {/* {!profile ? (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Entypo size={35} color={config.headingColor} name={'camera'} />
            <MyText
              style={{
                color: config.headingColor,
                fontFamily: Fonts.Medium,
                fontSize: 10,
                textAlign: 'center',
                width: '80%',
              }}
              text={strings.locationImagge}
            />
          </View>
        ) : ( */}
        <ImageChild
          resizeMode={'cover'}
          source={
            profileImage
              ? {
                  uri: profileImage,
                }
              : config.images.man
          }
        />
        {/* )} */}
        {Array.isArray(profile) && profile.length > 1 ? (
          <View
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(0,0,0,0.5)',
              height: config.window_width * 0.4,
              width: config.window_width * 0.3,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 41,
                color: '#fff',
                fontFamily: Fonts.Black,
              }}>
              {profile.length + '+'}
            </Text>
          </View>
        ) : null}
      </Pressable>
      {editable && (
        <Pressable
          onPress={() => setShowModal(true)}
          style={{
            backgroundColor: config.primaryColor,
            position: 'absolute',
            bottom: 0,
            elevation: 8,
            right: 4,
            width: 30,
            height: 30,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 111111,
          }}>
          <Entypo color={'#fff'} name="camera" size={13} style={{padding: 4}} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
});
export default CameraPciker;
