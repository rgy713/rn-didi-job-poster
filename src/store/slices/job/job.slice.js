import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';
import {
  defaultThunkFailureState,
  defaultThunkLoadingState,
  defaultThunkSuccessState,
} from '../../../constants/thunk.config';
import {ThunkStatusEnum} from '../../../constants/thunkStatus.enum';
import {
  createJob,
  updateJob,
  getMyJobs,
  getCurrentJob,
  cancelJob,
  deleteJob,
  completeJob,
  getSkills,
} from '../../actions/jobActions';
// TODO: Should we have api based status and errors for more fine grained control
/*
 * This function is used to create job slice
 * @author Didijobs <rgy713>
 */

const initialThunkState = {status: ThunkStatusEnum.IDLE, error: null};

const jobItemAdapter = createEntityAdapter({
  selectId: job => job.id || '',
});

const initialState = {
  currentJob: null,
  jobHistory: [],
  jobSkills: [],
  pageNumber: 1,
  getJobByIdStatus: initialThunkState,
  updateJobStatus: initialThunkState,
};

// TODO: Remove boilerplate?
const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {restoreBankStore: () => initialState},
  extraReducers: builder => {
    builder.addCase(createJob.pending, state => {
      state.updateJobStatus = defaultThunkLoadingState;
    });
    builder.addCase(createJob.fulfilled, (state, action) => {
      state.updateJobStatus = defaultThunkSuccessState;
      state.currentJob = action.payload;
    });
    builder.addCase(createJob.rejected, (state, action) => {
      state.updateJobStatus = {
        ...defaultThunkFailureState,
        error: action.payload,
      };
    });
    builder.addCase(updateJob.pending, state => {
      state.updateJobStatus = defaultThunkLoadingState;
    });
    builder.addCase(updateJob.fulfilled, (state, action) => {
      state.updateJobStatus = defaultThunkSuccessState;
      console.log(action.payload);
      jobItemAdapter.updateOne(state, action.payload);
    });
    builder.addCase(updateJob.rejected, (state, action) => {
      state.updateJobStatus = {
        ...defaultThunkFailureState,
        error: action.payload,
      };
    });
    builder.addCase(getMyJobs.pending, state => {
      state.updateJobStatus = defaultThunkLoadingState;
    });
    builder.addCase(getMyJobs.fulfilled, (state, action) => {
      state.updateJobStatus = defaultThunkSuccessState;
      // console.log(action.payload);
      jobItemAdapter.upsertMany(state, action.payload);
    });
    builder.addCase(getMyJobs.rejected, (state, action) => {
      state.updateJobStatus = {
        ...defaultThunkFailureState,
        error: action.payload,
      };
    });
    builder.addCase(getCurrentJob.pending, state => {
      state.updateJobStatus = defaultThunkLoadingState;
    });
    builder.addCase(getCurrentJob.fulfilled, (state, action) => {
      state.updateJobStatus = defaultThunkSuccessState;
      state.currentJob = action.payload;
    });
    builder.addCase(getCurrentJob.rejected, (state, action) => {
      state.updateJobStatus = {
        ...defaultThunkFailureState,
        error: action.payload,
      };
    });
    builder.addCase(cancelJob.pending, state => {
      state.updateJobStatus = defaultThunkLoadingState;
    });
    builder.addCase(cancelJob.fulfilled, (state, action) => {
      state.updateJobStatus = {
        ...defaultThunkSuccessState,
        statusMessage: 'api success',
      };
      state.currentJob = null;
    });
    builder.addCase(cancelJob.rejected, (state, action) => {
      state.updateJobStatus = {
        ...defaultThunkFailureState,
        error: action.payload,
      };
    });
    builder.addCase(completeJob.pending, state => {
      state.updateJobStatus = defaultThunkLoadingState;
    });
    builder.addCase(completeJob.fulfilled, (state, action) => {
      state.updateJobStatus = {
        ...defaultThunkSuccessState,
        statusMessage: 'api success',
      };
      state.currentJob = null;
    });
    builder.addCase(completeJob.rejected, (state, action) => {
      state.updateJobStatus = {
        ...defaultThunkFailureState,
        error: action.payload,
      };
    });
    builder.addCase(getSkills.pending, state => {
      state.updateJobStatus = defaultThunkLoadingState;
    });
    builder.addCase(getSkills.fulfilled, (state, action) => {
      state.updateJobStatus = {
        ...defaultThunkSuccessState,
        statusMessage: 'api success',
      };
      state.jobSkills = action.payload;
    });
    builder.addCase(getSkills.rejected, (state, action) => {
      state.updateJobStatus = {
        ...defaultThunkFailureState,
        error: action.payload,
      };
    });
  },
});

export default jobSlice.reducer;
export const {restoreJobStore} = jobSlice.actions;
export const {
  selectAll: selectAllJob,
  selectById: selectJobById,
  selectIds: selectJobIds,
} = jobItemAdapter.getSelectors(state => state.job);
