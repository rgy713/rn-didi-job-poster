import React, {useState} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {StarIcon} from '../../assets';
import MyText from '../../components/MyText';
import config, {Fonts} from '../../config';
import strings from '../../strings';
const Render = ({navigation, route}) => {
  const {user} = useSelector(state => state.auth);
  const {analyticsData} = useSelector(state => state.analyticsReducers);
  return (
    <View
      style={{
        flexDirection: 'row',
        top: -30,
        alignItems: 'center',
        width: '90%',
      }}>
      {[strings.earnings, strings.ratings, strings.deliveries].map(
        (item, index) => (
          <View
            style={{
              width: '33%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              paddingVertical: 12,
              borderTopLeftRadius: index == 0 ? 12 : 0,
              borderTopRightRadius: index == 2 ? 12 : 0,
              borderBottomLeftRadius: index == 0 ? 12 : 0,
              borderBottomRightRadius: index == 2 ? 12 : 0,
              elevation: 2,
            }}
            key={index.toString()}>
            <MyText
              style={{
                color: config.headingColor,
              }}
              text={item}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                borderRightWidth: index == 2 ? 0 : 1,
                borderColor: config.headingColor,
              }}>
              {index == 1 ? (
                <StarIcon
                  style={{top: -2, marginRight: 4}}
                  color={config.primaryColor}
                  size={20}
                />
              ) : null}

              <MyText
                style={{
                  fontSize: 17,
                  color: config.black,
                  fontFamily: Fonts.Semi_Bold,
                  textAlign: 'center',
                }}
                text={
                  index == 0
                    ? '$' + analyticsData?.total_earning
                    : index == 1
                    ? user.driver_statics.average_rating
                    : user.driver_statics.total_completed_jobs
                }
              />
            </View>
          </View>
        ),
      )}
    </View>
  );
};

export default Render;
