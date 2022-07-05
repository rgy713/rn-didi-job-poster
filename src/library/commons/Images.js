import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import R from 'resources/R';
/*
 * This function is used to take picture and set 
 * @author Didijobs <rgy713>
 */
export default function Images() {
  const [img1, setImg1] = useState('');
  const [img2, setImg2] = useState('');
  const [img3, setImg3] = useState('');
  const handleAddPicture = async img => {
    const path = await ImagePicker.openCamera({
      width: 400,
      height: 400,
      cropping: true,
    });
    if (path) {
      if (img === 'img1') {
        setImg1(path.path);
      } else if (img === 'img2') {
        setImg2(path.path);
      } else {
        setImg3(path.path);
      }
      console.log(path.path);
    }
  };
  return (
    <View style={styles.main}>
      <View style={styles.innerContainer}>
        <Pressable
          onPress={() => {
            handleAddPicture('img1');
          }}>
          {img1 ? (
            <View style={styles.imgContainer}>
              <Image
                source={{uri: img1}}
                style={styles.imageStyle}
                resizeMode={'contain'}
              />
            </View>
          ) : (
            <View style={styles.imgContainer}>
              <Image />
              <Text style={styles.txt}>Add Picture</Text>
              <Icon name="camera" size={25} color="grey" style={styles.icon} />
            </View>
          )}
        </Pressable>
        <Pressable
          onPress={() => {
            handleAddPicture('img2');
          }}>
          {img2 ? (
            <View style={styles.imgContainer}>
              <Image
                source={{uri: img2}}
                style={styles.imageStyle}
                resizeMode={'contain'}
              />
            </View>
          ) : (
            <View style={styles.imgContainer}>
              <Image />
              <Text style={styles.txt}>Add Picture</Text>
              <Icon name="camera" size={25} color="grey" style={styles.icon} />
            </View>
          )}
        </Pressable>
        <Pressable
          onPress={() => {
            handleAddPicture('img3');
          }}>
          {img3 ? (
            <View style={styles.imgContainer}>
              <Image
                source={{uri: img3}}
                style={styles.imageStyle}
                resizeMode={'contain'}
              />
            </View>
          ) : (
            <View style={styles.imgContainer}>
              <Image />
              <Text style={styles.txt}>Add Picture</Text>
              <Icon name="camera" size={25} color="grey" style={styles.icon} />
            </View>
          )}
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  imgContainer: {
    borderWidth: 1,
    height: 80,
    width: 80,
    borderRadius: 200,
    marginHorizontal: 20,
    alignSelf: 'center',
  },
  txt: {
    fontSize: 10,
    color: R.colors.PRIMARI_DARK,
    textAlign: 'center',
    top: 20,
  },
  icon: {
    alignSelf: 'center',
    top: 30,
  },
  imageStyle: {
    height: 80,
    width: 80,
    borderRadius: 120,
  },
});
