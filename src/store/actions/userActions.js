import {createAsyncThunk} from '@reduxjs/toolkit';
import UserApi from 'datalib/services/user.api';
/*
 * This function is used to create an action to fetch an user by his id
 * @author Didijobs <rgy713>
 */
export const getUserById = createAsyncThunk(
  'user/getUserById',
  async (userId, {rejectWithValue}) => {
    try {
      return await new UserApi().getUserById();
    } catch (error) {
      return rejectWithValue(error.code);
    }
  },
);
/*
 * This function is used to create an action to  update  user information
 * @author Didijobs <rgy713>
 */
export const updateUser = createAsyncThunk(
  'user/update-user',
  async (user, {rejectWithValue}) => {
    try {
      // TODO: Removing profilePic while updating user, no need to clutter api call
      user.picture = null;
      return await new UserApi().updateUser(user);
    } catch (error) {
      return rejectWithValue(error.code);
    }
  },
);

/*
 * This function is used to create an action to upload a picture
 * @author Didijobs <rgy713>
 */
export const uploadProfilePic = createAsyncThunk(
  'user/uploadProfilePic',
  async ({userId, picture}, {rejectWithValue}) => {
    try {
      return await new UserApi().uploadProfilePic(userId, picture);
    } catch (error) {
      return rejectWithValue(error.code);
    }
  },
);
