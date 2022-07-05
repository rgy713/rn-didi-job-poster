/* eslint-disable react-native/no-inline-styles */
import moment from 'moment';
import React, {useState} from 'react';
import {
  Pressable,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {
  Feather,
} from '../../assets';
import {ModalComp, MyBtn, MyText, SafeSimpleView} from '../../components';
import EmptyData from '../../components/emptyData';
import config, {Fonts} from '../../config';
import {routeName} from '../../navigator/routeName';
import OptionPickerChat from 'library/modals/OptionPickerChat';
import {ChatlistCard} from '../../containers';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
// import styles from './styles';
import strings from '../../strings';
const Chats = ({navigation, route}) => {
  const [isOptionModal, setOptionModal] = useState(false);
  const [chatlist, setChatList] = useState([
    'Larry One',
    'Larry Two',
    'Larry Three',
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const navTo = (screenName, params) => {
    setActiveIndex(null);
    navigation.navigate('MESSAGE_SCREEN', params);
  };
  const TapAndHoldVoid = index => () => {
    setActiveIndex(index);
  };

  const renderItem = ({item, index}) => (
    <View>
      <ChatlistCard
        onLongPress={() => {
          setOptionModal(true);
        }}
        key={index.toString()}
        avatar={config.images.man}
        title={'Larry Semo'}
        description={"You've to be here"}
        time={moment(new Date()).format('DD MMM YYYY')}
        onPress={() => navTo(routeName.messages)}
        index={index}
        styles={styles}
      />
    </View>
  );
  const deleteAction = index => {
    chatlist.splice(index, 1);
    setChatList([...chatlist]);
  };
  const renderHiddenItem = ({item, index}) => {
    return (
      <Pressable
        onPress={() => deleteAction(index)}
        style={[styles.backRightBtn, styles.backRightBtnRight]}>
        <Feather name={'trash-2'} size={25} color={config.red} />
      </Pressable>
    );
  };
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScreenWrapper header={false}>
      <SafeSimpleView>
        <ModalComp
          closeBtnDisabled
          mainStyle={{
            justifyContent: 'flex-end',
          }}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}>
          <MyText
            style={styles.txt}
            text={'Are you sure you want to delete this chat with Vic?'}
          />

          <View style={styles.chatsContainer}>
            <MyBtn
              onPress={() => setModalVisible(false)}
              text={strings.cancel}
              textStyle={{
                color: config.black,
              }}
              style={{width: '40%', backgroundColor: config.backgroundColor}}
            />
            <MyBtn
              onPress={() => {
                chatlist.splice(activeIndex, 1);
                setModalVisible(false);
              }}
              text={strings.confirm}
              textStyle={{
                color: config.white,
              }}
              style={{width: '40%', backgroundColor: config.primaryColor}}
            />
          </View>
        </ModalComp>
        <TouchableWithoutFeedback>
          <SwipeListView
            renderHiddenItem={renderHiddenItem}
            keyExtractor={(item, index) => index.toString()}
            style={{backgroundColor: config.white}}
            contentContainerStyle={{
              paddingBottom: 50,
            }}
            disableRightSwipe
            leftOpenValue={75}
            rightOpenValue={-75}
            previewRowKey={'0'}
            previewOpenValue={-40}
            previewOpenDelay={3000}
            ListEmptyComponent={<EmptyData value={'No Chatlist Found'} />}
            // stickyHeaderIndices={[0]}
            refreshing={isLoading}
            ListHeaderComponent={
              <MyText style={styles.txt1} text={route.name} />
            }
            // onRefresh={onRefresh}
            data={chatlist}
            renderItem={renderItem}
          />
        </TouchableWithoutFeedback>
      </SafeSimpleView>
      <OptionPickerChat
        isVisible={isOptionModal}
        options={[
          {value: 'pin', label: 'Pin', icon: 'push-pin'},
          {value: 'hide', label: 'Hide', icon: 'block'},
          {value: 'delete', label: 'Delete', icon: 'delete', color: 'red'},
        ]}
        onModalClose={setOptionModal}
      />
    </ScreenWrapper>
  );
};

export default Chats;

const styles = StyleSheet.create({
  container: {
    backgroundColor: config.backgroundColor,
    position: 'absolute',
    padding: 4,
    elevation: 2,
    alignSelf: 'center',
    top: 24,
    zIndex: 11111,
    width: 160,
    borderRadius: 4,
  },
  innerContainer: {
    flexDirection: 'row',
    height: 26,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txt: {
    fontSize: 13,
    width: '80%',
    textAlign: 'center',
  },
  chatsContainer: {
    flexDirection: 'row',
    marginTop: 12,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  txt1: {
    fontSize: 22,
    marginTop: 12,
    textAlign: 'center',
    fontFamily: Fonts.Medium,
  },
});
