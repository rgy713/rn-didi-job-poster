import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Platform,
  StatusBar,
} from 'react-native';
import Button from 'library/commons/Button';
import Profile from 'library/commons/Profile';
import BottomBar from 'library/commons/BottomBar';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
import ReviewModal from 'library/modals/ReviewModal';
import {useNavigation} from '@react-navigation/native';
import ScreensNameEnum from '../../constants/ScreensNameEnum';
import R from 'resources/R';
/*
 * This function Component is used to render all Candidate profile
 * @author Didijobs <rgy713>
 */
const ViewCandidateScreen = () => {
  const navigation = useNavigation();
  const [isVisible, setModalVisible] = React.useState(false);
  function handleModalClose() {
    setModalVisible(false);
  }
  const height = Dimensions.get('window').height;
  console.log(StatusBar.currentHeight);
  return (
    <ScreenWrapper>
      <View style={{flexDirection: 'column', flex: 1}}>
        <View style={{flex: 3, padding: 10}}>
          <FlatList
            data={[1, 2, 3]}
            keyExtractor={item => `${item}`}
            pagingEnabled={true}
            contentContainerStyle={{}}
            showsVerticalScrollIndicator={false}
            renderItem={item => (
              <View style={styles.slidContainer}>
                <Text style={styles.headerText}>Candidate</Text>
                <View style={styles.labelcontainer}>{/* <Profile /> */}</View>

                <View style={styles.msgContainer}>
                  <Button title={'Messgae'} buttonStyle={styles.buttonStyle} />
                </View>
                <View style={styles.txtContainer}>
                  <Text style={styles.skillsText}>Skill Match:</Text>
                  <Text style={styles.skillsTextValue}>Roofer</Text>
                  <Text style={styles.distanceText}>50 Miles Away</Text>
                </View>
                <View style={styles.final}>
                  <View style={styles.finalButton}>
                    <Button
                      title={'Accept'}
                      buttonStyle={{backgroundColor: '#1730B1'}}
                      onPress={() =>
                        navigation.navigate(ScreensNameEnum.CANDIDATE_SCREEN)
                      }
                    />
                  </View>
                  {/* )} */}
                </View>
              </View>
            )}
          />
        </View>
        <View style={styles.borromContainer}>
          <BottomBar title={'10 Candidates'} />
        </View>
      </View>

      <ReviewModal isVisible={isVisible} onModalClose={handleModalClose} />
    </ScreenWrapper>
  );
};
export default ViewCandidateScreen;
const styles = StyleSheet.create({
  labelcontainer: {flex: 1},
  headerText: {
    textAlign: 'center',
    fontSize: R.fontSize.XL,
    fontFamily: R.fonts.Bold,
    color: R.colors.SECONDARY,
  },
  img: {
    top: 30,
    height: 100,
    width: 100,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 120,
  },
  profileContainer: {},
  msgContainer: {
    flex: 1,
    width: '50%',
    alignSelf: 'center',
  },
  buttonStyle: {
    backgroundColor: '#118CFE',
  },
  txtContainer: {
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
  },

  final: {
    flexDirection: 'column',
  },

  finalButton: {},
  slidContainer: {
    height:
      Platform.OS === 'ios'
        ? Dimensions.get('window').height - 260
        : Dimensions.get('window').height - 144,

    // marginBottom: 100,
  },
  borromContainer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
