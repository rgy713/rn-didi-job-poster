import React, {memo, useState} from 'react';
import {Text, View, Pressable, ImageBackground, Platform} from 'react-native';
import ImageView from 'react-native-image-viewing';
import config from '../../config';
import {MyImage} from '../../components';
import {imageUrl} from '../../utils';

export default ({navigation, item, source, usrId}) => {
  const [ImageVisible, setImageVisible] = useState(false);

  return (
    <>
      <ImageView
        images={[source]}
        imageIndex={0}
        visible={ImageVisible}
        onRequestClose={() => setImageVisible(false)}
      />
      <ImageBackground
        source={config.images.profilePlaceholder}
        style={{
          width: 35,
          height: 35,
          borderRadius: 360,
          overflow: 'hidden',
        }}>
        <Pressable
          onPress={() => {
            source ? setImageVisible(true) : null;
          }}
          style={{
            height: '100%',
            width: '100%',
          }}>
          <MyImage resizeMode={'cover'} source={source} />
        </Pressable>
      </ImageBackground>
    </>
  );
};
