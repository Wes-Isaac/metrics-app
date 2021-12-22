import axios from 'axios';

// const FETCH_DATA = 'store/home/FETCH_DATA';
// const initState = [];

// export const getData = (dispatch) => {
//  axios.get('https://api.covid19tracking.narrativa.com/api/2020-03-22').then((res) => {
//    const countries = Object.entries(res.data.dates['2020-03-22'].countries);
//    console.log(countries);

//    dispatch(fetchData(countries));
//   //  dispatch({ type: FETCH_DATA, payload: countries })
//  })
// }

// const homeReducer = (state=initState, action) => {
//   switch(action.type) {
//     case FETCH_DATA:
//       return action.payload;
//     default:
//       return state;

//   }
// }
// const fetchData = (data) => ({
//   type: FETCH_DATA,
//   payload: data,
// });



// export default homeReducer;


const FETCH_DATA = 'store/home/FETCH_DATA';
const ALTER_SELECTED = 'store/home/ALTER_SELECTED';
const initialState = [];

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case ALTER_SELECTED: {
      const updateState = state.map((country) => (country.id !== action.payload ? country : {...country, selected: true}));
      return updateState;
    }

    default:
      return state;
  }
};

const getHomeAction = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const alterSelected = (payload) => ({
  type: ALTER_SELECTED,
  payload,
});

export const getData = () => (dispatch) => {
  axios.get('https://api.covid19tracking.narrativa.com/api/2021-03-22').then((res) => {
    dispatch(
      getHomeAction(Object.entries(res.data.dates['2021-03-22'].countries).map(([name, info]) =>(
        {
          id:name,
          info: info,
          selected: false,
        }
      ))),
    );
  });
};

export default homeReducer;