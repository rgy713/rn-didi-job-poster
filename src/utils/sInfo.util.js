import SInfo from 'react-native-sensitive-info';

// TODO: Explore sharedPreferencesName and keychainService...also check how secure is this library as it maintains JWT/Firebase uid
const sInfoUtil = {
  save: async (key, value) => {
    await SInfo.setItem(key, value, {});
  },
  fetch: async key => await SInfo.getItem(key, {}),
  remove: async key => {
    await SInfo.deleteItem(key, {});
  },
};

export default sInfoUtil;
