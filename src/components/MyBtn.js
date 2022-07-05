import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import config, {Fonts} from '../config';
import MyText from './MyText';
import PropTypes from 'prop-types';
import strings from '../strings';

const MyBtn = ({
  text,
  style,
  textStyle,
  RightIcon,
  onPress,
  disabled,
  secondary,
  activeOpacity,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      disabled={disabled}
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: disabled
          ? config.disabledColor
          : secondary
          ? config.white
          : config.primaryColor,
        ...style,
      }}>
      {isLoading ? (
        <ActivityIndicator color={config.white} />
      ) : (
        <MyText
          text={text}
          style={{
            ...styles.title,
            color: secondary ? config.primaryColor : config.white,
            ...textStyle,
          }}
        />
      )}
      {RightIcon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    backgroundColor: config.primaryColor,
    width: '100%',
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'center',
    height: 45,
    elevation: 1,
    alignItems: 'center',
  },

  title: {
    color: config.white,
    fontFamily: Fonts.Medium,
    fontSize: 14,
  },
});

MyBtn.propTypes = {
  // text: PropTypes.string.isRequired,
  style: PropTypes.object,
  textStyle: PropTypes.object,
  secondary: PropTypes.bool,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};

MyBtn.defaultProps = {
  secondary: false,
  disabled: false,
};

export default MyBtn;
