import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

const initialStateValue = {
  token: '',
  username: '',
  userTier: '',
  tierImageUrl: '',
  genre: '',
};

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    setToken: (state, action) => {
      state.value.token = action.payload;
    },
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialStateValue;
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, (state) => {
      state.value = initialStateValue;
    });
  },
});

export const { 
  login, 
  logout,
  setToken,
 } = userSlice.actions;

export default userSlice.reducer;
