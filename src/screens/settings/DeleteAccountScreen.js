import React, {useState} from 'react';
import {View} from 'react-native';
import {MailIcon, PhoneIcon} from '../../assets';
import {
  ModalComp,
  MyBtn,
  MyNativeInput,
  MyText,
  SafeScrollView,
  Toast,
} from '../../components';
import config, {Fonts} from '../../config';
import strings from '../../strings';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
const options = [
  strings.byDeleting,
  strings.deletingAllInfo,
  strings.deletingAllHistory,
  strings.deletingAllOpp,
];
const DeleteAccountScreen = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [fields, setFields] = useState({
    phone: 0,
    email: '',
  });
  const onDeletePress = () => {
    if (!fields.phone) {
      Toast('Enter the Phone Number associated with this account');
    } else if (!fields.email) {
      Toast('Enter the Email associated with this account');
    } else {
      setModalVisible2(true);
    }
  };
  const onChangeText = index => value => {
    setFields({
      phone: index == 0 ? value : fields.phone,
      email: index == 1 ? value : fields.email,
    });
  };

  return (
    <ScreenWrapper>
      <SafeScrollView
        FooterComponent={
          <MyBtn
            onPress={onDeletePress}
            style={{
              bottom: 12,
              backgroundColor: config.red,
              alignSelf: 'center',
              width: '90%',
            }}
            text={strings.deleteAccount}
          />
        }>
        <MyText
          style={{
            fontSize: 22,
            marginTop: 12,
            fontFamily: Fonts.Medium,
          }}
          text={route.name}
        />
        <View style={{width: '80%'}}>
          {options.map((item, index) => (
            <MyText
              key={index.toString()}
              style={{
                marginTop: [0, 1].includes(index) ? 24 : 4,
                color: index == 0 ? config.red : config.black,
                fontSize: 14,
                fontFamily: Fonts.Bold,
              }}
              text={item}
            />
          ))}
        </View>
        {[strings.phoneNumber, strings.email].map((item, index) => (
          <MyNativeInput
            key={index.toString()}
            onChangeText={onChangeText(index)}
            value={index == 0 ? fields.phone : fields.email}
            keyboardType={index == 0 ? 'numeric' : 'email-address'}
            style={{marginTop: index == 0 ? 24 : 12, width: '90%'}}
            rightIcon={
              index == 0 ? (
                <PhoneIcon
                  style={{position: 'absolute', right: 10}}
                  size={22}
                  color={config.black}
                />
              ) : (
                <MailIcon
                  style={{position: 'absolute', right: 10}}
                  size={22}
                  color={config.black}
                />
              )
            }
            headingStyle={{fontSize: 14}}
            placeholder={item}
          />
        ))}
        <ModalComp
          mainStyle={{
            justifyContent: 'flex-end',
          }}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}>
          <MyText
            style={{fontSize: 17, fontFamily: Fonts.Bold}}
            text={'To bad you couldn’t stay!'}
          />
          <MyNativeInput
            multiline={true}
            style={{
              height: 240,
              justifyContent: 'flex-start',
              elevation: 0,
              borderWidth: 2,
              borderBottomWidth: 2,
              borderColor: config.primaryColor,
              width: '90%',
            }}
            textStyle={{
              flex: 0,
              height: 40,
              fontSize: 12,
            }}
            placeholder={'Give some feedback, on where we can improve'}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 12,
              width: '100%',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <MyBtn
              onPress={() => setModalVisible(false)}
              text={'Skip'}
              textStyle={{
                color: config.black,
              }}
              style={{width: '40%', backgroundColor: config.backgroundColor}}
            />
            <MyBtn
              onPress={() => setModalVisible(false)}
              text={'Submit'}
              style={{width: '40%'}}
            />
          </View>
        </ModalComp>
        <ModalComp
          closeBtnDisabled
          mainStyle={{
            justifyContent: 'flex-end',
          }}
          modalVisible={modalVisible2}
          setModalVisible={setModalVisible2}>
          {[
            'Are you sure you want to delete your account?',
            'This action is cannot be undone!',
            ' If you want to come back again',
            'your info will not be recovered.',
          ].map((item, index) => (
            <MyText
              key={index.toString()}
              style={{
                fontSize: 13,
                fontFamily: [3, 1].includes(index) ? Fonts.Bold : Fonts.Medium,
                width: '80%',
                color: index == 1 ? config.red : config.black,
                marginBottom: 6,
                textAlign: 'center',
              }}
              text={item}
            />
          ))}

          <View
            style={{
              flexDirection: 'row',
              marginTop: 12,
              width: '100%',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <MyBtn
              onPress={() => setModalVisible2(false)}
              text={strings.cancel}
              textStyle={{
                color: config.white,
              }}
              style={{width: '40%', backgroundColor: config.red}}
            />
            <MyBtn
              onPress={() => {
                setModalVisible2(false);
                setModalVisible(true);
              }}
              text={strings.confirm}
              textStyle={{
                color: config.black,
              }}
              style={{width: '40%', backgroundColor: config.backgroundColor}}
            />
          </View>
        </ModalComp>
      </SafeScrollView>
    </ScreenWrapper>
  );
};

export default DeleteAccountScreen;
