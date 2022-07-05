import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, Pressable} from 'react-native';
import {Camera, StarComp, MyText, SafeScrollView} from '../../components';
import config, {Fonts} from '../../config';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import {uploadFile} from 'datalib/services/utility.api';
import {useSelector, useDispatch} from 'react-redux';
import {updateUser} from '../../store/actions/userActions';
import ScreensNameEnum from '../../constants/ScreensNameEnum';
import {useNavigation} from '@react-navigation/native';
import Stars from 'react-native-stars';
import R from '../../resources/R';
import ScreenWrapper from 'library/wrapper/ScreenWrapper';
const UserProfileScreen = ({}) => {
  const navigation = useNavigation();
  const user = useSelector(state => state?.user.user);
  const dispatch = useDispatch();
  const [profile, setProfile] = useState(false);
  const [imageUrl, setImage] = useState(
    user && user.userImage ? user.userImage : '',
  );
  const [loading, setLoading] = useState(false);
  console.log(user);
  // const handleFileUpload = async file => {
  const handleFileUpload = async file => {
    // setLoadingIndex(index);
    let response = await uploadFile(file);
    if (response && response.status) {
      const res = dispatch(updateUser({userImage: response.data.path}));
      if (res) {
        setImage(response.data.path);
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } else {
    }
  };
  const uploadPicture = async () => {
    await ImagePicker.openCamera({
      width: 400,
      height: 400,
      cropping: true,
      useFrontCamera: true,
    }).then(async _image => await handleFileUpload(_image));
  };
  const handleUpdateName = async () => {
    navigation.navigate(ScreensNameEnum.UPDATE_USER_NAME, {edit: true});
  };
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.headerText}>Profile</Text>
        <View style={styles.profileContainer}>
          <View styles={styles.imageContainer}>
            {imageUrl ? (
              <Pressable onPress={uploadPicture}>
                <Image
                  source={{uri: imageUrl}}
                  style={styles.image}
                  resizeMode={'contain'}
                />
              </Pressable>
            ) : (
              <Pressable onPress={uploadPicture}>
                <View style={styles.image}>
                  <Icon
                    name="account-circle"
                    size={110}
                    color="#ccc"
                    style={styles.icon}
                  />
                </View>
              </Pressable>
            )}
            <View style={styles.iconContainer}>
              <Icon name="edit" size={25} />
            </View>
          </View>
          <View style={styles.starContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>
                {user ? `${user.firstName} ${user.lastName}` : 0}
              </Text>
              <Pressable onPress={handleUpdateName}>
                <Icon name="edit" size={18} />
              </Pressable>
            </View>

            <Stars
              display={user ? user.rating : 0}
              spacing={8}
              count={5}
              starSize={20}
              fullStar={
                <Icon name={'star'} style={[styles.myStarStyle]} size={20} />
              }
              emptyStar={
                <Icon
                  name={'star-outline'}
                  style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                  size={20}
                />
              }
              halfStar={
                <Icon
                  name={'star-half'}
                  style={[styles.myStarStyle]}
                  size={20}
                />
              }
            />
            <Pressable>
              <Text style={styles.reviewCount}>
                {user ? user.reviewCounts : 0} Reviews
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.txtContainer}>
            <Text style={styles.detailTxt}>Star Rating:</Text>
            <Text style={styles.detailTxtValue}>{user ? user.rating : 0}</Text>
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.detailTxt}>Jobs Posted:</Text>
            <Text style={styles.detailTxtValue}>
              {user ? user.totalPostedJobs : 0}
            </Text>
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.detailTxt}>Spent on Jobs:</Text>
            <Text style={styles.detailTxtValue}>
              ${user ? user.totalSpentMoney : 0}
            </Text>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column', alignItems: 'center'},
  headerText: {
    fontSize: 24,
    marginTop: 12,
    color: R.colors.PRIMARI_DARK,
  },
  profileContainer: {
    flex: 0.5,
    flexDirection: 'column',
    top: 36,
    alignItems: 'center',
    width: '100%',
  },
  imageContainer: {
    width: '30%',
    height: '30%',
  },
  iconContainer: {
    height: 30,
    width: 30,
    backgroundColor: '#FFAA00',
    alignItems: 'center',
    borderRadius: 20,
    top: 0,
  },
  detailsContainer: {
    flex: 1,
    width: '90%',
    top: 40,
    flexDirection: 'column',
  },
  starContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    // borderWidth: 2,
    borderRadius: 120,
    borderColor: '#FFAA00',
    top: 30,
  },
  icon: {
    alignSelf: 'center',
    height: 99,
    width: 99,
    right: 5,
    bottom: 5,
    borderRadius: 120,
  },
  txtContainer: {
    // top: 20,
    flexDirection: 'row',
    margin: 10,
  },
  detailTxt: {
    fontSize: 18,
    color: R.colors.PRIMARI_DARK,
  },
  detailTxtValue: {
    fontSize: 18,
    color: R.colors.PRIMARI_DARK,
    left: 20,
  },
  reviewCount: {
    color: '#3366FF',
    top: 5,
  },
  name: {
    color: R.colors.PRIMARI_DARK,
    fontSize: 18,
    top: 5,
  },
  nameContainer: {
    flexDirection: 'row',
    marginBottom: 5,
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
});
