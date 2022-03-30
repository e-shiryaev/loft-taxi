import {createStore, applyMiddleware} from "redux";
import rootReducer from './reducers'
import createSagaMiddleWare from 'redux-saga';
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleWare();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;