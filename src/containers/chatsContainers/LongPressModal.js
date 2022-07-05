import React, {useState} from 'react';
import {
  CopyIcon,
  DeleteIcon,
  ForwardIcon,
  MaterialIcons,
  NotificationsIcon,
  PencilIcon,
  ReplyIcon,
} from '../../assets';
import {MyText} from '../../components';
import config, {Fonts} from '../../config';
import {FlatList, Modal, Pressable, Text, View} from 'react-native';
import strings from '../../strings';
const LongPressModal = ({
  data,
  pinned,
  hide,
  setActiveIndex,
  activeIndex,
  setAction,
}) => {
  data[data.indexOf(strings.pin)] = pinned ? strings.unpin : strings.pin;
  data[data.indexOf(strings.hide)] = hide ? strings.unhide : strings.hide;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={activeIndex != null}
      onRequestClose={() => {
        setActiveIndex(null);
      }}>
      <Pressable
        onPress={() => {
          setActiveIndex(null);
        }}
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0,0.6)',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '90%',
            backgroundColor: config.backgroundColor,
            borderRadius: 12,
            // paddingVertical: 35,
            paddingHorizontal: 20,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
          <FlatList
            style={{width: '100%'}}
            showsVerticalScrollIndicator={false}
            // ListFooterComponent={() =>
            //   paymentHistory.next_page_url && (
            //     <ActivityLoader loaderColor={color.darkFroz} />
            //   )
            // }
            data={data}
            keyExtractor={(item, index) => String(index)}
            // onEndReachedThreshold={0.5}
            // onRefresh={onRefresh}
            // onEndReached={() => {
            //   paymentHistory.next_page_url ? setOffset(offset + 1) : null;
            // }}
            renderItem={({item, index}) => (
              <Pressable
                onPress={() => {
                  setAction(item);
                }}
                android_ripple={{
                  color: config.primaryColor,
                }}
                style={{
                  flexDirection: 'row',
                  height: 40,
                  width: '100%',
                  justifyContent: 'space-between',
                  //   borderTopWidth: !index ? index : 0.5,
                  //   borderColor: config.primaryColor,
                  alignItems: 'center',
                }}>
                <MyText
                  style={{
                    fontFamily: Fonts.Semi_Bold,
                    fontSize: 15,
                  }}
                  text={item}
                />
                {[strings.pin, strings.unpin].includes(item) ? (
                  <MaterialIcons
                    size={23}
                    color={config.black}
                    name="push-pin"
                  />
                ) : [strings.hide, strings.unhide].includes(item) ? (
                  <NotificationsIcon size={17} color={config.black} />
                ) : item == strings.reply ? (
                  <ReplyIcon size={19} color={config.black} />
                ) : item == strings.forward ? (
                  <ForwardIcon size={19} color={config.black} />
                ) : item == strings.copy ? (
                  <CopyIcon size={19} color={config.black} />
                ) : item == strings.edit ? (
                  <PencilIcon size={27} color={config.black} />
                ) : (
                  <DeleteIcon size={22} color={config.red} />
                )}
              </Pressable>
            )}
          />
        </View>
      </Pressable>
    </Modal>
  );
};

export default LongPressModal;
