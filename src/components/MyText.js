import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {Fonts} from '../config';

const MyText = ({text, style, numberOfLines, onPress, fontSize}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      onPress={onPress}
      style={
        Array.isArray(style)
          ? [myStyles.text, ...style]
          : [myStyles.text, style]
      }
      fontSize={fontSize}>
      {text}
    </Text>
  );
};

const myStyles = StyleSheet.create({
  text: {
    fontFamily: Fonts.Regular,
    fontSize: 13,
    color: '#000',
  },
});

MyText.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  fontSize: PropTypes.any,
  fontFamily: PropTypes.string,
};

export default MyText;
