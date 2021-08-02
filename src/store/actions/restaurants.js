import axios from "axios";
import { SET_RESTAURANTS, SELECT_RESTAURANT } from "../types";

export const fetchRestaurants = () => (dispatch) => {
  axios.get("/restaurants").then(({ data }) => {
    dispatch(setRestaurants(data));
  });
};

export const setRestaurants = (items) => ({
  type: SET_RESTAURANTS,
  payload: items,
});

export const selectRestautant = (obj) => ({
  type: SELECT_RESTAURANT,
  payload: obj,
});
