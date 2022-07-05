import {View} from 'react-native';
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import config, {Fonts} from '../../config';
import strings from '../../strings';
import MyText from '../../components/MyText';
import OnlineActiveIndicator from '../../components/OnlineActiveIndicator';
import {MyImage} from '../../components';
import {chatsNav, homeNav, jobsNav} from '../../navigator/routeName';
import {useSelector} from 'react-redux';
import {imageUrl} from '../../utils';
const ActiveJob = ({navigation}) => {
  const {jobs} = useSelector(state => state.jobReducers);
  const activeJob = jobs[jobs.length - 1];
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View>
          <ImageBackground
            resizeMode={'cover'}
            style={{
              width: 50,
              borderRadius: 360,
              overflow: 'hidden',
              elevation: 1,
              height: 50,
            }}
            source={config.images.profilePlaceholder}>
            <MyImage
              source={{
                uri: activeJob?.customer?.profile_picture?.includes('http')
                  ? activeJob?.customer?.profile_picture
                  : imageUrl + activeJob?.customer?.profile_picture,
              }}
            />
          </ImageBackground>
        </View>
        <View style={styles.topRight}>
          <View style={styles.orderNumberActiveContainer}>
            <MyText
              text={strings.order(activeJob.code)}
              style={styles.orderNumber}
            />
            <OnlineActiveIndicator />
          </View>
          <MyText
            text={activeJob.delivery_f_name + ' ' + activeJob.delivery_l_name}
            style={styles.customerName}
            numberOfLines={2}
            fontSize={12}
          />
          <MyText text={strings.customer} style={styles.customer} />
        </View>
      </View>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          flexDirection: 'row',
          marginTop: 24,
        }}>
        <View
          style={{
            alignItems: 'center',
            marginTop: 12,
          }}>
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 360,
              backgroundColor: config.primaryColor,
            }}
          />
          <View
            style={{
              height: 25,
              marginVertical: 4,
              width: 1,
              backgroundColor: config.headingColor,
            }}
          />
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 360,
              backgroundColor: config.textPrimaryColor,
            }}
          />
        </View>

        <View style={{marginLeft: 12, width: '65%'}}>
          <MyText
            style={{
              fontSize: 10,
              lineHeight: 12,
              color: config.headingColor,
            }}
            text={strings.pick_up_Location}
          />
          <MyText
            numberOfLines={1}
            style={{fontFamily: Fonts.Medium}}
            text={activeJob.origin_address.address}
          />
          <MyText
            style={{
              fontSize: 10,
              lineHeight: 12,
              marginTop: 12,
              color: config.headingColor,
            }}
            text={strings.pick_up_Location}
          />
          <MyText
            style={{fontFamily: Fonts.Medium}}
            numberOfLines={1}
            text={activeJob.destination_address.address}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 6,
            alignSelf: 'flex-end',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(chatsNav.messages, {
                item: activeJob,
              })
            }>
            <MyImage
              source={config.images.messageIcon}
              style={{
                width: 30,
                marginLeft: 12,
                height: 30,
                borderRadius: 360,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(jobsNav.jobs, {
                userData: activeJob,
              });
            }}>
            <MyImage
              source={config.images.locationIcon}
              style={{
                width: 30,
                height: 30,
                marginLeft: 12,
                borderRadius: 360,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    elevation: 2,
    backgroundColor: '#fff',
    marginTop: 4,
    borderRadius: 12,
    padding: 12,
  },
  topRow: {
    flexDirection: 'row',
  },
  topRight: {
    paddingHorizontal: 10,
    flex: 1,
  },
  orderNumberActiveContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderNumber: {
    fontFamily: Fonts.Semi_Bold,
  },
  customerName: {
    fontFamily: Fonts.Medium,
    width: '80%',
    fontSize: 13,
  },
  customer: {
    fontFamily: Fonts.Regular,
    fontSize: 9,
    lineHeight: 12,
    color: '#ACACAC',
    paddingTop: 0,
    marginTop: 0,
  },
  secondRow: {
    flexDirection: 'row',
  },
  pick_up_drop_off: {
    flex: 2,
  },
  chat_location: {
    flex: 1,
  },
});

export default ActiveJob;
