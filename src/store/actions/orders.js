import { ADD_TO_ORDER, REMOVE_FROM_ORDER } from "../types";

export const addToOrder = (itemId) => ({
  type: ADD_TO_ORDER,
  payload: itemId,
});

export const removeFromOrder = (itemId) => ({
  type: REMOVE_FROM_ORDER,
  payload: itemId,
});
