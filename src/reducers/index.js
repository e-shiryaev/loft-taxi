import {combineReducers} from "redux";
import {user} from './user';
import {map} from './map';

export default combineReducers({user, map});

export const getToken = state => state.user.token;
export const hasLogged = state => state.user.isLoggedIn;
export const getErrorAuth = state => state.user.errorAuth;
export const getCardInfo = state => state.user.card;
export const getErrorCard = state => state.user.errorCard;
export const getAddressList = state => state.map.addressList;