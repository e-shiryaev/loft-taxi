import {USER_CARD_ERROR, ERROR_LOG_IN, LOG_IN_SUCCESS, LOG_OUT, USER_CARD_SUCCESS} from "../actions";

const initialState = {
  isLoggedIn: !!localStorage.getItem('isLoggedIn'),
  token: localStorage.getItem('token') || null,
  errorAuth: null,
  errorCard: null,
  card: localStorage.getItem('cardInfo') ? JSON.parse(localStorage.getItem('cardInfo')) : {}
}

export const user = function(state = initialState, action) {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return {...state, isLoggedIn: true, token: action.payload.token, errorAuth: null};
    case LOG_OUT:
      return {...state, isLoggedIn: false, token: null, errorAuth: null, card: {}};
    case ERROR_LOG_IN:
      return {...state, isLoggedIn: false, token: null, errorAuth: action.payload.error};
    case USER_CARD_SUCCESS:
      return {...state, card: {...action.payload}, errorCard: null};
    case USER_CARD_ERROR:
      return {...state, card: {}, errorCard: action.payload.error};
    default:
      return state;
  }
}