import {configureStore} from '@reduxjs/toolkit';

import userReducer from './slices/user/user.slice';
import bankReducer from './slices/user/bank.slice';
import jobReducers from './slices/job/job.slice';

/*
 * This function is used to create redux store
 * @author Didijobs <rgy713>
 */
const store = configureStore({
  reducer: {user: userReducer, bank: bankReducer, job: jobReducers},
});

export default store;
