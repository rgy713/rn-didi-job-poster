import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Pressable, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from 'library/commons/Button';
import Skills from 'library/modals/Skills';
import {useNavigation} from '@react-navigation/native';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
import OptionPicker from 'library/commons/OptionPicker';
import R from 'resources/R';
import BTextInput from 'library/commons/BTextInput';
import ScreensNameEnum from '../../constants/ScreensNameEnum';
import AddPicture from 'library/commons/AddPicture';
import BLocationInput from 'library/commons/BLocationInput';
import CheckBox from 'library/commons/CheckBox';
import {useDispatch, useSelector} from 'react-redux';
import {
  createJob,
  getCurrentJob,
  updateJob,
} from '../../store/actions/jobActions';
import Geolocation from '@react-native-community/geolocation';
const PostJobScreen = props => {
  const dispatch = useDispatch();
  let {params} = props.route;
  const navigation = useNavigation();
  const [isNewJob] = useState(
    params && 'isNewJob' in params ? params.isNewJob : true,
  );
  const curntJob = useSelector(state => state?.job.currentJob || null);

  const [description, setDescription] = useState(
    !isNewJob ? curntJob.description : '',
  );
  const [price, setJobPrice] = useState(!isNewJob ? curntJob.price : 0);
  let [jobTotal, setJobTotal] = useState(!isNewJob ? curntJob.totalPrice : 0);
  let [jobSkills, setSkills] = useState(!isNewJob ? curntJob.skills : []);
  let [prioritiyPosting, setPriorityPosting] = useState(
    !isNewJob ? curntJob.priorityPosting : false,
  );
  let [imageUrl, setImageUrl] = useState(
    !isNewJob ? curntJob.images.split(',') : [],
  );
  const [isVisible, setModalVisible] = useState(false);
  const [duration, setDuration] = useState(
    !isNewJob ? curntJob.duration : null,
  );
  const [userAddress, setAddress] = useState(
    !isNewJob ? curntJob.userAddress : 'default',
  );
  const [defaultCoords, setCoords] = useState(null);
  const [lat, setLat] = useState(
    !isNewJob ? curntJob.location.coordinates[1] : null,
  );
  const [long, setLong] = useState(
    !isNewJob ? curntJob.location.coordinates[0] : null,
  );
  const [toolsRequired, setToolsRequired] = useState(
    !isNewJob ? curntJob.toolsRequired : false,
  );
  const [platformCommisions, setPlatformCommisions] = useState(
    !isNewJob ? curntJob.platformCommisions : 0,
  );

  useEffect(() => {
    if (params?.isNewJob) {
      Geolocation.getCurrentPosition(
        position => {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        },
        error => {
          alert(error.message.toString());
        },
        {
          showLocationDialog: true,
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 0,
        },
      );
    }
  }, [isNewJob, params?.isNewJob]);
  if (!isNewJob) {
    jobSkills = jobSkills.map((item, index) => item.id);
    prioritiyPosting = prioritiyPosting === 1 ? true : false;
  }
  const options = [
    {value: true, label: 'Yes'},
    {value: false, label: 'No'},
  ];
  const timeoptions = [
    {value: 0.25, label: 'Less than 30 minutes'},
    {value: 0.5, label: '30 Minutes'},
    {value: 1, label: '1 Hour'},
    {value: 2, label: '2 Hour'},
    {value: 3, label: '3 Hour'},
    {value: 4, label: '4 Hour'},
    {value: 5, label: '5 Hour'},
  ];

  const handleModalClose = () => {
    setModalVisible(false);
  };
  const updateSkills = data => {
    setSkills(data);
  };
  const onChangeCoords = ({coords, jobAddress}) => {};
  let data = {
    price: price,
    description: description,
    skills: jobSkills,
    priorityPosting: prioritiyPosting,
    duration: duration,
    durationUnit: 'hour',
    images: imageUrl,
    jobAddress: userAddress,
    toolsRequired: toolsRequired,
    location: {
      lat: lat,
      long: long,
    },
  };
  const handleOnSubmit = async () => {
    console.log(data, 'Submit');
    const res = dispatch(createJob(data));
    if (res) {
      isNewJob
        ? navigation.navigate(ScreensNameEnum.MY_JOBS_SCREEN)
        : navigation.goBack();
    }
  };
  const handleOnUpdate = () => {
    const res = dispatch(updateJob(data, curntJob.id));
    if (res) {
      isNewJob
        ? navigation.navigate(ScreensNameEnum.MY_JOBS_SCREEN)
        : navigation.goBack();
    }
  };
  const onImageChange = img => {
    setImageUrl([...img]);
  };

  return (
    <ScreenWrapper header={false} backDisabled>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              {isNewJob ? 'Post a job' : 'Edit Job'}
            </Text>
            <Text style={styles.text}>Post Protection</Text>
            <Text style={styles.text}>
              Get a full refund if the job is not completed as described in your
              posting
            </Text>
          </View>
          <BLocationInput
            defaultAddress={userAddress}
            defaultCoords={defaultCoords}
            onChangeAddress={() => {}}
            onChangeCoords={onChangeCoords}
            getCoords={_data => setCoords(_data)}
            // value={}
          />
          <View style={styles.details}>
            <Pressable
              onPress={() => setModalVisible(true)}
              style={styles.skillRow}>
              <Text style={styles.optionValue}>Skill</Text>
              <View>
                <Icon name="fact-check" size={25} color="grey" />
              </View>
            </Pressable>
            <View style={styles.options}>
              <OptionPicker
                options={timeoptions}
                title={'Durations'}
                onValueChange={item => {
                  setDuration(item.value);
                }}
              />
            </View>
            <View style={styles.options}>
              <OptionPicker
                options={options}
                title={'Tools Required'}
                onValueChange={item => {
                  setToolsRequired(item.value);
                }}
              />
            </View>
            <View style={styles.options}>
              <Text style={styles.optionValue}>Job Description</Text>
              <View style={styles.checkBox}>
                <BTextInput
                  placeholder={'Description'}
                  style={styles.descriptionStyle}
                  containerStyle={styles.inputContainer}
                  multiline
                  onChangeText={text => setDescription(text)}
                  defaultValue={description}
                />
              </View>
            </View>
            <View style={styles.options}>
              <Text style={styles.optionValue}>Job Price</Text>
              <View style={styles.checkBox}>
                <BTextInput
                  placeholder={'Enter Price'}
                  maxLength={6}
                  style={styles.inputStyle}
                  containerStyle={styles.inputContainer}
                  keyboardType={'numeric'}
                  onChangeText={text => setJobPrice(text)}
                  defaultValue={`${price}`}
                />
              </View>
            </View>
            <View style={styles.options}>
              <Text style={styles.placeHolderText}>
                (Suggested Price: $110 - $160)
              </Text>
            </View>
          </View>
          <View style={styles.imagesContainer}>
            <AddPicture images={imageUrl} onImageChange={onImageChange} />
          </View>
          <View style={styles.lastContainerStyle}>
            <View style={styles.innerLast}>
              <Text style={styles.fees}> Posting Fee (5%)</Text>
              <Text style={styles.fees}>
                {`$${platformCommisions.toFixed(2)}`}
              </Text>
            </View>
            <View style={styles.innerLast}>
              <Text style={styles.fees}> Job Total</Text>
              <Text style={styles.fees}> {`$${jobTotal}`}</Text>
            </View>
            <View style={styles.innerLastCheckbox}>
              <CheckBox
                defaultChecked={prioritiyPosting}
                onCheck={setPriorityPosting}
              />
              <Text style={styles.priorityFees}>
                Priority posting +15, +5hourly
              </Text>
            </View>
          </View>
          <View style={styles.final}>
            <View style={styles.buttons}>
              <Button
                title={'Cancel'}
                onPress={() => navigation.goBack()}
                backgroundColor={R.colors.PRIMARY_LIGHT}
                textColor={R.colors.SECONDRY_DARK}
              />
            </View>
            <View style={styles.buttons}>
              {isNewJob ? (
                <Button title={'Submit'} onPress={handleOnSubmit} />
              ) : (
                <Button title={'Save'} onPress={handleOnUpdate} />
              )}
            </View>
          </View>
          <Skills
            isVisible={isVisible}
            onModalClose={handleModalClose}
            updateSkills={updateSkills}
            defaultValues={jobSkills}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};
export default PostJobScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingVertical: 10,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  header: {
    marginBottom: 10,
  },
  skillRow: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  placeHolderText: {
    color: '#ccc',
    fontFamily: R.fonts.Medium,
    fontSize: R.fontSize.S,
    marginTop: -15,
    marginBottom: 10,
  },
  inputContainer: {
    borderWidth: 0,
    paddingHorizontal: 0,
    marginVertical: 0,
    maxHeight: 50,
    borderRadius: 0,
    height: 50,
  },
  inputStyle: {
    width: 70,
    textAlign: 'right',
    fontFamily: R.fonts.Bold,
    fontSize: R.fontSize.S,
    // padding: 5,
  },
  descriptionStyle: {
    minWidth: 150,
    maxWidth: 200,
    // padding: 5,
    fontFamily: R.fonts.Bold,
    fontSize: 12,
    textAlign: 'right',
  },
  headerText: {
    textAlign: 'center',
    fontSize: R.fontSize.XL,
    fontFamily: R.fonts.Bold,
    color: R.colors.SECONDARY,
  },
  text: {
    display: 'flex',
    color: R.colors.PRIMARI_DARK,
    fontSize: 10,
    textAlign: 'center',
    fontFamily: R.fonts.Regular,
    marginVertical: 5,
  },
  middleContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    flex: 1,
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderRadius: 120,
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: '#ccc',
    elevation: 1,
  },
  topBar: {backgroundColor: '#0F172A'},
  TopBarText: {
    color: '#FFFFFF',
    fontSize: 20,
    marginVertical: 15,
    textAlign: 'center',
    paddingTop: 15,
  },

  details: {
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    zIndex: 9,
  },
  optionValue: {
    fontSize: R.fontSize.S,
    color: R.colors.DARKGRAY,
    fontFamily: R.fonts.Bold,
  },
 
  lastContainerStyle: {
    flexDirection: 'column',
    width: '70%',
    alignSelf: 'center',
    paddingVertical: 10,
  },
  imagesContainer: {
    flexDirection: 'column',
    width: '80%',
    alignSelf: 'center',
    paddingVertical: 10,
  },
  innerLast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerLastCheckbox: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  fees: {
    color: R.colors.PRIMARI_DARK,
    textAlign: 'center',
  },
  priorityFees: {
    fontFamily: R.fonts.Bold,
    textAlign: 'center',
    paddingLeft: 10,
  },
  checkbox: {
    borderWidth: 0.5,
    height: 10,
    width: 20,
    borderRadius: 2,
  },
  final: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnCancel: {
    paddingVertical: 10,
    textAlign: 'center',
    backgroundColor: '#E5E5E5',
    borderRadius: 35,
    marginTop: 40,
    marginHorizontal: 30,
    width: 186,
  },
  cancelText: {
    color: R.colors.PRIMARI_DARK,
    textAlign: 'center',
  },
  post: {
    textAlign: 'center',
  },
  btn: {
    paddingVertical: 10,
    textAlign: 'center',
    backgroundColor: '#E3AB1A',
    borderRadius: 35,
    marginTop: 40,
    marginHorizontal: 30,
    width: 186,
  },
  checkBox: {
    alignSelf: 'center',
  },
  buttons: {
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});
