import { configureStore } from '@reduxjs/toolkit';
import regionsReducer from './home/home';

const store = configureStore({
  reducer: {
    regions: regionsReducer,
  },
});

export default store;
