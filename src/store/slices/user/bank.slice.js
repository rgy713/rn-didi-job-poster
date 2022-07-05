import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';
import {
  defaultThunkFailureState,
  defaultThunkLoadingState,
  defaultThunkSuccessState,
} from '../../../constants/thunk.config';
import {ThunkStatusEnum} from '../../../constants/thunkStatus.enum';
import {addBankAccount, getBankAccount} from '../../actions/bankActions';
// TODO: Should we have api based status and errors for more fine grained contro
/*
 * This function is used to create bank slice
 * @author Didijobs <rgy713>
 */

const initialThunkState = {status: ThunkStatusEnum.IDLE, error: null};

const bankItemAdapter = createEntityAdapter({
  selectId: bank => bank.id || '',
});

const initialState = {
  bank: [],
  getBankByIdStatus: initialThunkState,
  updateBankStatus: initialThunkState,
};

// TODO: Remove boilerplate?
const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {restoreBankStore: () => initialState},
  extraReducers: builder => {
    builder.addCase(addBankAccount.pending, state => {
      state.updateBankStatus = defaultThunkLoadingState;
    });
    builder.addCase(addBankAccount.fulfilled, (state, action) => {
      state.updateBankStatus = defaultThunkSuccessState;
      bankItemAdapter.upsertOne(state, action.payload);
    });
    builder.addCase(addBankAccount.rejected, (state, action) => {
      state.updateBankStatus = {
        ...defaultThunkFailureState,
        error: action.payload,
      };
    });
    builder.addCase(getBankAccount.pending, state => {
      state.getBankByIdStatus = defaultThunkLoadingState;
    });
    builder.addCase(getBankAccount.fulfilled, (state, action) => {
      state.getBankByIdStatus = defaultThunkSuccessState;
      console.log(action.payload);
      bankItemAdapter.upsertMany(state, action.payload);
    });
    builder.addCase(getBankAccount.rejected, (state, action) => {
      state.getBankByIdStatus = {
        ...defaultThunkFailureState,
        error: action.payload,
      };
    });
  },
});

export default bankSlice.reducer;
export const {restoreBankStore} = bankSlice.actions;
export const {
  selectAll: selectAllBankAccount,
  selectById: selectBankAccountById,
  selectIds: selectBankAccountIds,
} = bankItemAdapter.getSelectors(state => state.bank);
