import {createAsyncThunk} from '@reduxjs/toolkit';
import JobApi from 'datalib/services/job.api';
/*
 * This function is used to create an action to post a job
 * @author Didijobs <rgy713>
 */
export const createJob = createAsyncThunk(
  '/job/create',
  async (job, {rejectWithValue}) => {
    try {
      return await new JobApi().createJob(job);
    } catch (error) {
      return rejectWithValue(error.code);
    }
  },
);
/*
 * This function is used to create an action to update a job
 * @author Didijobs <rgy713>
 */
export const updateJob = createAsyncThunk(
  '/job/updateByJobid',
  async (job, jobId, {rejectWithValue}) => {
    try {
      console.log('Inside update api 1')
      return await new JobApi().updateJob(job, jobId);
    } catch (error) {
      return rejectWithValue(error.code);
    }
  },
);
/*
 * This function is used to create an action to get All jobs of that user
 * @author Didijobs <rgy713>
 */
export const getMyJobs = createAsyncThunk(
  '/job/getByUserId',
  async (userId, {rejectWithValue}) => {
    try {
      return await new JobApi().getMyJobs(userId);
    } catch (error) {
      return rejectWithValue(error.code);
    }
  },
);
/*
 * This function is used to create an action to fetch current job of an user
 * @author Didijobs <rgy713>
 */
export const getCurrentJob = createAsyncThunk(
  '/job/get-current-job',
  async (userId, {rejectWithValue}) => {
    try {
      return await new JobApi().getCurrentJob();
    } catch (error) {
      return rejectWithValue(error.code);
    }
  },
);
/*
 * This function is used to create an action to cancel a job
 * @author Didijobs <rgy713>
 */
export const cancelJob = createAsyncThunk(
  '/job/cancel',
  async (jobId, {rejectWithValue}) => {
    try {
      return await new JobApi().cancelJob(jobId);
    } catch (error) {
      return rejectWithValue(error.code);
    }
  },
);
/*
 * This function is used to create an action to complete the job
 * @author Didijobs <rgy713>
 */
export const completeJob = createAsyncThunk(
  '/job/complete',
  async (jobId, {rejectWithValue}) => {
    try {
      return await new JobApi().completeJob(jobId);
    } catch (error) {
      return rejectWithValue(error.code);
    }
  },
);
/*
 * This function is used to create an action to delete the job
 * @author Didijobs <rgy713>
 */
export const deleteJob = createAsyncThunk(
  '/job/delete',
  async (jobId, {rejectWithValue}) => {
    try {
      return await new JobApi().deleteJob(jobId);
    } catch (error) {
      return rejectWithValue(error.code);
    }
  },
);
/*
 * This function is used to create an action to fetch all common skills
 * @author Didijobs <rgy713>
 */
export const getSkills = createAsyncThunk(
  '/common/getSkills',
  async (userId, {rejectWithValue}) => {
    try {
      return await new JobApi().getSkills();
    } catch (error) {
      return rejectWithValue(error.code);
    }
  },
);
