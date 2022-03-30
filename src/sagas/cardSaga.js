import {call, put, select, takeEvery} from 'redux-saga/effects';
import {serverLoadCard, serverSaveCard} from "../loftTaxiServer";
import {USER_CARD_REQUEST_UPDATE, errorChangeCard, USER_CARD_REQUEST_GET, setCard} from "../actions";
import {getToken} from "../reducers";

const changeCard = function* (action) {
  const payload = action.payload;
  const token = yield select(getToken);
  const resp = yield call(serverSaveCard, {...payload, token});

  if (resp.success) {
    yield put(setCard({...payload}));

    localStorage.setItem('cardInfo', JSON.stringify(payload));
  } else {
    yield put(errorChangeCard(resp.error));
  }
}

const fetchCard = function* () {
  const token = yield select(getToken);
  let resp = yield call(serverLoadCard, token);

  if (resp.id) {
    delete resp.id;
    yield put(setCard({...resp}));

    localStorage.setItem('cardInfo', JSON.stringify(resp));
  } else {
    yield put(errorChangeCard(resp.error));
  }
}


const cardSaga = function* () {
  yield takeEvery(USER_CARD_REQUEST_UPDATE, changeCard);
  yield takeEvery(USER_CARD_REQUEST_GET, fetchCard);
}

export default cardSaga;