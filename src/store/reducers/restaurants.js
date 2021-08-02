import { SET_RESTAURANTS, SELECT_RESTAURANT } from "../types";

const initialState = {
  restaurants: [],
  selectedRestaurant: null,
};

const restourantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESTAURANTS:
      return { ...state, restaurants: action.payload };
    case SELECT_RESTAURANT:
      return { ...state, selectedRestaurant: action.payload };
    default:
      return state;
  }
};

export default restourantsReducer;
