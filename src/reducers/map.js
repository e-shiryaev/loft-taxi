import {MAP_ALL_ERROR, MAP_ADDRESS_SUCCESS, MAP_ROUTE_SUCCESS} from "../actions";

const initialState = {
  addressList: [],
  linestring: [],
  errorRoute: ''
}

export const map = function(state = initialState, action) {
  switch (action.type) {
    case MAP_ADDRESS_SUCCESS:
      return {...state, addressList: action.payload.addressList, errorRoute: ''};
    case MAP_ROUTE_SUCCESS:
      return {...state, linestring: action.payload.linestring, errorRoute: ''};
    case MAP_ALL_ERROR:
      return {...state, errorRoute: action.payload.error, linestring: []};
    default:
      return state;
  }
}