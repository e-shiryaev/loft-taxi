import {SET_ADDRESS} from "../actions";

const initialState = {
  addressList: []
}

export const map = function(state = initialState, action) {
  switch (action.type) {
    case SET_ADDRESS:
      return {...state, addressList: action.payload.addressList};
    default:
      return state;
  }
}