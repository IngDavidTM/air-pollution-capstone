import { configureStore } from '@reduxjs/toolkit';
import infoReducer from './country/country';
import regionsReducer from './home/home';
import countriesReducer from './region/region';

const store = configureStore({
  reducer: {
    regions: regionsReducer,
    countries: countriesReducer,
    info: infoReducer,
  },
});

export default store;
