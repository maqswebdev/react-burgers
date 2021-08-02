import axios from "axios";
import {
  SET_BURGERS,
  REMOVE_BURGER,
  UPDATE_BURGER,
  ADD_BURGER,
} from "../types";

export const fetchBurgers = () => (dispatch) => {
  axios.get("/burgers").then(({ data }) => {
    dispatch(setBurgers(data));
  });
};

export const setBurgers = (items) => ({
  type: SET_BURGERS,
  payload: items,
});

export const addBurger = (obj) => ({
  type: ADD_BURGER,
  payload: obj,
});

export const removeBurger = (id) => ({
  type: REMOVE_BURGER,
  payload: id,
});

export const updateBurger = (obj) => ({
  type: UPDATE_BURGER,
  payload: obj,
});
