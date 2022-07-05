import React from 'react';
import {SvgProps} from 'react-native-svg';

const Icon = ({size, icon, iconColor}) => {
  if (icon) {
    const CustomIcon = icon;
    return (
      <CustomIcon height={size.height} width={size.width} color={iconColor} />
    );
  }
  return null;
};

export default Icon;
