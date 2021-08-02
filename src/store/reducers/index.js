import { combineReducers } from "redux";
import burgersReducer from "./burgers";
import ordersReducer from "./orders";
import restaurantsReducer from "./restaurants";

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
  burgers: burgersReducer,
  orders: ordersReducer,
});

export default rootReducer;
