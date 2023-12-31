import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  loading: true,
  error: false,
};

export const getMissions = createAsyncThunk(
  'spacex/getMissions',
  async (thunkAPI) => {
    try {
      const resp = await axios.get('https://api.spacexdata.com/v3/missions');
      return resp.data.map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
      }));
    } catch (e) {
      return thunkAPI.rejectWithValue(`API call error ${e.message}`);
    }
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, { payload }) => ({
      ...state,
      missions: state.missions.map((mission) => {
        if (mission.mission_id === payload) {
          return {
            ...mission,
            reserved: true,
          };
        }
        return { ...mission };
      }),
    }),
    leaveMission: (state, { payload }) => ({
      ...state,
      missions: state.missions.map((mission) => {
        if (mission.mission_id === payload) {
          return {
            ...mission,
            reserved: false,
          };
        }
        return { ...mission };
      }),
    }),
  },
  extraReducers: {
    [getMissions.pending]: (state) => {
      state.loading = true;
    },
    [getMissions.fulfilled]: (state, action) => {
      state.missions = action.payload.map((mission) => ({
        ...mission,
        reserved: false,
      }));
      state.loading = false;
    },
    [getMissions.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
