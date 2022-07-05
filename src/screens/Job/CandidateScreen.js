import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Button from 'library/commons/Button';
import Profile from 'library/commons/Profile';
import BottomBar from 'library/commons/BottomBar';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
import ReviewModal from 'library/modals/ReviewModal';
import {useNavigation} from '@react-navigation/native';
import ScreensNameEnum from '../../constants/ScreensNameEnum';
import R from 'resources/R';
/*
 * This Component is used to render  Accepted  Candidate
 * @author Didijobs <rgy713>
 */
const CandidateScreen = () => {
  const navigation = useNavigation();
  const [isVisible, setModalVisible] = React.useState(false);
  const [isAccepted, setAccepted] = React.useState(false);
  function handleModalClose() {
    setModalVisible(false);
  }
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.slidContainer}>
            <Text style={styles.headerText}>Accepted Candidate</Text>
            <View style={styles.labelcontainer}>
              <Profile />
            </View>
            <View style={styles.msgContainer}>
              <Button title={'Messgae'} buttonStyle={styles.btn} />
            </View>
            <View style={styles.txtContainer}>
              <Text style={styles.skillsText}>Skill Match:</Text>
              <Text style={styles.skillsTextValue}>Roofer</Text>
              <Text style={styles.distanceText}>50 Miles Away</Text>
            </View>
            <View style={styles.final}>
              <View style={styles.finalButton}>
                <Button
                  title={'Accepted'}
                  backgroundColor={'#F8F8FC'}
                  textColor={'#000000'}
                  onPress={() => {
                    navigation.navigate(ScreensNameEnum.JOB_RATING);
                  }}
                />
              </View>
            </View>
          </View>
          {/* // )} /> */}
        </View>
        <View style={styles.borromContainer}>
          <BottomBar title={'ETA: Minutes'} />
        </View>
      </View>
      <ReviewModal isVisible={isVisible} onModalClose={handleModalClose} />
    </ScreenWrapper>
  );
};
export default CandidateScreen;
const styles = StyleSheet.create({
  labelcontainer: {flex: 2},
  headerText: {
    textAlign: 'center',
    fontSize: R.fontSize.XL,
    fontFamily: R.fonts.Bold,
    color: R.colors.SECONDARY,
  },
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
  innerContainer: {
    flex: 3,
    padding: 10,
    paddingHorizontal: 20,
  },
  img: {
    top: 30,
    height: 100,
    width: 100,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 120,
  },
  profileContainer: {
    height: 150,
    width: '100%',
    top: 50,
  },
  msgContainer: {
    flex: 1,
    width: '40%',
    alignSelf: 'center',
  },
  btn: {
    backgroundColor: '#118CFE',
  },
  txtContainer: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 20,
  },
  skillsText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
  skillsTextValue: {
    color: '#2ECC71',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  distanceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    top: 30,
  },
  accept: {
    flexDirection: 'column',
    borderWidth: 1,
    flex: 1,
  },

  final: {
    flexDirection: 'column',
  },
  feedBackButton: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderRadius: 120,
    backgroundColor: '#000000',
    margin: 10,
    alignSelf: 'flex-end',
    bottom: 20,
  },
  feedBackText: {
    flex: 1,
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    top: 5,
  },
  finalButton: {},
  slidContainer: {
    flex: 1,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  borromContainer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
