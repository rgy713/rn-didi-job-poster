import {StyleSheet} from 'react-native';
import config, {Fonts} from '../../config';

const styles = StyleSheet.create({
  cardContainer: {
    width: config.window_width * 0.95,
    alignSelf: 'center',
    backgroundColor: config.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: config.disabledColor,
    height: 70,
    // justifyContent: 'space-between',
  },
  imageRow: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  textHead: {
    marginLeft: 12,
    width: '70%',
    fontFamily: Fonts.Medium,
    lineHeight: 14,
    color: config.black,
  },
  desc: {
    marginLeft: 12,
    lineHeight: 12,
    fontSize: 11,
    marginTop: 4,
    fontFamily: Fonts.Medium,
    color: config.headingColor,
  },
  dateTime: {
    color: config.black,
    fontSize: 11,
    fontFamily: Fonts.Semi_Bold,
  },
});

export default styles;
