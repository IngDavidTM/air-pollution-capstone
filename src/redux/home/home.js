const GET_REGIONS = 'air/home/GET_REGIONS';

export const getRegions = (payload) => (
  {
    type: GET_REGIONS,
    payload,
  }
);

const regionsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_REGIONS:
      return action.payload;
    default:
      return state;
  }
};

export default regionsReducer;
