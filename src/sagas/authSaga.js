import {call, put, takeEvery} from 'redux-saga/effects';
import {serverLogin, serverRegistration} from "../loftTaxiServer";
import {LOG_IN_REQUEST, errorLogIn, LOG_OUT, logIn, REGISTRATION_REQUEST} from "../actions";

const authorization = function* (action) {
  const {email, password} = action.payload;

  const resp = yield call(serverLogin, email, password);

  if (resp.success) {
    yield put(logIn(resp.token));

    localStorage.setItem('isLoggedIn', '1');
    localStorage.setItem('token', resp.token);
  } else {
    yield put(errorLogIn(resp.error));
  }
}

const registration = function* (action) {
  const resp = yield call(serverRegistration, action.payload);

  if (resp.success) {
    yield put(logIn(resp.token));

    localStorage.setItem('isLoggedIn', '1');
    localStorage.setItem('token', resp.token);
  } else {
    yield put(errorLogIn(resp.error));
  }
}

const authSaga = function* () {
  yield takeEvery(LOG_IN_REQUEST, authorization);
  yield takeEvery(REGISTRATION_REQUEST, registration);
  yield takeEvery(LOG_OUT, function () {
    localStorage.clear();
  });
}

export default authSaga;