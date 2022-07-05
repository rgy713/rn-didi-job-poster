import moment from 'moment';
import React, {useState} from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import {MyImage, MyText, SafeListView} from '../../components';
import {SwipeListView} from 'react-native-swipe-list-view';
import config, {Fonts} from '../../config';
import styles from '../chats/styles';
import {DeleteIcon, Feather, Ionicons} from '../../assets';
import {ChatlistCard, LongPressModal} from '../../containers';
import {routeName} from '../../navigator/routeName';
import strings from '../../strings';
import {addCheckFunction, CheckRecordFunc} from '../../helpers/checkBoxHandler';

const NotificationScreen = ({navigation, route}) => {
  const [chatlist, setChatList] = useState([
    'Notification One',
    'Notification Two',
    'Notification Three',
  ]);
  const tapOptions = [strings.mute, strings.delete];
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [hideArr, setHideArr] = useState([]);
  const [pinArr, setPinArr] = useState([]);
  const navTo = (screenName, params) => {
    setActiveIndex(null);
  };
  const TapAndHoldVoid = index => () => {
    setActiveIndex(index);
  };
  const setAction = pushItem => item => {
    [strings.mute, strings.unmute].includes(item)
      ? addCheckFunction(pushItem, hideArr, setHideArr)
      : chatlist.splice(chatlist.indexOf(pushItem), 1);
    setActiveIndex(null);
  };
  const renderItem = ({item, index}) => (
    <View
      style={{
        zIndex: -111,
      }}
      key={index.toString()}>
      {activeIndex == index ? (
        <LongPressModal
          hide={CheckRecordFunc(item, hideArr)}
          activeIndex={activeIndex}
          data={tapOptions}
          setAction={setAction(item)}
          setActiveIndex={setActiveIndex}
        />
      ) : null}
      <ChatlistCard
        onLongPress={TapAndHoldVoid(index)}
        avatar={config.images.man}
        title={item}
        description={"You've to be here"}
        time={moment(new Date()).format('DD MMM YYYY')}
        onPress={() => navTo(routeName.messages)}
        pinned={CheckRecordFunc(item, pinArr) ? true : false}
        hide={CheckRecordFunc(item, hideArr) ? true : false}
        index={index}
        cardStyle={{
          ...styles,
          backgroundColor:
            activeIndex == index ? config.disabledColor : config.white,
        }}
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
        <DeleteIcon size={25} color={config.red} />
      </Pressable>
    );
  };

  return (
    <SwipeListView
      renderHiddenItem={renderHiddenItem}
      style={{backgroundColor: config.white}}
      disableRightSwipe
      leftOpenValue={75}
      rightOpenValue={-75}
      previewRowKey={'0'}
      previewOpenValue={-40}
      previewOpenDelay={3000}
      // stickyHeaderIndices={false}
      refreshing={isLoading}
      ListHeaderComponent={
        <MyText
          style={{
            fontSize: 22,
            marginTop: 12,
            textAlign: 'center',
            fontFamily: Fonts.Medium,
          }}
          text={route.name}
        />
      }
      // onRefresh={onRefresh}
      data={chatlist}
      renderItem={renderItem}
    />
  );
};

export default NotificationScreen;
