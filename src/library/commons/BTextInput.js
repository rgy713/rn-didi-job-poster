import React from 'react';
import {View, TextInput, StyleSheet, Platform} from 'react-native';
import R from 'resources/R';
/*
 * This function is used to create our textInput
 * @author Didijobs <rgy713>
 */
const BTextInput = React.forwardRef((props, ref) => {
  return (
    <View
      style={[
        !props.isError ? styles.inputContainer : styles.inputContainerErr,
        props.containerStyle ? props.containerStyle : {},
      ]}>
      <TextInput ref={ref} {...props} />
    </View>
  );
});
export default BTextInput;
const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 0.5,
    marginVertical: 10,
    borderRadius: 60,
    borderColor: 'rgba(0, 0, 0, 0.39)',
    paddingVertical: Platform.OS === 'android' ? 5 : 15,
    paddingHorizontal: 20,
  },
  inputContainerErr: {
    borderWidth: 0.5,
    marginVertical: 10,
    borderRadius: 60,
    borderColor: 'red',
    paddingVertical: Platform.OS === 'android' ? 5 : 15,
    paddingHorizontal: 20,
  },
});
