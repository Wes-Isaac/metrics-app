import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import detailReducer from "./detail/detail";
import homeReducer from "./home/home";



const reducer = combineReducers({
 home: homeReducer,
 detail: detailReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;