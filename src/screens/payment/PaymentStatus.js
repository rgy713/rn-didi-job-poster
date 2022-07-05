import React, {useEffect} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import ScreensNameEnum from '../../constants/ScreensNameEnum';
import {useNavigation} from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import R from 'resources/R';
/*
 * This function Component is used to render Payment Status
 * @author Didijobs <rgy713>
 */
const PaymentStatus = props => {
  const navigation = useNavigation();
  const [page, setPage] = React.useState('');
  useEffect(() => {
    if (props.route && props.route.params?.page) {
      setPage(props.route.params?.page);
    }
  }, [props.route]);
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: ScreensNameEnum.MY_JOBS}],
      });
    }, 3000);
  }, [navigation]);
  if (page === 'block') {
    return (
      <View style={styles.container}>
        <View style={styles.textBlock}>
          <Text style={styles.Text}>Payment Unsuccessful $174.10</Text>
        </View>
        <View style={styles.iconBlock}>
          <View>
            <Icon name="block" size={200} color="#E80909" />
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.textBlock}>
          <Text style={styles.Text}>Job Posted</Text>
        </View>
        <View style={styles.iconBlock}>
          <View style={styles.iconCircle}>
            <Icon name="check" size={110} color="#2ECC71" style={{left: 30}} />
          </View>
        </View>
      </View>
    );
  }
};
export default PaymentStatus;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  textBlock: {
    display: 'flex',
    height: '50%',
  },
  Text: {
    top: 100,
    textAlign: 'center',
    color: R.colors.PRIMARI_DARK,
    fontSize: 30,
    marginHorizontal: 50,
  },
  iconBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '30%',
  },
  iconCircle: {
    borderWidth: 15,
    justifyContent: 'center',
    height: 200,
    width: 200,
    borderRadius: 120,
    borderColor: '#2ECC71',
  },
});
