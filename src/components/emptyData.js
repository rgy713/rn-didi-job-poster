import React from 'react';
import {Text} from 'react-native';
import config, {Fonts} from '../config';
const EmptyData = ({value, style}) => (
  <Text
    style={{
      textAlign: 'center',
      width: '100%',
      color: config.headingColor,
      marginTop: 12,
      fontFamily: Fonts.Medium,
      ...style,
    }}>
    {value}
  </Text>
);
export default EmptyData;
