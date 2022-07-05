/* eslint-disable react-native/no-inline-styles */
import React, {forwardRef, useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  PlusIcon,
  SendIcon,
} from '../../assets';
import {MyImage, MyInput, MyNativeInput, Toast} from '../../components';
import config from '../../config';
// import {sendMsgAction} from '../../redux/actions/chatsAction';
// import {sendMsgAction} from '../../redux/actions/chatsActions';
const iconStyle = {
  width: 30,
  height: '100%',
  textAlign: 'center',
  position: 'absolute',
  right: 12,
  textAlignVertical: 'center',
};
export default forwardRef(
  (
    {navigation, setMsgArr, chat_id, receiver_id, usrId, profile_picture},
    ref,
  ) => {
    const [msg, setMsg] = useState('');
    const dispatch = useDispatch();
    const onPressAttachment = () => {};
    const onPressSend = () => {
      if (!msg) {
        Toast('Type Something');
      } else {
        // dispatch(
        //   sendMsgAction(
        //     chat_id,
        //     receiver_id,
        //     usrId,
        //     msg,
        //     setMsgArr,
        //     profile_picture,
        //   ),
        // );
        setMsg('');
      }
    };
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === 'ios' ? 70 : null}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 20,
        }}>
        <MyNativeInput
          ref={ref}
          onChangeText={v => {
            setMsg(v);
          }}
          value={msg}
          textStyle={{
            fontSize: 12,
          }}
          style={{
            borderWidth: 1,
            borderBottomWidth: 1,
            elevation: 0,
            borderColor: config.headingColor,
            marginTop: 0,
            height: '100%',
          }}
          placeholder={'Type your message here'}
          icon={
            <PlusIcon
              onPress={() => alert('attachment')}
              size={12}
              color={config.black}
              style={{
                marginLeft: 12,
              }}
            />
          }
          rightIcon={
            <SendIcon
              onPress={() => alert('send')}
              size={12}
              color={config.black}
              style={{
                marginRight: 12,
              }}
            />
          }
        />
        {/* 
      <TouchableOpacity
        onPress={onPressSend}
        style={{
          width: 40,
          borderRadius: 360,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: config.primaryColor,
        }}
        children={<AntDesign name={'send'} size={30} color={config.white} />}
      /> */}
      </KeyboardAvoidingView>
    );
  },
);
