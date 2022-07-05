/*
 * Thunk status
 * @author Didijobs <rgy713>
 */
import {ThunkResultEnum, ThunkStatusEnum} from './thunkStatus.enum';

export const defaultThunkLoadingState = {
  error: null,
  result: void 0,
  status: ThunkStatusEnum.LOADING,
};

export const defaultThunkSuccessState = {
  error: null,
  result: ThunkResultEnum.SUCCESS,
  status: ThunkStatusEnum.IDLE,
};

export const defaultThunkFailureState = {
  result: ThunkResultEnum.FAILURE,
  status: ThunkStatusEnum.IDLE,
};
