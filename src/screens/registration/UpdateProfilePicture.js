import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Pressable, Platform} from 'react-native';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from 'library/commons/Button';
import Loader from 'library/commons/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {updateUser} from '../../store/actions/userActions';
import {useNavigation} from '@react-navigation/native';
import {uploadFile} from 'datalib/services/utility.api';
import ScreensNameEnum from '../../constants/ScreensNameEnum';
import R from 'resources/R';
/*
 * This function Component is used to render updateProfilePicture Screen
 * @author Didijobs <rgy713>
 */
const UpdateProfilePicture = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const userNew = useSelector(state => state?.user?.user);
  const [imageUrl, setImage] = useState(userNew ? userNew.userImage : null);
  const [loading, setLoading] = useState(false);
  const [isNextDisabled, setNextDisabled] = useState(true);
  useEffect(() => {
    if (imageUrl) {
      setNextDisabled(false);
    } else {
      setNextDisabled(true);
    }
  }, [imageUrl]);
  const uploadPicture = async () => {
    const images = await ImagePicker.openPicker({
      mediaType: 'photo',
      compressImageQuality: 0.4,
    });
    await handleFileUpload(images);
  };
  const takePicture = async () => {
    ImagePicker.openCamera({
      width: 400,
      height: 400,
      cropping: true,
    }).then(async _image => await handleFileUpload(_image));
  };
  const handleFileUpload = async file => {
    setLoading(true);
    let response = await uploadFile(file);
    if (response && response.status) {
      setLoading(false);
      console.log(response);
      setImage(response.data.path);
    } else {
      setLoading(false);
    }
  };
  const handleSubmit = async () => {
    setLoading(true);
    dispatch(updateUser({userImage: imageUrl, profileStatus: 3}));
    setLoading(false);
    navigation.navigate(ScreensNameEnum.MY_JOBS);
  };
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.inputBlock}>
          <Text style={styles.label}>
            <Text>Profile Picture</Text>
          </Text>
          {imageUrl ? (
            <Pressable onPress={uploadPicture}>
              <View style={styles.nameContainer}>
                <Image
                  source={{uri: imageUrl}}
                  style={styles.imageStyle}
                  resizeMode={'contain'}
                />
              </View>
            </Pressable>
          ) : (
            <Pressable onPress={uploadPicture}>
              <View style={styles.nameContainer}>
                <Icon name="user" size={200} color="#ccc" />
              </View>
            </Pressable>
          )}
          {!imageUrl ? (
            <View style={styles.imgDesc}>
              <Text style={styles.imgText}>
                Make sure you follow these 3 steps:
              </Text>
              <View style={styles.txtPoints}>
                <Text style={styles.points}>
                  1. Your full face must be in the circle
                </Text>
                <Text style={styles.points}>
                  2. The photo needs to be focused, well lit and no glare
                </Text>
                <Text style={styles.points}>
                  3. No pictures of another picture or any alternations
                </Text>
              </View>
            </View>
          ) : (
            <View style={styles.imgDesc}>
              <Text style={styles.imgTextAfter}>
                Once you signup your profile picture it cannot be changed
              </Text>
            </View>
          )}
        </View>
        <View style={styles.btnContainer}>
          {!imageUrl ? (
            <View style={styles.final}>
              <Button title={'Take Picture'} onPress={takePicture} />
            </View>
          ) : (
            <View style={styles.final}>
              <View style={styles.takePicture}>
                <Button
                  title={'Retake'}
                  buttonStyle={styles.customButton}
                  onPress={takePicture}
                  iconColor={'#000000'}
                  textStyle={{color: '#000'}}
                />
              </View>
              <View style={styles.takePicture}>
                <Button
                  title={'Submit'}
                  onPress={handleSubmit}
                  disabled={isNextDisabled}
                />
              </View>
            </View>
          )}
        </View>
      </View>
      <Loader loading={loading} />
    </ScreenWrapper>
  );
};
export default UpdateProfilePicture;

const styles = StyleSheet.create({
  label: {
    color: R.colors.PRIMARI_DARK,
    textAlign: 'center',
    fontSize: 20,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 50,
  },
  input: {
    fontSize: 15,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 46,
    borderWidth: 0.5,
    width: 160,
    height: 52,
    paddingLeft: 15,
    borderTopcolor: R.colors.PRIMARI_DARK,
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'space-around',
    padding: 20,
  },
  inputBlock: {
    display: 'flex',
    flexDirection: 'column',
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
  btnSkip: {
    paddingVertical: 10,
    textAlign: 'center',
    backgroundColor: '#E5E5E5',
    borderRadius: 35,
    marginTop: 40,
    marginHorizontal: 30,
    width: 186,
  },

  btnText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  skipBtnText: {
    textAlign: 'center',
    fontSize: 20,
    color: R.colors.PRIMARI_DARK,
  },
  nameContainer: {
    background: '#E5E5E5',
    display: 'flex',
    flexDirection: 'row',
    width: 234,
    height: 234,
    borderWidth: 1,
    backgroundColor: '#E5E5E',
    borderRadius: 120,
    alignSelf: 'center',
    boxSizing: 'border-box',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    overflow: 'hidden',
  },
  imageStyle: {
    height: 400,
    width: 400,
    alignSelf: 'center',
  },
  imgDesc: {
    display: 'flex',
    flexDirection: 'column',
  },
  imgText: {
    color: R.colors.PRIMARI_DARK,
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 14,
  },
  imgTextAfter: {
    color: R.colors.PRIMARI_DARK,
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 14,
    marginTop: 50,
  },
  txtPoints: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 10,
  },
  points: {
    color: R.colors.PRIMARI_DARK,
    paddingVertical: 5,
    fontSize: 14,
  },
  final: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
  },
  preview: {
    height: 233,
    width: 233,
  },
  takePicture: {
    width: '45%',
  },
  customButton: {
    backgroundColor: '#F8F8FC',
    color: R.colors.PRIMARI_DARK,
  },
});
