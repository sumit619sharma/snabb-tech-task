// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import filterUserReducer from './filterUserSlice';
const store = configureStore({
  reducer: {
    users: userReducer,
    filter: filterUserReducer,
  },
});

export default store;
