import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_COUNTRY = 'air/region/GET_COUNTRY';

export const getCountries = createAsyncThunk(GET_COUNTRY, async (region) => {
  const response = await fetch(`https://restcountries.com/v3.1/region/${region}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const result = await response.json();
  return result;
});

const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_COUNTRY}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default countriesReducer;
