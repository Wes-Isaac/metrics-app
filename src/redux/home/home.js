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
const RESERVE_DRAGONS = 'spaceX/dragons/RESERVE_DRAGONS';
const CANCEL_DRAGONS_RESERVE = 'spaceX/dragons/CANCEL_DRAGONS';
const initialState = [];

const dragonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
};

const getDragonAction = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const getDragons = () => (dispatch) => {
  axios.get('https://api.covid19tracking.narrativa.com/api/2021-03-22').then((res) => {
    dispatch(
      getDragonAction(Object.entries(res.data.dates['2021-03-22'].countries)),
    );
  });
};

export const reserveDragons = (payload) => ({
  type: RESERVE_DRAGONS,
  payload,
});

export const cancelDragons = (payload) => ({
  type: CANCEL_DRAGONS_RESERVE,
  payload,
});

export default dragonsReducer;