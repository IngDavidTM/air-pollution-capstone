import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_INFO = 'air/region/GET_INFO';

const initialState = {
  co: 0,
  nh3: 0,
  no: 0,
  no2: 0,
  o3: 0,
  pm2_5: 0,
  pm10: 0,
  so2: 0,
};

export const getInfo = createAsyncThunk(GET_INFO, async (coor) => {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${coor[0]}&lon=${coor[1]}&appid=9e828e2624199c7cbb9d9cde2d3b483c`);
  const result = await response.json();
  return result;
});

const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_INFO}/fulfilled`:
      return action.payload.list[0].components;
    default:
      return state;
  }
};

export default infoReducer;
