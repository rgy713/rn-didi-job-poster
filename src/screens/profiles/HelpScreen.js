import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {MyText, SafeScrollView, SearchComp} from '../../components';
import config, {Fonts} from '../../config';
import strings from '../../strings';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
const HelpScreen = ({navigation, route}) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [searchListBool, setSearchListBool] = useState(false);
  const queries = [
    'How do I find my candidate',
    'Why do I need to put ssn',
    'How does posting work',
    'How many fees are there',
    'How do I go to account',
    'How do I message ',
  ];
  const changebleArr = data.length ? data : queries;
  return (
    <ScreenWrapper>
      <SafeScrollView>
        <MyText text={strings.help} style={styles.helpText} />
        <View style={styles.container}>
          <MyText style={styles.supportText} text={'Contact support:'} />
          <MyText style={styles.contactText} text={' 123-123-1234'} />
        </View>

        <MyText
          style={styles.faqText}
          text={'Check the FAQ to see if your problem can be resolved'}
        />
        <SearchComp
          setSearch={setSearch}
          searchArray={changebleArr}
          setData={setData}
          search={search}
          setSearchListBool={setSearchListBool}
        />
        <View style={styles.secondary}>
          {changebleArr.map((item, index) => (
            <MyText key={index.toString()} style={styles.mapText} text={item} />
          ))}
        </View>
      </SafeScrollView>
    </ScreenWrapper>
  );
};
export default HelpScreen;

const styles = StyleSheet.create({
  helpText: {
    fontSize: 22,
    marginTop: 12,
    fontFamily: Fonts.Medium,
  },
  container: {alignItems: 'center', flexDirection: 'row'},
  supportText: {
    fontSize: 12,
    marginTop: 24,
    fontFamily: Fonts.Semi_Bold,
  },
  contactText: {
    fontSize: 12,
    marginTop: 24,
    color: config.textPrimaryColor,
    fontFamily: Fonts.Semi_Bold,
  },
  faqText: {
    fontSize: 12,
    marginTop: 8,
    fontFamily: Fonts.Semi_Bold,
  },
  secondary: {
    width: '90%',
    marginTop: 32,
  },
  mapText: {
    fontSize: 14,
    fontFamily: Fonts.Regular,
    marginTop: 24,
  },
});
