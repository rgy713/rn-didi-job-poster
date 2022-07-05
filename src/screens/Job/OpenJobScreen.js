import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Pressable, Image} from 'react-native';
import ScreensNameEnum from '../../constants/ScreensNameEnum';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from 'library/commons/Button';
import R from 'resources/R';
import Images from 'library/commons/Images';
import FeedbackButton from 'library/commons/FeedbackButton';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
import BottomBar from 'library/commons/BottomBar';
/*
 * This function Component is used to render open job screen
 * @author Didijobs <rgy713>
 */
const OpenJobScreen = () => {
  const navigation = useNavigation();
  const [isAccepted, setAccepted] = useState(true);
  let star = [1, 2, 3, 4, 5];

  return (
    <ScreenWrapper header={false}>
      <View style={styles.first1}>
        <View style={styles.containerJob}>
          <Text style={styles.headerText}>Open job</Text>
          <View style={styles.buttonContainer}>
            <View style={styles.btn}>
              <Button
                title={'Cancel job'}
                backgroundColor={R.colors.PRIMARY_LIGHT}
                textColor={R.colors.PRIMARI_DARK}
                buttonStyle={{paddingVertical: 10}}
                onPress={() => {
                  navigation.reset({
                    index: 0,
                    routes: [{name: ScreensNameEnum.JOB_HOME_SCREEN}],
                  });
                }}
              />
            </View>
            <View style={styles.btn}>
              <Button
                title={'Change Job Location'}
                backgroundColor={R.colors.PRIMARY_LIGHT}
                textColor={R.colors.PRIMARI_DARK}
                buttonStyle={{paddingVertical: 10}}
                onPress={() =>
                  navigation.navigate(ScreensNameEnum.EDIT_POST_JOB, {
                    isNewJob: false,
                  })
                }
              />
            </View>
          </View>
          <View style={styles.imageContainer}></View>
          <View style={styles.ratingContainer}>
            <View style={styles.priceContainer}>
              <Pressable
                onPress={() =>
                  navigation.navigate(ScreensNameEnum.PAYMENT_OVERVIEW)
                }>
                <Text style={styles.price}>$150</Text>
                <Text style={styles.time}>30 minutes ago</Text>
              </Pressable>
            </View>
            <View style={styles.rating}>
              <Text style={styles.name}>{'Seddie Jeq'}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {star.map((item, index) => {
                  return <Icon name="star" color="#FFAA00" size={15} />;
                })}
              </View>
              <Text style={styles.userRating}>4.84 stars</Text>
              <Text style={styles.reviewCount}> 7 reviews</Text>
            </View>
            <View style={styles.flagConatiner}>
              <Icon name="flag" size={16} color="grey" style={styles.icon} />
            </View>
          </View>
          <View style={styles.messageContainer}>
            <View style={styles.btnContainer}>
              <Button title={'Message'} buttonStyle={styles.msgBtn} />
            </View>
            <Text style={styles.skillText}>
              Required Skills:<Text style={{color: '#1730B1'}}>Roofer</Text>
            </Text>
            <Text style={styles.requiredTools}>Hammer Required</Text>
          </View>
          <View style={styles.img}>
            <Images />
          </View>
          <View style={styles.lastContainerStyle}>
            <Text style={styles.detail}>
              Need my pc removed and for my new one to be installed - 1
            </Text>
            <Text style={styles.timeText}>1 hour Job</Text>
            <Text style={styles.timeText}>10 miles away</Text>
          </View>
          <View style={styles.final}>
            <FeedbackButton />
            <View style={styles.finalButton}>
              <Button
                title={'Pay Total'}
                buttonStyle={{backgroundColor: '#2ECC71'}}
                onPress={() =>
                  navigation.navigate(ScreensNameEnum.VIEW_CANDIDATE)
                }
              />
            </View>
          </View>
          <View style={styles.borromContainer}>
            <BottomBar title={'Arrived'} />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};
export default OpenJobScreen;

const styles = StyleSheet.create({
  first1: {flex: 1},
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
    marginTop: 100,
    fontWeight: 'bold',
  },
  middleContainer: {flex: 1},
  bottomContainer: {
    backgroundColor: '#0F172A',
    height: 100,
  },
  TopBarText: {
    color: '#FFFFFF',
    fontSize: 20,
    marginVertical: 15,
    textAlign: 'center',
    paddingTop: 15,
  },
  iconStyle: {
    alignSelf: 'center',
  },
  containerJob: {
    flex: 1,
    flexDirection: 'column',
  },
  headerText: {
    textAlign: 'center',
    fontSize: R.fontSize.XL,
    fontFamily: R.fonts.Bold,
    color: R.colors.SECONDARY,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  btn: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,
  },
  imageContainer: {
    alignSelf: 'center',
    borderWidth: 1,
    height: 100,
    width: 100,
    top: 10,
    borderRadius: 120,
  },
  ratingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: 15,
  },
  priceContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  price: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  time: {
    color: '#000000',
    fontSize: 16,
  },
  rating: {
    flexDirection: 'column',
  },
  name: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userRating: {
    color: '#000000',
    textAlign: 'center',
  },
  reviewCount: {
    color: '#3366FF',
    textAlign: 'center',
  },
  flagConatiner: {
    flex: 1,
  },
  icon: {alignSelf: 'center'},
  messageContainer: {
    flex: 1,
    flexDirection: 'column',
    top: 20,
  },
  skillText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    // margin: 10,
  },
  requiredTools: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  msgBtn: {
    backgroundColor: '#118CFE',
  },
  btnContainer: {
    marginHorizontal: 140,
    height: 60,
  },
  img: {
    top: 40,
    flex: 1,
    margin: 10,
  },
  detail: {
    color: '#000000',
    fontSize: 14,
    textAlign: 'center',
  },
  timeText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
  lastContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    top: 40,
  },
  final: {
    flexDirection: 'column',
  },
  feedBackButton: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderRadius: 120,
    backgroundColor: '#000000',
    margin: 10,
    alignSelf: 'flex-end',
    bottom: 20,
  },
  feedBackText: {
    flex: 1,
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  finalButton: {
    marginHorizontal: 20,
    bottom: 20,
  },
  candidatesCount: {
    width: '100%',
    backgroundColor: '#0F172A',
    height: 80,
  },
  candidatesCountText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    margin: 20,
  },
  borromContainer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
