import React from 'react';
import {Pressable, View} from 'react-native';
import {NotificationsIcon, PinIcon} from '../../assets';
import {MyImage, MyText} from '../../components';
import config from '../../config';
import styles from './styles';
const iconProps = {
  style: {
    width: 35,
    height: 35,
    borderRadius: 360,
  },
};
export default ({
  title,
  onPress,
  cardStyle,
  description,
  onLongPress,
  time,
  avatar,
  pinned,
  hide,
}) => (
  <Pressable
    onLongPress={onLongPress}
    onPress={onPress}
    style={[styles.cardContainer, cardStyle]}>
    <View style={styles.imageRow}>
      <MyImage source={avatar} {...iconProps} />
      <View
        style={{
          width: '100%',
        }}>
        <MyText numberOfLines={2} style={styles.textHead} text={title} />
        <MyText
          numberOfLines={2}
          style={{
            marginLeft: 12,
            width: '70%',
            lineHeight: 14,
            color: config.black,
          }}
          text={'..'}
        />
        <MyText style={styles.desc} text={description} />
      </View>
    </View>
    <View style={{alignItems: 'center'}}>
      <MyText style={styles.dateTime} text={time} />
      {hide ? (
        <NotificationsIcon
          size={16}
          style={{marginTop: 4}}
          color={config.black}
        />
      ) : null}
    </View>
    {pinned ? (
      <PinIcon style={{marginLeft: 8}} size={23} color={config.black} />
    ) : null}
  </Pressable>
);
