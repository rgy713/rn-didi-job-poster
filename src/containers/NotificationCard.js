import React from 'react';
import {Pressable, View} from 'react-native';
import {MyImage, MyText} from '../../components';
const iconProps = {
  style: {
    width: 35,
    height: 35,
    borderRadius: 360,
  },
};
export default ({title, onPress, description, time, avatar, styles}) => (
  <Pressable onPress={onPress} style={styles.cardContainer}>
    <View style={styles.imageRow}>
      <MyImage source={avatar} {...iconProps} />
      <View
        style={{
          width: '100%',
        }}>
        <MyText numberOfLines={2} style={styles.textHead} text={title} />
        {/* <MyText
            numberOfLines={2}
            style={{
              marginLeft: 12,
              width: '70%',
              fontFamily: Fonts.Medium,
              lineHeight: 14,
              color: config.black,
            }}
            text={item.description}
          /> */}
        <MyText style={styles.desc} text={description} />
      </View>
    </View>
    <MyText style={styles.dateTime} text={time} />
  </Pressable>
);
