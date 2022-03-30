import { all, fork } from 'redux-saga/effects'
import authSaga from "./authSaga";
import cardSaga from "./cardSaga";
import mapSaga from "./mapSaga";

function* rootSaga() {
  yield all([
    yield fork(authSaga),
    yield fork(cardSaga),
    yield fork(mapSaga),
  ]);
}

export default rootSaga;