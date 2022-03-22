import {createStore, applyMiddleware} from "redux";
import rootReducer from './reducers'
import {authMiddleware} from "./milldewares/authMiddleware";
import {cardMiddleware} from "./milldewares/cardMiddleware";

export const store = createStore(rootReducer, applyMiddleware(authMiddleware, cardMiddleware));