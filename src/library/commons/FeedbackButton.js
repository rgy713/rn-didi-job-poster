import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Modal from 'react-native-modal';
import Button from 'library/commons/Button';
import R from 'resources/R';
import BTextInput from 'library/commons/BTextInput';
/*
 * This function is used to create our app Feedback button
 * @author Didijobs <rgy713>
 */
const FeedbackButton = () => {
  const [isModal, setModalVisible] = useState(false);
  return (
    <>
      <Pressable
        style={styles.fixedBtn}
        onPress={e => {
          setModalVisible(true);
        }}>
        <View style={styles.feedBackButton}>
          <Text style={styles.feedBackText}>F</Text>
        </View>
      </Pressable>
      <Modal
        isVisible={isModal}
        swipeDirection="down"
        onSwipeComplete={e => {
          setModalVisible(false);
        }}
        onBackdropPress={e => {
          setModalVisible(false);
        }}
        style={styles.modalContainer}>
        <View style={styles.modalInnerContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderText}>Feedback</Text>
          </View>
          <View style={styles.modalBody}>
            <BTextInput
              placeholder={
                'Give some feedback, it is very helpful, and we appreciate it!'
              }
              containerStyle={styles.inputContainer}
              multiline={true}
            />
          </View>
          <View style={styles.modalFooter}>
            <Button
              title={'Submit'}
              onPress={e => {
                setModalVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};
export default FeedbackButton;
const styles = StyleSheet.create({
  feedBackButton: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalHeaderText: {
    textAlign: 'center',
    fontFamily: R.fonts.Bold,
    fontSize: R.fontSize.L,
  },
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  modalInnerContainer: {
    backgroundColor: 'white',
    minHeight: 300,
    borderRadius: 20,
    justifyContent: 'space-between',
    padding: 20,
  },
  feedBackText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: R.fonts.Medium,
    fontSize: R.fontSize.XXXL,
    alignSelf: 'center',
  },
  fixedBtn: {
    zIndex: 9999,
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 110,
    right: 20,
    backgroundColor: '#000',
    borderRadius: 120,
  },
  inputContainer: {
    borderRadius: 20,
    height: 200,
    marginVertical: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
