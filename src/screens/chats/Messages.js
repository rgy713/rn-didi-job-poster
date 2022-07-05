/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import moment from 'moment';
import {
  FlatList,
  Linking,
  Platform,
  RefreshControl,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {MyImage, MyText, Toast} from '../../components';
import config, {Fonts} from '../../config';
import {ChatFooter, LongPressModal, MsgChat} from '../../containers';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
import strings from '../../strings';
const Messages = ({navigation, route}) => {
  const [isLoading] = useState(false);

  const msgList = [
    {sender_type_id: 1},
    {sender_type_id: 2},
    {sender_type_id: 1},
    {sender_type_id: 2},
  ];

  const [msgArr, setMsgArr] = useState([]);

  const user = {id: 1};

  return (
    <ScreenWrapper header={true}>
      <View>
        <View style={styles.container}>
          <Text style={styles.nameText}>Devid Ross</Text>
        </View>
        <View style={styles.secondContainer}>
          <MyText
            style={styles.nameText}
            text={moment(new Date()).format('DD MMM YYYY')}
          />
          <MyImage style={styles.image} source={config.images.man} />
        </View>
        <View style={styles.thirdContainer}>
          <FlatList
            inverted={true}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                colors={[
                  config.primaryColor,
                  config.textPrimaryColor,
                  config.primaryColor,
                ]}
                refreshing={isLoading}
              />
            }
            scrollEnabled={true}
            data={msgList}
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={({item, index, separators}) => (
              <View
                style={{
                  width: config.window_width * 0.95,
                  marginBottom: 20,
                  flexDirection: 'row',
                  justifyContent:
                    user?.id == item?.sender_type_id
                      ? 'flex-end'
                      : 'flex-start',
                  alignSelf: 'center',
                }}>
                <MsgChat usrId={user.id} item={item} />
              </View>
            )}
            ListHeaderComponent={() => (
              <ChatFooter navigation={navigation} setMsgArr={setMsgArr} />
            )}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};
export default Messages;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 22,
    textAlign: 'center',
  },
  secondContainer: {width: '100%', alignItems: 'center'},
  nameText: {
    marginTop: 12,
    backgroundColor: config.backgroundColor,
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 12,
    fontSize: 9,
    fontFamily: Fonts.Medium,
  },
  image: {
    width: 60,
    marginTop: 8,
    height: 60,
  },
  thirdContainer: {
    bottom: Platform.OS == 'ios' ? 70 : 50,
    height: config.window_height * 0.8,
    alignSelf: 'center',
  },
  contentContainerStyle: {
    width: '100%',
    paddingBottom: 12,
  },
});
