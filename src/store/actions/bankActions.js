import {createAsyncThunk} from '@reduxjs/toolkit';
import BankApi from 'datalib/services/bank.api';
/*
 * This function is used to create an action to add a bank account
 * @author Didijobs <rgy713>
 */
export const addBankAccount = createAsyncThunk(
  '/user/add-bank',
  async (params, {rejectWithValue}) => {
    try {
      return await new BankApi().addBank(params);
    } catch (error) {
      return rejectWithValue(error.code);
    }
  },
);
/*
 * This function is used to update the user bank account
 * @author Didijobs <rgy713>
 */
export const getBankAccount = createAsyncThunk(
  '/user/update-bank',
  async (params, {rejectWithValue}) => {
    try {
      return await new BankApi().getBankAccount();
    } catch (error) {
      return rejectWithValue(error.code);
    }
  },
);
