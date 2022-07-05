import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
/*
 * This function is used to create our universal checkbox
 * @author Didijobs <rgy713>
 */
const CheckBox = ({defaultChecked, onCheck}) => {
  const [checked, setChecked] = useState(defaultChecked || false);
  useEffect(() => {
    setChecked(defaultChecked);
  }, [defaultChecked]);
  const handleOnPress = () => {
    onCheck && onCheck(!checked);
    setChecked(!checked);
  };
  return (
    <Pressable onPress={handleOnPress}>
      <Icon
        name={checked ? 'check-box' : 'check-box-outline-blank'}
        size={25}
        color={checked ? '#2ECC71' : '#C5CEE0'}
      />
    </Pressable>
  );
};
export default CheckBox;
