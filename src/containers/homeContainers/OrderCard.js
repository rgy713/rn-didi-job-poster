import moment from 'moment';
import {View} from 'react-native';
import React from 'react';
import {ImageBackground, Pressable, StyleSheet} from 'react-native';
import {StarIcon} from '../../assets';
import {MyBtn, MyImage} from '../../components';
import MyText from '../../components/MyText';
import config, {Fonts} from '../../config';
import strings from '../../strings';
import {imageUrl} from '../../utils';
import ViewDetails from '../ViewDetails';
const ActiveJob = ({
  activeJob,
  history,
  onCardPress,
  style,
  completeJob,
  title,
  description,
  profile_picture,
  onPressChat,
  onPressStart,
  id,
  created_at,
  onPressDetail,
  ratings,
  earnings,
}) => {
  return (
    <Pressable onPress={onCardPress} style={[styles.container, style]}>
      <View style={styles.orderNumberActiveContainer}>
        <ImageBackground
          source={config.images.profilePlaceholder}
          style={{
            width: 50,
            overflow: 'hidden',
            height: 50,
            borderRadius: 360,
          }}>
          <MyImage
            resizeMode={'contain'}
            source={{
              uri: profile_picture?.includes('http')
                ? profile_picture
                : imageUrl + profile_picture,
            }}
          />
        </ImageBackground>
        <View style={styles.topRight}>
          <MyText text={strings.order(id)} style={styles.orderNumber} />
          <MyText text={title} style={styles.customerName} fontSize={12} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MyText text={description} style={styles.customer} />
            {history ? (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 12,
                  height: 20,
                  justifyContent: 'center',
                }}>
                <StarIcon color={config.primaryColor} size={12} />
                <MyText
                  style={{
                    top: 1,
                    marginLeft: 4,
                    fontSize: 11,
                    fontFamily: Fonts.Medium,
                    color: config.black,
                  }}
                  text={ratings || 'N/A'}
                />
              </View>
            ) : null}
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          height: '100%',
        }}>
        {activeJob ? (
          <MyBtn
            onPress={onPressChat}
            secondary
            text={strings.chat}
            textStyle={{fontSize: 11}}
            style={{
              width: 80,
              borderWidth: 1,
              borderColor: config.primaryColor,
              marginTop: 0,
              height: 30,
            }}
          />
        ) : (
          <MyText
            style={{fontSize: 10, color: config.headingColor}}
            text={moment(created_at).fromNow()}
          />
        )}
        {activeJob ? (
          <MyBtn
            onPress={onPressStart}
            textStyle={{fontSize: 10}}
            text={strings.viewDetails}
            style={{
              width: 80,
              height: 30,
              marginTop: 4,
            }}
          />
        ) : completeJob ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: 20,
              justifyContent: 'center',
            }}>
            <StarIcon color={config.primaryColor} size={14} />
            <MyText
              style={{
                top: 1,
                marginLeft: 4,
                fontSize: 13,
                fontFamily: Fonts.Medium,
                color: config.black,
              }}
              text={ratings || 'N/A'}
            />
          </View>
        ) : history ? (
          <MyText
            style={{
              fontSize: 17,
              color: config.black,
              fontFamily: Fonts.Semi_Bold,
            }}
            text={earnings + '$'}
          />
        ) : (
          <ViewDetails
            onPress={onPressDetail}
            style={{
              marginTop: 0,
            }}
          />
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: config.window_width * 0.9,
    elevation: 2,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    borderRadius: 12,
    padding: 12,
    height: 80,
  },
  topRow: {
    flexDirection: 'row',
  },
  topRight: {
    marginLeft: 8,
  },
  orderNumberActiveContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  orderNumber: {
    fontFamily: Fonts.Semi_Bold,
    color: config.black,
    lineHeight: 17,
  },
  customerName: {
    fontFamily: Fonts.Medium,
    color: config.black,
    lineHeight: 17,
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
