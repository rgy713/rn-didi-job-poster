import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BTextInput from 'library/commons/BTextInput';
import Button from 'library/commons/Button';
import {useNavigation} from '@react-navigation/native';
import ScreensNameEnum from '../../constants/ScreensNameEnum';
import R from 'resources/R';
/*
 * This Component is used to add a card
 * @author Didijobs <rgy713>
 */
export default function AddCardScreen() {
  const navigation = useNavigation();
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  function handleAddJob() {
    //API call
    navigation.navigate(ScreensNameEnum.PAYMENT_STATUS);
  }

  return (
    <ScreenWrapper>
      <View style={styles.main}>
        <Text style={styles.headerText}> Add Card</Text>
        <Text style={styles.ssl}>
          <Icon name="verified-user" size={15} color="#2ECC71" />
          Secured with SSL
        </Text>

        <View style={styles.input1}>
          <Text style={styles.cardText}> Card number</Text>
          <BTextInput
            autoFocus
            placeholder="0000 0000 0000 0000"
            style={{fontSize: 20}}
            value={cardNumber}
            onChangeText={text => {
              setCardNumber(text);
            }}
            keyboardType={'numeric'}
          />
        </View>
        <View style={styles.date}>
          <View style={styles.input2}>
            <Text style={styles.txt}>Expiration date</Text>
            <BTextInput
              placeholder="MM/YY"
              style={styles.in}
              value={expiry}
              onChangeText={text => {
                setExpiry(text);
              }}
              keyboardType={'numeric'}
            />
          </View>
          <View style={styles.input2}>
            <Text style={styles.txt}>Security code</Text>
            <BTextInput
              placeholder="CVV"
              style={styles.in}
              value={cvv}
              onChangeText={text => {
                setCvv(text);
              }}
              keyboardType={'numeric'}
            />
          </View>
        </View>
        <Text style={styles.description}>
          For account verification, we will place a small hold amount on your
          account.This is not a charge and will be released in 24 hours.
        </Text>
      </View>
      <View style={styles.button}>
        <Button
          title={'Add Card'}
          buttonStyle={styles.btn}
          onPress={handleAddJob}
        />
      </View>
    </ScreenWrapper>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
  },
  headerText: {
    textAlign: 'center',
    fontSize: R.fontSize.XL,
    fontFamily: R.fonts.Bold,
    color: R.colors.SECONDARY,
  },
  ssl: {
    textAlign: 'center',
    fontSize: 14,
    color: '#000000',
    margin: 5,
  },
  cardText: {
    textAlign: 'left',
    fontSize: R.fontSize.M,
    color: R.colors.PRIMARI_DARK,
    fontFamily: R.fonts.Regular,
  },
  input1: {paddingHorizontal: 20, paddingVertical: 10},
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  input2: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  in: {fontSize: 20, textAlign: 'center', minWidth: 100},
  description: {
    fontSize: 13,
    color: '#B4B4B4',
    textAlign: 'center',
    marginHorizontal: 20,
    fontFamily: R.fonts.Medium,
    marginTop: 10,
  },
  txt: {
    fontSize: R.fontSize.M,
    color: R.colors.PRIMARI_DARK,
    fontFamily: R.fonts.Regular,
  },
  button: {marginHorizontal: 20, paddingVertical: 20},
  btn: {},
});
