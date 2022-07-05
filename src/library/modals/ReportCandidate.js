import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import R from 'resources/R';
import Modal from 'react-native-modal';
/*
 * This function is used to create report candidate modal
 * @author Didijobs <rgy713>
 */
const options = [
  'Scam',
  'Abusive or Harmful content',
  'Inappropriate language',
  'Prejudice, Stereotypes,Slurs',
  'No intent to work',
  'Insensitive content or inappropriate imagery',
];
const ReportCandidate = ({isVisible, onModalClose}) => {
  const [selected, setSelected] = useState(null);
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
          <Text style={styles.modalHeaderText}>Report</Text>
          <View style={styles.reportItems}>
            {options.map((item, index) => {
              return (
                <TouchableOpacity
                  key={`${index}`}
                  style={styles.rowContainer}
                  onPress={() => setSelected(index)}>
                  <View
                    style={
                      index === selected ? styles.textRowSel : styles.textRow
                    }>
                    <Text
                      style={
                        index === selected
                          ? styles.reportTextSel
                          : styles.reportText
                      }>
                      {item}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ReportCandidate;

const styles = StyleSheet.create({
  modalHeader: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 999,
  },
  textRow: {
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  textRowSel: {
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    backgroundColor: R.colors.SECONDARY,
    borderRadius: 30,
    marginVertical: 5,
  },
  rowContainer: {
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  btncontainer: {},
  modalHeaderText: {
    fontSize: 20,
    paddingVertical: 20,
    color: R.colors.PRIMARI_DARK,
    textAlign: 'center',
    fontFamily: R.fonts.Bold,
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
  modal: {},
  //   item: {flex: 1, flexDirection: 'column'},
  reportText: {
    textAlign: 'center',
    fontSize: R.fontSize.S,
    color: R.colors.PRIMARI_DARK,
    paddingVertical: 10,
  },
  reportTextSel: {
    textAlign: 'center',
    fontSize: R.fontSize.S,
    color: R.colors.WHITE,
    paddingVertical: 10,
  },
});
