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
      return resp.data.map((rocket) => ({
        id: rocket.id,
        rocket_name: rocket.rocket_name,
        description: rocket.description,
        flickr_images: rocket.flickr_images,
      }));
    } catch (e) {
      return thunkAPI.rejectWithValue(`api call error ${e.message}`);
    }
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    bookRocket: (state, { payload }) => ({
      ...state,
      rockets: state.rockets.map((rocket) => {
        if (rocket.id === payload) {
          return {
            ...rocket,
            reserved: true,
          };
        }
        return { ...rocket };
      }),
    }),
    unbookRocket: (state, { payload }) => ({
      ...state,
      rockets: state.rockets.map((rocket) => {
        if (rocket.id === payload) {
          return {
            ...rocket,
            reserved: false,
          };
        }
        return { ...rocket };
      }),
    }),
  },
  extraReducers: {
    [getRockets.pending]: (state) => {
      state.loading = true;
    },
    [getRockets.fulfilled]: (state, action) => {
      state.loading = false;
      state.rockets = action.payload.map((rocket) => ({
        ...rocket,
        reserved: false,
      }));
    },
    [getRockets.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { bookRocket, unbookRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;
