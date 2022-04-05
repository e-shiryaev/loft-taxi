export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_ERROR = 'LOG_IN_ERROR';

export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';

export const LOG_OUT = 'LOG_OUT';

export const USER_CARD_REQUEST_UPDATE = 'USER_CARD_REQUEST_UPDATE';
export const USER_CARD_REQUEST_GET = 'USER_CARD_REQUEST_GET';
export const USER_CARD_SUCCESS = 'USER_CARD_SUCCESS';
export const USER_CARD_ERROR = 'USER_CARD_ERROR';

export const MAP_ADDRESS_REQUEST = 'MAP_ADDRESS_REQUEST';
export const MAP_ADDRESS_SUCCESS = 'MAP_ADDRESS_SUCCESS';
export const MAP_ROUTE_SUCCESS = 'MAP_ROUTE_SUCCESS';
export const MAP_ROUTE_REQUEST = 'MAP_ROUTE_REQUEST';
export const MAP_ALL_ERROR = 'MAP_ALL_ERROR';

export const logIn = (token) => ({type: LOG_IN_SUCCESS, payload: {token}});
export const errorLogIn = (error) => ({type: LOG_IN_ERROR, payload: {error}});
export const logOut = () => ({type: LOG_OUT});
export const auth = (email, password) => ({type: LOG_IN_REQUEST, payload: {email, password}});
export const changeCard = (inputs) => ({type: USER_CARD_REQUEST_UPDATE, payload: {...inputs}});
export const loadCard = () => ({type: USER_CARD_REQUEST_GET});
export const setCard = (inputs) => ({type: USER_CARD_SUCCESS, payload: {...inputs}});
export const errorChangeCard = (error) => ({type: USER_CARD_ERROR, payload: {error}});
export const loadAddressList = (addressList) => ({type: MAP_ADDRESS_REQUEST, payload: {addressList}});
export const setAddressList = (addressList) => ({type: MAP_ADDRESS_SUCCESS, payload: {addressList}});
export const loadRoute = (from, to) => ({type: MAP_ROUTE_REQUEST, payload: {from, to}});
export const errorRoute = (error) => ({type: MAP_ALL_ERROR, payload: {error}});
export const setLinestring = (linestring) => ({type: MAP_ROUTE_SUCCESS, payload: {linestring}});
export const registration = (inputs) => ({type: REGISTRATION_REQUEST, payload: {...inputs}});