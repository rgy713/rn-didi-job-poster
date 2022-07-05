import MyText from '../components/MyText';
import config, {Fonts} from '../config';
import strings from '../strings';
import React from 'react';
const ViewDetails = ({style, onPress, title}) => (
  <MyText
    onPress={onPress}
    text={title || strings.viewDetails}
    style={{
      color: config.primaryColor,
      fontFamily: Fonts.Semi_Bold,
      fontSize: 13,
      marginTop: 12,
      textDecorationLine: 'underline',
      ...style,
    }}
  />
);
export default ViewDetails;
