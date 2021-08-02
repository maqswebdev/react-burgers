import { ADD_TO_ORDER, REMOVE_FROM_ORDER } from "../types";

const initialState = {
  items: {},
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_ORDER: {
      const curTotal = state.items[action.payload]
        ? state.items[action.payload].totalCount + 1
        : 1;
      const newItems = {
        ...state.items,
        [action.payload]: {
          totalCount: curTotal,
        },
      };
      return { ...state, items: newItems };
    }
    case REMOVE_FROM_ORDER: {
      const newItems = {
        ...state.items,
      };
      delete newItems[action.payload];
      return { ...state, items: newItems };
    }
    default:
      return { ...state };
  }
};

export default ordersReducer;
