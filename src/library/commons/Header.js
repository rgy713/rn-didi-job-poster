import PropTypes from 'prop-types';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {AntDesign} from '../../assets';
const UserHeader = ({title, normal, message}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.normalHeader}>
      {navigation.canGoBack() ? (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          android_ripple={{
            color: '#eee',
          }}
          style={styles.btnCont}>
          <AntDesign name="back" size={22} color={'#000'} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  normalHeader: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  btnCont: {
    width: 50,
    height: '100%',
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

UserHeader.propTypes = {
  title: PropTypes.string.isRequired,
  back: PropTypes.bool,
};

export default UserHeader;
