import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import {FontAwesome} from '../assets/vectorIcons';
import config from '../config';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default ({starSize, disabled, style}) => {
  const [activeStar, setActiveStar] = useState(2);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        ...style,
      }}>
      {['star', 'star', 'star', 'star', 'star'].map((v, i) => (
        <Pressable
          onPress={() => {
            disabled ? null : setActiveStar(i + 1);
          }}
          key={i.toString()}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome
            name={v}
            size={starSize || 40}
            color={activeStar > i ? config.starColor : config.disabledColor}
          />
        </Pressable>
      ))}
    </View>
  );
};
