import React, {useContext} from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {View, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ScreensNameEnum from '../../constants/ScreensNameEnum';
import Button from '../commons/Button';
import drawerRoutes from '../../constants/drawerRoutes';
import Icon from '../commons/Icon';
import R from 'resources/R';
import {useSelector} from 'react-redux';
import {AuthContext, AuthFunctions} from '../../store/contexts/AuthContext';
import {currentUserSelector} from '../../store/slices/user/user.slice';
import {RootState} from '../../store/app.store';
import {User} from '../../datalib/entity/user';
const DrawerWrapper = (props: any) => {
  const navigation = useNavigation();
  const authContext: AuthFunctions = useContext(AuthContext);
  const handleOnPress = (screen: string) => {
    navigation.navigate(screen);
  };
  const user = useSelector<RootState, User>(state =>
    currentUserSelector(state),
  );

  const handleLogout = () => {
    authContext.signOut();
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.loginSection}>
        {user ? (
          <View>
            <Text style={styles.userMsg}>
              Welcome, {'firstName' in user ? user.firstName : user.phone}
            </Text>
          </View>
        ) : (
          <View style={styles.loginBtn}>
            <Button
              title="Sign In"
              onPress={() => {
                handleOnPress(ScreensNameEnum.LOGIN_SCREEN);
              }}
            />
          </View>
        )}
      </View>
      <View style={styles.drawerList}>
        {drawerRoutes.map((item, index) =>
          item.loginType === user.loginType ? (
            <DrawerItem
              key={`${index}_routes`}
              icon={({color}) => (
                <Icon
                  iconColor={color}
                  size={{height: 20, width: 20}}
                  icon={item.icon}
                />
              )}
              label={item.title}
              onPress={() => handleOnPress(item.screen)}
              style={styles.drawerItem}
              labelStyle={styles.drawerItemLabel}
            />
          ) : null,
        )}
        {user && (
          <DrawerItem
            label={'Logout'}
            onPress={handleLogout}
            style={styles.drawerItem}
            labelStyle={styles.drawerItemLabel}
            icon={({color}) => (
              <Icon
                iconColor={color}
                size={{height: 20, width: 20}}
                icon={R.icons.LogoutIcon}
              />
            )}
          />
        )}
      </View>
    </DrawerContentScrollView>
  );
};
export default DrawerWrapper;
const styles = StyleSheet.create({
  loginSection: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  loginBtn: {width: 100},
  drawerList: {
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  drawerItem: {
    marginVertical: 0,
    paddingVertical: 0,
  },
  drawerItemLabel: {
    marginVertical: 0,
    paddingVertical: 0,
    fontFamily: R.fonts.LatoRegular,
  },
  userMsg: {
    fontFamily: R.fonts.LatoBold,
    fontSize: 18,
  },
});
