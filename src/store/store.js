import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux'
import userSlice from './slices/userSlice';
import popularSlice from './slices/popularSlice';

const reducers = combineReducers({
    user: userSlice,
    popular: popularSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'popular'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;