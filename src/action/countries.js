import axios from 'axios';
import "isomorphic-fetch"
import { takeEvery, call, put } from "redux-saga/effects"

import {
  ROOT,
  REQUEST_COUNTRIES,
  RECEIVE_COUNTRIES,
  REQUEST_COUNTRY,
  RECEIVE_COUNTRY,
  RESET_COUNTRY
} from "./types";


export const fetchCountries = () => async dispatch => {
  try {
    dispatch({ type: REQUEST_COUNTRIES });
    const res = await axios.get(`${ROOT}/all`);
    dispatch({ type: RECEIVE_COUNTRIES, payload: [] });
  } catch (e) {
    console.log(e);
    dispatch({ type: RECEIVE_COUNTRIES, payload: [] });
  }
};

export const resetCountry = () => async dispatch => {
  try {
    dispatch({ type: RESET_COUNTRY, payload: [] });
  } catch (e) {
    console.log(e);
    dispatch({ type: RESET_COUNTRY, payload: [] });
  }
};

export const fetchCountry = name => async dispatch => {
  try {
    dispatch({ type: REQUEST_COUNTRY, id: name });
    console.log("name===>>>", name)
    // const res = await axios.get(`https://devapi.biproxi.com/v1/listing?listing_id=${name}`);

    // const response = yield call(fetch, "https://devapi.biproxi.com/v1/listing?listing_id=" + name, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })

    // console.log("res===>>>", response)
    // dispatch({ type: RECEIVE_COUNTRY, payload: response.data.data });
  } catch (e) {
    console.log(e);
    dispatch({ type: RECEIVE_COUNTRY, payload: {} });
  }
};