import React from 'react';
import {MyImage, MyText, SafeScrollView} from '../../components';
import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
// import {PersonalCard} from '../../containers';
import {AntDesign, Feather, MaterialCommunityIcons} from '../../assets';
import config from '../../config';
import {routeName} from '../../navigator/routeName';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import R from 'resources/R';
const iconProps = {
  size: 30,
};
const ProfileScreen = ({navigation}) => {
  const user = useSelector(state => state.user.user);
  const useRouting = index => {
    index == 0
      ? navigation.navigate(routeName.userProfile)
      : index == 1
      ? navigation.navigate(routeName.bankDetails)
      : index == 2
      ? navigation.navigate(routeName.allJobs)
      : index == 3
      ? navigation.navigate(routeName.mySkills)
      : index == 4
      ? navigation.navigate(routeName.help)
      : index == 5
      ? navigation.navigate(routeName.UserLocation)
      : navigation.navigate(routeName.settings);
  };
  return (
    <ScreenWrapper header={false}>
      <SafeScrollView wholeStyle={{paddingVertical: 20}}>
        <MyText style={styles.settingsText} text={'Settings'} />
        <View style={styles.container}>
          <Pressable
            style={styles.innerContainer}
            onPress={() => useRouting(0)}>
            <View style={styles.textValueContainer}>
              <Text style={styles.text}>{user.firstName}</Text>
            </View>
            <View style={styles.logo}>
              <Image
                source={{uri: user.userImage}}
                style={styles.image}
                resizeMode={'cover'}
              />
            </View>
          </Pressable>
          <Pressable
            style={styles.innerContainer}
            onPress={() => useRouting(1)}>
            <View style={styles.textValueContainer}>
              <Text style={styles.text}>Payment Methods</Text>
            </View>
            <View style={styles.logo}>
              <MaterialCommunityIcons
                color={config.activeColor}
                name={'bank'}
                {...iconProps}
              />
            </View>
          </Pressable>
          <Pressable
            style={styles.innerContainer}
            onPress={() => useRouting(2)}>
            <View style={styles.textValueContainer}>
              <Text style={styles.text}>My Jobs</Text>
            </View>
            <View style={styles.logo}>
              <Icon name={'content-paste'} size={30} color="#E3AB1A" />
            </View>
          </Pressable>
          <Pressable
            style={styles.innerContainer}
            onPress={() => useRouting(5)}>
            <View style={styles.textValueContainer}>
              <Text style={styles.text}>Work With Us</Text>
            </View>
            <View style={styles.logo}>
              <Image
                source={require('../../assets/Images/work.png')}
                style={styles.image}
                resizeMode={'cover'}
              />
            </View>
          </Pressable>
          <Pressable
            style={styles.innerContainer}
            onPress={() => useRouting(4)}>
            <View style={styles.textValueContainer}>
              <Text style={styles.text}>Help</Text>
            </View>
            <View style={styles.logo}>
              <Icon name={'help'} size={30} color="#118CFE" />
            </View>
          </Pressable>
          <Pressable style={styles.innerContainer} onPress={() => useRouting()}>
            <View style={styles.textValueContainer}>
              <Text style={styles.text}>Settings</Text>
            </View>
            <View style={styles.logo}>
              <Icon name={'settings'} size={30} color="#1730B1" />
            </View>
          </Pressable>
        </View>
        {/* {[
          'David',
          'Bank Details',
          'My Jobs',
          'My Skills',
          'Help',
          'Settings',
        ].map((item, index) => (
          <PersonalCard
            onPress={useRouting(index)}
            title={item}
            avatar={useAvatar(index)}
            key={index.toString()}
          />
        ))} */}
      </SafeScrollView>
    </ScreenWrapper>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {flexDirection: 'column'},
  innerContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  text: {
    fontSize: 18,
    color: R.colors.PRIMARI_DARK,
    fontFamily: R.fonts.Medium,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
  },
  textValueContainer: {flex: 1},
  image: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  settingsText: {
    fontSize: 22,
    marginTop: 12,
  },
});
