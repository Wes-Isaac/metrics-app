import axios from 'axios';

const FETCH_COUNTRY_DATA = 'store/detail/FETCH_COUNTRY_DATA';
const ALTER_SELECTED = 'store/detail/ALTER_SELECTED';
const initialState = [];

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY_DATA:
      return action.payload;
    case ALTER_SELECTED: {
      axios.get(`https://api.covid19tracking.narrativa.com/api/2021-03-22/country/${action.payload}`).then((res) =>{
        console.log(res.data);

      });
      // let updateState;
      // updateState = state.map((country) =>({...country, selected: false}));
      // updateState = state.map((country) => (country.id !== action.payload ? country : {...country, selected: true}));
      // return updateState;
    }

    default:
      return state;
  }
};

const getDetailAction = (payload) => ({
  type: FETCH_COUNTRY_DATA,
  payload,
});

export const alterSelected = (payload) => ({
  type: ALTER_SELECTED,
  payload,
});

export const getCountryData = (name) => (dispatch) => {
  axios.get(`https://api.covid19tracking.narrativa.com/api/2021-03-22/country/${name}`).then((res) => {
    dispatch(
      getDetailAction(Object.entries(res.data.dates['2021-03-22'].countries).map(([name, info]) =>(
        {
          name:name,
          info: info,
        }
      ))),
    );
  });
};

export default detailReducer;