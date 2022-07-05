import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';
import ScreensNameEnum from '../../constants/ScreensNameEnum';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import R from 'resources/R';
import FeedbackButton from 'library/commons/FeedbackButton';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
import BottomBar from 'library/commons/BottomBar';
import {getCurrentJob} from '../../store/actions/jobActions';
import {useSelector, useDispatch} from 'react-redux';
/*
 * This Component is the Home screen where we click on a button to post a job
 * @author Didijobs <rgy713>
 */
const JobHomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const currentJob = useSelector(state => state?.job.currentJob);

  useEffect(() => {
    dispatch(getCurrentJob());
  }, [dispatch]);

  console.log(currentJob, 'Helllooooooooo');
  function handleAddJob() {
    navigation.navigate(ScreensNameEnum.POST_STACK, {isNewJob: true});
    // navigation.navigate(ScreensNameEnum.MY_JOBS_SCREEN, {isNewJob: false});
  }

  return (
    <ScreenWrapper header={false}>
      <TouchableWithoutFeedback onPress={handleAddJob}>
        <View style={styles.container}>
          <Text style={styles.headerText}> Post a job </Text>
          <View style={styles.middleContainer}>
            <Pressable onPress={handleAddJob}>
              <Icon
                name="add"
                size={100}
                color="#000000"
                style={styles.iconStyle}
              />
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.bottomContainer}>
        <BottomBar title={'50 workers in your area'} />
      </View>

      <FeedbackButton />
    </ScreenWrapper>
  );
};
export default JobHomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    color: R.colors.PRIMARI_DARK,
    fontSize: R.fontSize.XXXL,
    flex: 1,
    textAlign: 'center',
    paddingVertical: 20,
    fontFamily: R.fonts.Bold,
  },
  middleContainer: {flex: 1},
  bottomContainer: {
    backgroundColor: '#0F172A',
    height: 100,
  },
  iconStyle: {
    alignSelf: 'center',
  },
});
