import Toast from 'react-native-simple-toast';
export default (val, small) =>
  Toast.show(val, small ? Toast.SHORT : Toast.LONG);
