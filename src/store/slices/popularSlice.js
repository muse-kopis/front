import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const initialStateValue = {
  popularPerformances : [],
};

export const popularSlice = createSlice({
  name: "popular",
  initialState: { value: initialStateValue },
  reducers: {
    setPopularDatas: (state, action) => {
      state.value.popularPerformances = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, (state) => {
      state.value = initialStateValue;
    });
  },
});

export const { 
  setPopularDatas,
 } = popularSlice.actions;

export default popularSlice.reducer;
