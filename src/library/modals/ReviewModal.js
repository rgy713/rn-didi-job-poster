import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import Modal from 'react-native-modal';
import R from 'resources/R';
import Rating from 'library/commons/Rating';
import {useSelector, useDispatch} from 'react-redux';
/*
 * This function is used to create Review modal
 * @author Didijobs <rgy713>
 */
const ReviewModal = ({isVisible, onModalClose}) => {
  const res = useSelector(state => state?.user);
  const [options] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const user = res.user;
  let {firstJobCreatedDate} = user;
  const postingSince = firstJobCreatedDate.slice(0,10)
  console.log(user, 'ReviewModal');
  return (
    <Modal
      isVisible={isVisible}
      swipeDirection="down"
      onSwipeComplete={e => {
        onModalClose(false);
      }}
      onBackdropPress={e => {
        onModalClose(false);
      }}
      style={styles.modalContainer}>
      <View style={styles.modalInnerContainer}>
        <View style={styles.backgroundColor}>
          <Text style={styles.modalHeaderText}>Review</Text>
          <View>
            <View style={styles.userName}>
              <Text style={styles.nametext}>Candidate:</Text>
              <Text
                style={
                  styles.nametextValue
                }>{`${user.firstName} ${user.lastName}`}</Text>
            </View>
            <View style={styles.userName}>
              <Text style={styles.nametext}>Posting Since:</Text>
              <Text style={styles.nametextValue}>
                {postingSince}
              </Text>
            </View>
            <View style={styles.userName}>
              <Text style={styles.nametext}>Positive Feedback total:</Text>
              <Text style={styles.nametextValue}>98.5%</Text>
            </View>
          </View>
          <TouchableWithoutFeedback>
            <View style={styles.listContainer}>
              <FlatList
                data={options}
                scrollEnabled={true}
                contentContainerStyle={{height: '100%'}}
                renderItem={({item, index}) => <Rating />}
                keyExtractor={item => `${item}`}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Modal>
  );
};

export default ReviewModal;

const styles = StyleSheet.create({
  modalHeaderText: {
    color: R.colors.PRIMARI_DARK,
    textAlign: 'center',
    fontFamily: R.fonts.Bold,
    fontSize: R.fontSize.L,
    paddingVertical: 10,
    marginBottom: 10,
  },
  backgroundColor: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 3,
    elevation: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  modalInnerContainer: {
    backgroundColor: 'white',
    minHeight: 450,
    borderRadius: 20,
    justifyContent: 'space-between',
    padding: 10,
  },
  reportText: {
    textAlign: 'center',
    fontSize: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#E2E8F0',
    color: R.colors.PRIMARI_DARK,
    paddingVertical: 10,
  },
  userName: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  nametext: {
    flex: 1,
    fontSize: 14,
    color: '#475569',
  },
  nametextValue: {
    flex: 1,
    fontSize: 14,
    color: R.colors.PRIMARI_DARK,
    fontFamily: R.fonts.Bold,
  },
  reportItems: {},
  listContainer: {height: '60%'},
});
