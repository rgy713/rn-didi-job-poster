import React, {memo, useState} from 'react';
import {View, TextInput, Pressable} from 'react-native';
import {Feather} from '../assets/vectorIcons';
import PropTypes from 'prop-types';
import config from '../config';
const MyNativeInput = React.forwardRef(
  (
    {
      value,
      secureEntry,
      icon,
      keyboardType,
      placeholder,
      maxLength,
      numberOfLines,
      placeholderTextColor,
      defaultValue,
      onFocus,
      editable,
      textStyle,
      onChangeText,
      style,
      multiline,
      onSubmitEditing,
      onBlur,
    },
    ref,
  ) => {
    const [secureState, setSecureState] = useState(secureEntry ? true : false);
    const [focusedIndex, setFocusedIndex] = useState(false);
    return (
      <>
        <View
          style={{
            width: '100%',
            height: 50,
            marginTop: 12,
            borderBottomWidth: focusedIndex ? 1 : 0,

            justifyContent: 'center',
            borderRadius: 8,
            elevation: 2,
            borderColor: config.primaryColor,
            backgroundColor: '#fff',
            ...style,
          }}>
          {icon}
          <TextInput
            ref={ref}
            editable={editable}
            multiline={multiline}
            onFocus={() => {
              setFocusedIndex(true);
              onFocus ? onFocus() : null;
            }}
            maxLength={maxLength}
            value={value}
            onBlur={() => {
              setFocusedIndex(false);
              onBlur ? onBlur() : null;
            }}
            placeholderTextColor={placeholderTextColor}
            defaultValue={defaultValue}
            numberOfLines={numberOfLines || 1}
            keyboardType={keyboardType}
            secureTextEntry={secureState}
            onChangeText={onChangeText}
            style={{
              padding: 0,
              height: '100%',
              flex: 1,
              marginLeft: 12,
              color: '#000',
              ...textStyle,
            }}
            placeholder={placeholder}
            onSubmitEditing={onSubmitEditing}
          />
          {secureEntry ? (
            <Pressable
              onPress={() => setSecureState(!secureState)}
              style={{
                position: 'absolute',
                right: 0,
                justifyContent: 'center',
                alignItems: 'center',
                width: 40,
                height: '100%',
              }}>
              <Feather
                name={secureState ? 'eye-off' : 'eye'}
                size={16}
                color={'grey'}
              />
            </Pressable>
          ) : null}
        </View>
      </>
    );
  },
);
MyNativeInput.propTypes = {
  value: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  numberOfLines: PropTypes.number,
};
export default MyNativeInput;
