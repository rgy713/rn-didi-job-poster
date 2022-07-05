import {StyleSheet} from 'react-native';
import config, {Fonts} from '../../config';

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    marginTop: 12,
    fontFamily: Fonts.Medium,
  },
  footerCont: {
    alignItems: 'center',
    marginTop: 48,
    width: '100%',
  },
  whatAreYouGoodAt: {
    marginBottom: 12,
    fontFamily: Fonts.Medium,
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  terms: {
    fontSize: 14,
    fontFamily: Fonts.Medium,
    color: config.textPrimaryColor,
  },
  bySaving: {
    fontSize: 14,
    fontFamily: Fonts.Medium,
  },
  save: {
    width: '80%',
    marginTop: 12,
  },
});
export default styles;
