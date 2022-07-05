import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import R from 'resources/R';
import Modal from 'react-native-modal';
/*
 * This function is used to create option picker
 * @author Didijobs <rgy713>
 */
const OptionPickerChat = ({
  isVisible,
  onModalClose,
  onValueChange,
  options,
}) => {
  const [value, setValue] = useState(null);
  const handleValueChange = _value => {
    setValue(_value);
    onValueChange && onValueChange(_value);
    onModalClose(false);
  };
  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.2}
      onSwipeComplete={e => {
        onModalClose(false);
      }}
      onBackdropPress={e => {
        onModalClose(false);
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
                <View style={styles.itemInner}>
                  <Text style={styles.itemText}> {item.label}</Text>
                  {item.icon ? (
                    <Icon
                      name={item.icon}
                      color={item.color || 'black'}
                      size={25}
                    />
                  ) : null}
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </Modal>
  );
};
export default OptionPickerChat;
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalBody: {
    width: '50%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
  },
  itemText: {
    fontFamily: R.fonts.Medium,
    fontSize: R.fontSize.S,
    paddingVertical: 10,
    // paddingHorizontal: 10,
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
  itemInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
