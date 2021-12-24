import axios from 'axios';

const FETCH_DATA = 'store/home/FETCH_DATA';
const initialState = [];

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
};

const getHomeAction = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const getData = () => (dispatch) => {
  axios.get('https://api.covid19tracking.narrativa.com/api/2021-03-22').then((res) => {
    dispatch(
      getHomeAction(Object.entries(res.data.dates['2021-03-22'].countries).map(([name, info]) => (
        {
          id: name,
          info,
        }
      ))),
    );
  });
};

export default homeReducer;
