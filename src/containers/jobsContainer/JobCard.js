import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MyText} from '../../components';
import config, {Fonts} from '../../config';

const JobDetails = ({title, jobId, amount, cardNo, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
      <View>
        <MyText
          style={{
            fontFamily: Fonts.Semi_Bold,
            fontSize: 15,
          }}
          text={title}
        />
        <MyText
          style={{
            fontSize: 15,
            marginVertical: 12,
          }}
          text={cardNo}
        />
        <MyText
          style={{
            fontSize: 15,
            color: config.textPrimaryColor,
          }}
          text={jobId}
        />
      </View>
      <MyText
        style={{
          fontFamily: Fonts.Semi_Bold,
          fontSize: 15,
        }}
        text={'+$' + amount}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    marginTop: 12,
    padding: 12,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 12,
  },
  topRight: {
    marginLeft: 8,
    flex: 1,
  },
  orderNumberActiveContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderNumber: {
    fontFamily: Fonts.Semi_Bold,
    color: config.black,
    fontSize: 15,
    paddingVertical: 4,
    borderBottomWidth: 1,
    width: '90%',
    borderColor: config.disabledColor,
    textAlign: 'center',
  },
  customerName: {
    fontFamily: Fonts.Medium,
    color: config.black,
    fontSize: 13,
  },
  customer: {
    fontFamily: Fonts.Regular,
    fontSize: 11,
    lineHeight: 12,
    color: '#ACACAC',
    paddingTop: 0,
    marginTop: 0,
  },
  secondRow: {
    flexDirection: 'row',
  },
  pick_up_drop_off: {
    flex: 2,
  },
  chat_location: {
    flex: 1,
  },
});
export default JobDetails;
