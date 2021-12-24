import axios from 'axios';

const FETCH_COUNTRY_DATA = 'store/detail/FETCH_COUNTRY_DATA';
const initialState = [];

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY_DATA:
      return action.payload;
    default:
      return state;
  }
};

const getDetailAction = (payload) => ({
  type: FETCH_COUNTRY_DATA,
  payload,
});

export const getCountryData = (name) => (dispatch) => {
  axios.get(`https://api.covid19tracking.narrativa.com/api/2021-03-22/country/${name}`).then((res) => {
    dispatch(
      getDetailAction(Object.entries(res.data.dates['2021-03-22'].countries).map(([name, info]) => (
        {
          name,
          info,
        }
      ))),
    );
  });
};

export default detailReducer;
