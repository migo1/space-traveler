import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  loading: true,
  error: false,
};

const rocketsUrl = 'https://api.spacexdata.com/v3/rockets';

export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async (thunkAPI) => {
    try {
      const resp = await axios.get(rocketsUrl);
      return resp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(`api call error ${e.message}`);
    }
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: {
    [getRockets.pending]: (state) => {
      state.loading = true;
    },
    [getRockets.fulfilled]: (state, action) => {
      state.loading = false;
      state.rockets = action.payload;
    },
    [getRockets.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default rocketsSlice.reducer;
