import axios from 'axios';

import {
  ROOT,
  REQUEST_COUNTRIES,
  RECEIVE_COUNTRIES,
  REQUEST_COUNTRY,
  RECEIVE_COUNTRY
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


export const fetchCountry = name => async dispatch => {
  try {
    dispatch({ type: REQUEST_COUNTRY });
    console.log("name===>>>", name)
    const res = await axios.get(`https://devapi.biproxi.com/v1/listing?listing_id=${name}`);
    console.log("res===>>>", res)
    dispatch({ type: RECEIVE_COUNTRY, payload: res.data.data });
  } catch (e) {
    console.log(e);
    dispatch({ type: RECEIVE_COUNTRY, payload: {} });
  }
};