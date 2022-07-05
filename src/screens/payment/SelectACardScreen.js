import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Button from 'library/commons/Button';
import FeedbackButton from 'library/commons/FeedbackButton';
import CheckBox from 'library/commons/CheckBox';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
import ScreensNameEnum from '../../constants/ScreensNameEnum';
import {useNavigation} from '@react-navigation/native';
import {SwipeListView} from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import R from 'resources/R';
/*
 * This function Component is used to render  Select A Card  Screen
 * @author Didijobs <rgy713>
 */
var cards = [
  {
    id: 1,
    cardDetail: 'Visa ending in 102',
    cardHolder: 'David Ross',
    expiry: '10/21',
  },
  {
    id: 2,
    cardDetail: 'Visa ending in 102',
    cardHolder: 'David Ross',
    expiry: '10/21',
  },
  {
    id: 3,
    cardDetail: 'Visa ending in 102',
    cardHolder: 'David Ross',
    expiry: '10/21',
  },
  {
    id: 4,
    cardDetail: 'Visa ending in 102',
    cardHolder: 'David Ross',
    expiry: '10/21',
  },
  {
    id: 5,
    cardDetail: 'Visa ending in 102',
    cardHolder: 'David Ross',
    expiry: '10/21',
  },
];
const SelectACardScreen = () => {
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);
  const [cardId, setCardId] = useState('');
  const handleCheck = item => {
    setCardId(item.id);
    setChecked(true);
  };
  const deleteAction = index => {
    // delete card action will be dispatch here
  };
  const renderItem = (data, index) => {
    let {item} = data;
    console.log(item, index);
    return (
      <TouchableOpacity key={index.toString()}>
        <View style={styles.cardContainer}>
          <View style={styles.cardInnerContainer}>
            <Text style={styles.cardDetail}>{item.cardDetail}</Text>
            <Text style={styles.cardDetail}>{item.cardHolder}</Text>
            <Text style={styles.cardDetail}>{item.expiry}</Text>
            <Pressable
              onPress={() => handleCheck(item, index)}
              style={styles.isChecked}>
              <CheckBox id={cardId} index={index + 1} />
            </Pressable>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const renderHiddenItem = ({item, index}) => {
    return (
      <Pressable
        onPress={() => deleteAction(index)}
        style={[styles.backRightBtn, styles.backRightBtnRight]}>
        <Icon name="delete" size={25} color="red" />
      </Pressable>
    );
  };
  return (
    <ScreenWrapper>
      {/* <SwipeListView
        data={cards}
        renderItem={(data, index) => renderItem(data, index)}
        renderHiddenItem={renderHiddenItem}
        // disableRightSwipe
        leftOpenValue={75}
        rightOpenValue={-75}
        // previewRowKey={'0'}
        // previewOpenValue={-40}
        // previewOpenDelay={3000}
      /> */}
      <View style={styles.mainContainer}>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>Select a Card</Text>
        </View>
        <View style={styles.cardContainer}>
          {/* {cards.map((item, index) => {
            return (
              <View style={styles.cardInnerContainer}>
                <Text style={styles.cardDetail}>{item.cardDetail}</Text>
                <Text style={styles.cardDetail}>{item.cardHolder}</Text>
                <Text style={styles.cardDetail}>{item.expiry}</Text>
                <Pressable
                  onPress={() => handleCheck(item, index)}
                  style={styles.isChecked}>
                  <CheckBox id={cardId} index={index + 1} />
                </Pressable>
              </View>
            );
          })} */}
          <SwipeListView
            data={cards}
            renderItem={(data, index) => renderItem(data, index)}
            renderHiddenItem={renderHiddenItem}
            // disableRightSwipe
            leftOpenValue={75}
            rightOpenValue={-75}
            // previewRowKey={'0'}
            previewOpenValue={-40}
            // previewOpenDelay={3000}
          />
        </View>
        <View style={{flex: 1}}></View>
        <View style={styles.lastContainerStyle}>
          <FeedbackButton />
          {cardId ? (
            <View style={styles.btnContainer}>
              <Button
                title={'Continue'}
                buttonStyle={styles.Button}
                onPress={() =>
                  navigation.navigate(ScreensNameEnum.OPEN_JOB_SCREEN)
                }
              />
            </View>
          ) : (
            <View style={styles.btnContainer}>
              <Button
                title={'Add Card'}
                onPress={() =>
                  navigation.navigate(ScreensNameEnum.OPEN_JOB_SCREEN)
                }
                buttonStyle={styles.Button}
              />
            </View>
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
};
export default SelectACardScreen;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  txtContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  txt: {
    color: R.colors.PRIMARI_DARK,
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  cardInnerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cardDetail: {
    fontSize: 20,
    color: R.colors.PRIMARI_DARK,
  },
  lastContainerStyle: {
    flexDirection: 'column',
  },
  isChecked: {
    flex: 0.2,
  },
  Button: {},
  btnContainer: {
    margin: 20,
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
});
