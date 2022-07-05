import {View} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {MyImage} from '.';
import config from '../config';
import {chatsNav, homeNav} from '../navigator/routeName';
import strings from '../strings';
import MyText from './MyText';

const MyHomeHeader = ({title, navigation}) => {
  const {user} = useSelector(state => state.auth);
  return (
    <View style={styles.header}>
      <View style={styles.center}>
        <View style={styles.left}>
          <MyText text={strings.Welcome} style={styles.welcome} fontSize={14} />
          <MyText
            text={user.first_name + ' ' + user.last_name}
            style={styles.name}
            fontSize={20}
          />
        </View>
        <View style={styles.right}>
          <TouchableOpacity
            onPress={() => navigation.navigate(chatsNav.chatList)}
            style={styles.headerRightBtn}>
            {/* <ChatIcon color={config.white} size={25} /> */}
            <MyImage
              style={{
                width: 22,
                height: 22,
              }}
              source={require('../assets/Images/chat.png')}
            />
            {/* <MyText text={'2'} style={styles.headerBadge} /> */}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(homeNav.notifications)}
            style={styles.headerRightBtn}>
            <MyImage
              style={{
                width: 22,
                height: 22,
              }}
              source={require('../assets/Images/notifications.png')}
            />
            {/* <MyText text={'3'} style={styles.headerBadge} /> */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('window').width,
    height: 100,
    backgroundColor: '#359FDD',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 10,
  },
  left: {},
  center: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  right: {
    flexDirection: 'row',
    marginRight: 10,
  },
  welcome: {
    color: '#FFF',
    fontSize: 14,
  },
  name: {
    color: '#FFF',
    fontSize: 20,
  },
  headerRightBtn: {
    padding: 10,
  },
  headerBadge: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 3,
    paddingRight: 3,
    position: 'absolute',
    backgroundColor: config.primaryColor,
    textAlign: 'center',
    top: -5,
    right: -5,
    borderRadius: 100,
    padding: 3,
    color: '#FFF',
    height: 25,
    width: 25,
    textAlignVertical: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

MyHomeHeader.propTypes = {
  title: PropTypes.string.isRequired,
  back: PropTypes.bool,
  navigation: PropTypes.object.isRequired,
};

export default MyHomeHeader;
