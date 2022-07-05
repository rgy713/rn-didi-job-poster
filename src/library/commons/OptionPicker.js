import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import R from 'resources/R';
import Modal from 'react-native-modal';
/*
 * This function is used to create option picker
 * @author Didijobs <rgy713>
 */
const OptionPicker = ({title = 'select options', options, onValueChange}) => {
  const [isModal, setModalVisible] = useState(false);
  const [value, setValue] = useState(null);
  const handleValueChange = _value => {
    setValue(_value);
    onValueChange && onValueChange(_value);
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.row}
        onPress={() => setModalVisible(true)}>
        <Text style={[styles.title]}>{title}</Text>
        <View style={styles.skillText}>
          {value && <Text style={[styles.title]}>{value.label}</Text>}
          <Icon
            name={isModal ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
            size={30}
            color={'black'}
          />
        </View>
      </TouchableOpacity>
      <Modal
        isVisible={isModal}
        swipeDirection="down"
        backdropOpacity={0.2}
        onSwipeComplete={e => {
          setModalVisible(false);
        }}
        onBackdropPress={e => {
          setModalVisible(false);
        }}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        style={styles.modalContainer}>
        <View style={styles.modalInnerContainer}>
          {/* <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderText}>{title}</Text>
          </View> */}
          <View style={styles.modalBody}>
            {options.map((item, index) => (
              <View key={`${index}`} style={styles.item}>
                <TouchableOpacity onPress={() => handleValueChange(item)}>
                  <Text style={styles.itemText}> {item.label}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default OptionPicker;
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  modalHeaderText: {
    textAlign: 'center',
    fontFamily: R.fonts.Bold,
    fontSize: R.fontSize.L,
  },
  modalContainer: {
    justifyContent: 'center',
    margin: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  modalInnerContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'space-between',
    padding: 20,
  },
  itemText: {
    fontFamily: R.fonts.Medium,
    fontSize: R.fontSize.S,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  item: {},
  skillText: {flexDirection: 'row', alignItems: 'center'},
  button: {
    width: '100%',
    height: 54,
    alignItems: 'center',
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 12,
  },
  title: {
    fontSize: R.fontSize.S,
    color: R.colors.DARKGRAY,
    fontFamily: R.fonts.Bold,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
