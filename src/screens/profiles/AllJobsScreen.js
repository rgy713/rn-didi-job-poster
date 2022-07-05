import moment from 'moment';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
// import {JobCard, PersonalCard} from '../../containers';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
import {useSelector, useDispatch} from 'react-redux';
import {getMyJobs} from '../../store/actions/jobActions';
import {selectAllJob, selectJobIds} from '../../store/slices/job/job.slice';
import ScreensNameEnum from '../../constants/ScreensNameEnum';
import R from 'resources/R';
import {useNavigation} from '@react-navigation/native';
const AllJobsScreen = ({props}) => {
  const navigation = useNavigation();
  const user = useSelector(state => state?.user.user);
  const dispatch = useDispatch();
  dispatch(getMyJobs(user?.id));
  const jobs = useSelector(state => selectJobIds(state));
  console.log(jobs, 'hello');
  const [remember, setRemember] = useState(false);

  return (
    <ScreenWrapper>
      <View style={{paddingHorizontal: 20}}>
        <Pressable
          onPress={() =>
            navigation.navigate(ScreensNameEnum.JOB_HISTORY_SCREEN)
          }>
          <Text style={styles.heading}>My Jobs</Text>
        </Pressable>

        <View style={styles.list}></View>
      </View>
    </ScreenWrapper>
  );
};
const JobCard = (item, index) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.date}> </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    color: R.colors.PRIMARI_DARK,
    marginTop: 12,
    textAlign: 'center',
  },
  list: {
    flex: 1,
    flexDirection: 'column',
  },
  cardContainer: {
    flexDirection: 'column',
  },
});
export default AllJobsScreen;
