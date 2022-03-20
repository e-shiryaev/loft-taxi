import {ERROR_CHANGE_CARD, ERROR_LOG_IN, LOG_IN, LOG_OUT, SET_CARD} from "../actions";

const initialState = {
  isLoggedIn: !!localStorage.getItem('isLoggedIn'),
  token: localStorage.getItem('token') || null,
  errorAuth: null,
  errorCard: null,
  card: localStorage.getItem('cardInfo') ? JSON.parse(localStorage.getItem('cardInfo')) : {}
}

export const auth = function(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {...state, isLoggedIn: true, token: action.payload.token, errorAuth: null};
    case LOG_OUT:
      return {...state, isLoggedIn: false, token: null, errorAuth: null, card: {}};
    case ERROR_LOG_IN:
      return {...state, isLoggedIn: false, token: null, errorAuth: action.payload.error};
    case SET_CARD:
      return {...state, card: {...action.payload}, errorCard: null};
    case ERROR_CHANGE_CARD:
      return {...state, card: {}, errorCard: action.payload.error};
    default:
      return state;
  }
}