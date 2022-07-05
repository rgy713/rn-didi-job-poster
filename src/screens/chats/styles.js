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
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
  rowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'white',
    right: 0,
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
