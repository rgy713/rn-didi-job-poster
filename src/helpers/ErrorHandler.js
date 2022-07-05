import {Toast} from 'react-native';

module.exports = err => {
  let ErrorResoponse = JSON.parse(err.request._response);
  console.warn('err');
  if (typeof ErrorResoponse.errors == 'string') {
    Toast.show({title: ErrorResoponse.errors});
  } else if (Array.isArray(ErrorResoponse.errors)) {
    Toast.show({title: ErrorResoponse.message});
  } else if (Object.values(ErrorResoponse.errors)?.length) {
    Object.values(ErrorResoponse.errors).map(element => {
      return Toast.show({title: element[0]});
    });
  } else {
    Toast.show({title: err.message});
  }
};
