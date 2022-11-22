import { configureStore } from '@reduxjs/toolkit';
import regionsReducer from './home/home';
import countriesReducer from './region/region';

const store = configureStore({
  reducer: {
    regions: regionsReducer,
    countries: countriesReducer,
  },
});

export default store;
