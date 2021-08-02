import {
  SET_BURGERS,
  REMOVE_BURGER,
  UPDATE_BURGER,
  ADD_BURGER,
} from "../types";

const initialState = {
  burgers: [],
};

const burgersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BURGERS:
      return { ...state, burgers: action.payload };
    case ADD_BURGER:
      return { ...state, burgers: [...state.burgers, action.payload] };
    case REMOVE_BURGER:
      return {
        ...state,
        burgers: state.burgers.filter((burger) => burger.id !== action.payload),
      };
    case UPDATE_BURGER: {
      const { id } = action.payload;
      return {
        ...state,
        burgers: state.burgers.map((burger) => {
          if (burger.id === id) {
            return { ...burger, ...action.payload };
          } else {
            return burger;
          }
        }),
      };
    }

    default:
      return state;
  }
};

export default burgersReducer;
