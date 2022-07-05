import PropTypes from 'prop-types';
import React from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import config, {Fonts} from '../config';
import {AntDesign} from '../assets';
const UserHeader = ({title, normal, message, navigation}) => {
  return (
    <View style={styles.normalHeader}>
      {navigation.canGoBack() ? (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          android_ripple={{
            color: config.primaryColor,
          }}
          style={styles.btnCont}>
          <AntDesign name="back" size={22} color={config.black} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  normalHeader: {
    width: '100%',
    backgroundColor: config.white,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  btnCont: {
    width: 50,
    height: '100%',
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// UserHeader.propTypes = {
//   title: PropTypes.string.isRequired,
//   back: PropTypes.bool,
//   navigation: PropTypes.object.isRequired,
// };

export default UserHeader;
