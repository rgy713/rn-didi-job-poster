import {configureStore} from '@reduxjs/toolkit';
import slices from '../slices';

const store = configureStore({
  reducer: slices,
});

export default {
  store,
};
