import axios from 'axios';

const FETCH_DATA = 'store/home/FETCH_DATA';
const initState = [];

export const fetchData = (data) => ({
  type: FETCH_DATA,
  payload: data,
});

export const getData = async () => {
  const res = await axios.get('https://api.covid19tracking.narrativa.com/api/2020-03-22');
  const countries = Object.entries(res.data.dates['2020-03022'].countries);
  dispatch(fetchData(countries));
}

const homeReducer = (state=initState, action) => {
  switch(action.type) {
    case FETCH_DATA:
      return action.payload.map((country) => ({
        countryName: country[0],
      }));

  }
}

export default homeReducer;