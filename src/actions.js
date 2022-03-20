export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTH = 'AUTH';
export const CHANGE_CARD = 'CHANGE_CARD';
export const LOAD_CARD = 'LOAD_CARD';
export const SET_CARD = 'SET_CARD';
export const ERROR_LOG_IN = 'ERROR_LOG_IN';
export const ERROR_CHANGE_CARD = 'ERROR_CHANGE_CARD';

export const logIn = (token) => ({type: LOG_IN, payload: {token}});
export const errorLogIn = (error) => ({type: ERROR_LOG_IN, payload: {error}});
export const logOut = () => ({type: LOG_OUT});
export const auth = (email, password) => ({type: AUTH, payload: {email, password}});
export const changeCard = () => ({type: CHANGE_CARD});
export const loadCard = () => ({type: LOAD_CARD});
export const setCard = (inputs) => ({type: SET_CARD, payload: {...inputs}});
export const errorChangeCard = (error) => ({type: ERROR_CHANGE_CARD, payload: {error}});