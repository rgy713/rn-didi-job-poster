import React from 'react';
import {AntDesign} from '../assets';
import {
  KeyboardAvoidingView,
  Modal,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';
import config, {Fonts} from '../config';
import {MyText} from '.';
const ModalComp = ({
  modalVisible,
  setModalVisible,
  closeBtnDisabled,
  styles,
  children,
  mainStyle,
  heading,
}) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={setModalVisible}>
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        ...mainStyle,
      }}>
      <View
        style={{
          width: '95%',
          maxHeight: config.window_height * 0.8,
          backgroundColor: config.white,
          borderRadius: 12,
          paddingBottom: 12,
          alignItems: 'center',
          ...styles,
        }}>
        {closeBtnDisabled ? null : (
          <TouchableOpacity
            style={{
              width: 35,
              marginRight: 6,
              marginTop: 4,
              overflow: 'hidden',
              height: 35,
              alignSelf: 'flex-end',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={setModalVisible}>
            <AntDesign color={config.red} name={'closesquare'} size={24} />
          </TouchableOpacity>
        )}
        <MyText
          style={{
            fontSize: 17,
            fontFamily: Fonts.Semi_Bold,
          }}
          text={heading}
        />
        {children}
      </View>
    </KeyboardAvoidingView>
  </Modal>
);
export default ModalComp;
