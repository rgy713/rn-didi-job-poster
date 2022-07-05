import {View} from 'react-native';
import React from 'react';
import ViewDetails from '../ViewDetails';
import {MyImage} from '../../components';
import MyText from '../../components/MyText';
import config, {Fonts} from '../../config';
import strings from '../../strings';
import {useSelector} from 'react-redux';
import Navigation from '../../navigator';
import {jobsNav} from '../../navigator/routeName';
import {imageUrl} from '../../utils';
import {ImageBackground} from 'react-native';
import EmptyData from '../../components/emptyData';

const Home = ({navigation}) => {
  const {user} = useSelector(state => state.auth);
  const {jobs} = useSelector(state => state.jobReducers);
  const {analyticsData} = useSelector(state => state.analyticsReducers);
  const max5Arr = jobs.filter((val, index) => index < 4);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '95%',
        marginTop: 12,
        justifyContent: 'space-between',
      }}>
      {[strings.MyEarning, strings.jobsforToday].map((item, index) => (
        <View
          key={index.toString()}
          style={{
            width: '50%',
          }}>
          <MyText
            style={{
              fontSize: 14,
            }}
            text={item}
          />
          <View
            style={{
              width: '90%',
              marginTop: 4,
              height: 120,
              elevation: 2,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
            }}>
            {index == 0 ? (
              <MyText
                numberOfLines={1}
                text={'$' + analyticsData?.total_earning}
                style={{
                  color: config.textPrimaryColor,
                  fontFamily: Fonts.Bold,
                  fontSize: 23,
                }}
              />
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                  height: 45,
                }}>
                {max5Arr.length ? (
                  max5Arr.map((item, index, arr) => (
                    <ImageBackground
                      key={index.toString()}
                      style={{
                        borderRadius: 360,
                        overflow: 'hidden',
                        width: 35,
                        top: 0,
                        left: 12,
                        position: 'absolute',
                        marginLeft: 17 * index,
                        height: 35,
                      }}
                      source={config.images.profilePlaceholder}>
                      <MyImage
                        key={index.toString()}
                        source={{
                          uri: item?.customer?.profile_picture?.includes('http')
                            ? item?.customer?.profile_picture
                            : imageUrl + item?.customer?.profile_picture,
                        }}
                      />
                    </ImageBackground>
                  ))
                ) : (
                  <EmptyData value={'No Jobs Found'} />
                )}
                {jobs.length < 5 ? null : (
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      justifyContent: 'center',
                      position: 'absolute',
                      top: 0,
                      right: 12,
                      alignItems: 'center',
                      borderRadius: 360,
                      backgroundColor: config.primaryColor,
                    }}>
                    <MyText
                      style={{
                        color: config.white,
                        fontFamily: Fonts.Semi_Bold,
                        fontSize: 11,
                        lineHeight: 12,
                      }}
                      text={jobs.length + '+'}
                    />
                    <MyText
                      style={{
                        color: config.white,
                        lineHeight: 12,
                        fontFamily: Fonts.Semi_Bold,
                        fontSize: 11,
                      }}
                      text={'Jobs'}
                    />
                  </View>
                )}
              </View>
            )}
            <ViewDetails
              onPress={() => {
                index == 1
                  ? navigation.navigate('JobsStack')
                  : navigation.navigate('EarningStack');
              }}
            />
          </View>
        </View>
      ))}
    </View>
  );
};
export default Home;
