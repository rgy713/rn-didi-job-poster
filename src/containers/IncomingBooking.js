import {useEffect, useState} from 'react';
import React from 'react';
import {ModalComp} from '../components';
import JobCard from './jobsContainer/JobCard';
import {pusher} from '..';
import {useDispatch, useSelector} from 'react-redux';
import {getJobsAction} from '../redux/actions/jobsAction';
const IncomingBooking = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [jobData, setJobData] = useState('');
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  const channel = pusher.subscribe(`job.${user.id}`);
  const PopChannel = pusher.subscribe(`acceptJob.${jobData.id}`);
  useEffect(() => {
    channel.bind('App\\Events\\JobEvent', data => {
      dispatch(getJobsAction());
      setJobData(data.message);
      setModalVisible(true);
    });
  }, [channel]);
  useEffect(() => {
    PopChannel.bind('App\\Events\\AcceptJobEvent', data => {
      console.warn('id', data.sent_to);
      if (data.sent_to == jobData.id) {
        setModalVisible(false);
      }
    });
  }, [PopChannel]);
  return (
    <ModalComp
      // closeBtnDisabled
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}>
      <JobCard
        style={{
          marginTop: 0,
          elevation: 0,
          paddingTop: 0,
          paddingBottom: 24,
          width: '100%',
        }}
        incoming
        orderId={jobData.code}
        jobId={jobData.id}
        name={jobData.delivery_f_name + ' ' + jobData.delivery_l_name}
        contact_name_origin={jobData?.origin_address?.address}
        contact_name_destination={jobData?.destination_address?.address}
        profile_picture={jobData?.customer?.profile_picture}
        setModalVisible={setModalVisible}
        navigation={navigation}
        route={route}
      />
    </ModalComp>
  );
};
export default IncomingBooking;
