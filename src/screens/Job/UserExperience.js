import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, StyleSheet, TextInput} from 'react-native';
import Images from 'library/commons/Images';
import FeedbackButton from 'library/commons/FeedbackButton';
import Button from 'library/commons/Button';
import ScreensNameEnum from '../../constants/ScreensNameEnum';
import {useNavigation} from '@react-navigation/native';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import R from 'resources/R';
/*
 * This function component is used for job rating
 * @author Didijobs <rgy713>
 */
const UserExperience = () => {
  const navigation = useNavigation();
  const options = [1, 2, 3, 4, 5];
  const [description, setDestination] = useState();
  const [rating, setRating] = useState();
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.labelContainer}>
          <View style={styles.labelInner}>
            <Text style={styles.label}>Experience</Text>
          </View>
          <Images />
        </View>
        <View style={styles.feedback}>
          <TextInput
            multiline={true}
            placeholder="Leave a review of how your overall experience was!"
            value={description}
            style={styles.input}
            onChangeText={() => {
              setDestination(description);
            }}
          />
        </View>
        <View style={styles.feedback1}>
          <View style={styles.labelContainer}>
            <View style={styles.ratingInner}>
              <Text style={styles.inner}>Job Rating</Text>
              <View style={styles.images}>
                <View style={{alignItems: 'center'}}>
                  <Stars
                    default={5}
                    count={5}
                    half={true}
                    starSize={50}
                    fullStar={
                      <Icon
                        name={'star'}
                        style={[styles.myStarStyle]}
                        size={40}
                      />
                    }
                    emptyStar={
                      <Icon
                        name={'star-outline'}
                        style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                        size={40}
                      />
                    }
                    halfStar={
                      <Icon
                        name={'star-half'}
                        style={[styles.myStarStyle]}
                        size={40}
                      />
                    }
                  />
                </View>
              </View>
            </View>
            <FeedbackButton />
            <View style={styles.btn}>
              <Button
                title={'Continue'}
                onPress={() => {
                  navigation.navigate(ScreensNameEnum.SELECT_A_CARD_SCREEN);
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default UserExperience;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  myStarStyle: {
    color: R.colors.primary,
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 0.5, height: 0.5},
    textShadowRadius: 1,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
  labelContainer: {
    flex: 2,
    flexDirection: 'column',
  },
  label: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
  labelInner: {
    flex: 1,
  },
  feedback: {
    flex: 1,
  },
  feedback1: {
    flex: 2,
  },
  input: {
    flex: 1,
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    margin: 20,
    borderColor: 'grey',
    textAlignVertical: 'top',
    color: '#000000',
    fontSize: 16,
    padding: 10,
  },
  ratingInner: {
    flex: 1,
  },
  inner: {
    top: 20,
    textAlign: 'center',
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    flex: 1,
  },
  images: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
    marginHorizontal: 20,
  },
  btn: {
    margin: 20,
  },
});
