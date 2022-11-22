import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_INFO = 'air/region/GET_INFO';

export const getInfo = createAsyncThunk(GET_INFO, async (coor) => {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${coor[0]}&lon=${coor[1]}&appid=f264f600cbb28b87d78da7916c6df0db`);
  const result = response.json();
  return result;
});

const infoReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_INFO}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default infoReducer;
