import {
  REQUEST_COUNTRY,
  RECEIVE_COUNTRY,
  RESET_COUNTRY
} from "../action/types";

const INITIAL_STATE = {
  isFetching: false,
  lastUpdate: Date.now(),
  propertyData: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_COUNTRY: {
      return { ...state, isFetching: true };
    }
    case RECEIVE_COUNTRY: {
      console.log("RECEIVE_COUNTRY==>>", action.payload)
      return { ...state, isFetching: false, propertyData: action.payload };
    }

    case RESET_COUNTRY: {
      console.log("RECEIVE_COUNTRY==>>", action.payload)
      return { ...state, isFetching: false, propertyData: [] };
    }

    default: return state;
  }
};