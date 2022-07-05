import React from 'react';
import {Text, View, Pressable, ActivityIndicator} from 'react-native';
/*
 * This function is used to create the button wrapper
 * @author Didijobs <rgy713>
 */
const ButtonWrapper = ({
  title,
  loading,
  disabled = false,
  onPress,
  style,
  textStyle,
  indicatorColor = 'white',
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={style}
      disabled={disabled}
      android_ripple={{color: 'gray', borderless: false}}>
      {!loading ? (
        <Text style={textStyle}>{title}</Text>
      ) : (
        <View>
          <ActivityIndicator size="large" color={indicatorColor} />
        </View>
      )}
    </Pressable>
  );
};

export default ButtonWrapper;
